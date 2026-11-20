import { businessId, countryBySlug, orderCountries } from "@/lib/order-countries";
import { checkoutOrigin, inputMetadata, OrderError, orderNotices, orderPrice, ordersEnabled, productTag, selectedCompanyReady, stripeClient } from "@/lib/orders";

export const maxDuration = 150;
export async function POST(request: Request, { params }: { params: Promise<{ country: string }> }) {
  if (request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Please start checkout from this website." }, { status: 403 });
  const country = countryBySlug((await params).country);
  if (!country || !await ordersEnabled(country)) return Response.json({ error: "Online ordering is unavailable. Please request a report." }, { status: 503 });
  const spec = orderCountries[country];
  let body: { fid?: unknown; code?: unknown; email?: unknown; input?: unknown; website?: unknown; acknowledged?: unknown };
  try { body = await request.json(); } catch { return Response.json({ error: "Please check the order details." }, { status: 400 }); }
  if (body.website || typeof body.code !== "string" || !spec.businessId.test(body.code) || !Number.isSafeInteger(body.fid) || Number(body.fid) <= 0 || typeof body.email !== "string" || body.email.length > 200 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email) || (body.input !== undefined && (typeof body.input !== "string" || Array.from(body.input).length > 4000))) return Response.json({ error: `Please check the company, ${spec.idName} and email address.` }, { status: 400 });
  try {
    const company = await selectedCompanyReady(country, Number(body.fid), body.code);
    const notices = orderNotices(company);
    if (notices.length && body.acknowledged !== true) return Response.json({ notices });
    const price = await orderPrice();
    const origin = checkoutOrigin();
    const session = await stripeClient()!.checkout.sessions.create({ mode: "payment", line_items: [{ price: price.id, quantity: 1 }], customer_email: body.email, customer_creation: "always", billing_address_collection: "required", automatic_tax: { enabled: true }, tax_id_collection: { enabled: true }, locale: "en", invoice_creation: { enabled: true, invoice_data: { footer: "Valuatum Oy — Company valuation report" } }, metadata: { product: productTag, kind: "existing", country, reportLanguage: "en", reportCurrency: company.currency, companyName: company.company_name.slice(0, 200), businessId: businessId(company.company_code), companyCode: company.company_code, fid: String(company.fid), customerEmail: body.email, forecast: "true", ...inputMetadata(String(body.input || "")) }, success_url: `${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`, cancel_url: `${origin}/order/${spec.slug}?cancelled=1` });
    return Response.json({ url: session.url });
  } catch (error) { return Response.json({ error: error instanceof OrderError ? error.message : "Checkout could not be opened. Please try again." }, { status: 502 }); }
}
