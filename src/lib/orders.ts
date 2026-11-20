import Stripe from "stripe";
import { acceptsCurrency, businessId, isOrderCountry, orderCountries, type OrderCompany, type OrderCountry } from "./order-countries.ts";

export const productTag = "arvonmaaritys_ai_raportti";
export class OrderError extends Error {}
export const pipelineUrl = () => (process.env.VALUATION_PIPELINE_URL || "https://valu-pipeline-production-88f2.up.railway.app").replace(/\/$/, "");

export type CompanyReadiness = OrderCompany & { eligible: boolean; currency: string; actual_year?: number; actual_years?: number[]; forecast_years?: number[]; negative_equity?: boolean; reason?: string };

// Shown before payment; the buyer confirms them before checkout opens.
export function orderNotices(company: CompanyReadiness) {
  const notices: string[] = [];
  const years = company.actual_years || [];
  if (years.length && years.length < 3) notices.push(`Only ${years.length === 1 ? "one financial year is" : `${years.length} financial years are`} available for this company (${years.length === 1 ? years[0] : `${years[0]}–${years[years.length - 1]}`}). The valuation relies more on the forecast than on reported history.`);
  if (company.negative_equity) notices.push("The cash-flow valuation for this company is negative. Shareholders have limited liability, so the report will show an equity value of 0.");
  return notices;
}

export function stripeClient() {
  const key = process.env.STRIPE_SECRET_KEY;
  return key ? new Stripe(key) : null;
}

export function checkoutOrigin() {
  const configured = process.env.ORDER_SITE_URL;
  if (configured) return new URL(configured).origin;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NODE_ENV !== "production") return "http://localhost:3000";
  throw new Error("Order site URL is not configured");
}

export async function ordersEnabled(country: OrderCountry) {
  if (process.env[orderCountries[country].flag] !== "1" || !process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_AI_REPORT_PRICE_ID) return false;
  try {
    const response = await fetch(`${pipelineUrl()}/api/public/capabilities`, { cache: "no-store", signal: AbortSignal.timeout(10000) });
    if (!response.ok) return false;
    const data = await response.json();
    return data.countries?.[country]?.enabled === true && data.countries[country].language === "en";
  } catch { return false; }
}

export async function selectedCompanyReady(country: OrderCountry, fid: number, code: string): Promise<CompanyReadiness> {
  const spec = orderCountries[country];
  const query = new URLSearchParams({ country, fid: String(fid), code });
  const response = await fetch(`${pipelineUrl()}/api/public/company-readiness?${query}`, { cache: "no-store", signal: AbortSignal.timeout(spec.readinessTimeout) });
  if (!response.ok) throw new OrderError("Company data could not be checked. Please try again.");
  const data: CompanyReadiness = await response.json();
  if (!data.eligible || !acceptsCurrency(country, data.currency) || data.fid !== fid || !spec.sourceCode.test(data.company_code) || businessId(data.company_code) !== code) throw new OrderError("This company is not available for automatic ordering. Please request a report from our team.");
  return data;
}

export async function orderPrice() {
  const stripe = stripeClient();
  const id = process.env.STRIPE_AI_REPORT_PRICE_ID;
  if (!stripe || !id) throw new OrderError("Online ordering is unavailable.");
  const price = await stripe.prices.retrieve(id);
  if (!price.active || price.type !== "one_time" || price.currency !== "eur" || price.unit_amount !== 7900 || price.tax_behavior !== "inclusive") throw new OrderError("The report price needs to be checked before ordering.");
  return price;
}

export function inputMetadata(input: string) {
  const characters = Array.from(input).slice(0, 4000);
  return Object.fromEntries(Array.from({ length: 8 }, (_, i) => [i === 0 ? "userInput" : `userInput${i + 1}`, characters.slice(i * 500, (i + 1) * 500).join("")]).filter(([, value]) => value));
}

export function readInput(metadata: Stripe.Metadata | null) {
  return Array.from({ length: 8 }, (_, i) => metadata?.[i === 0 ? "userInput" : `userInput${i + 1}`] || "").join("");
}

export async function fulfilOrderSession(session: Stripe.Checkout.Session) {
  const meta = session.metadata;
  const country = meta?.country;
  if (session.payment_status !== "paid" || meta?.product !== productTag || !isOrderCountry(country) || meta.reportLanguage !== "en" || !acceptsCurrency(country, meta.reportCurrency)) throw new OrderError("This payment is not a valuation-report order.");
  const fid = Number(meta.fid);
  if (!Number.isSafeInteger(fid) || fid <= 0 || !orderCountries[country].businessId.test(meta.businessId || "")) throw new OrderError("The paid company could not be identified.");
  const response = await fetch(`${pipelineUrl()}/api/public/checkout-generate`, {
    method: "POST", headers: { "Content-Type": "application/json" }, cache: "no-store", signal: AbortSignal.timeout(60000),
    body: JSON.stringify({ country, report_language: "en", business_id: meta.businessId, fid, company_name: meta.companyName, email: session.customer_details?.email || session.customer_email || meta.customerEmail, user_input: readInput(meta), stripe_session_id: session.id, mode: "forecast", website: "" }),
  });
  if (!response.ok) throw new OrderError("Payment was received, but the report could not be opened. Please retry or contact our team with your payment reference.");
  const data = await response.json();
  if (!data.run_id || !data.key) throw new Error("The report link could not be retrieved.");
  return { runId: String(data.run_id), key: String(data.key) };
}
