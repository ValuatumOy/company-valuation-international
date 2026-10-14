import Link from "next/link";
import type { Metadata } from "next";
import { fulfilDanishSession, OrderError, stripeClient } from "@/lib/denmark-orders";

export const metadata: Metadata = { title: "Your valuation report order", robots: { index: false, follow: false }, referrer: "no-referrer" };
export const dynamic = "force-dynamic";
export default async function CheckoutSuccess({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id: id } = await searchParams;
  let report: { runId: string; key: string } | null = null, error = "Open this page using the confirmation link from your payment.";
  if (id && /^cs_[a-zA-Z0-9_]{10,200}$/.test(id)) {
    try {
      const stripe = stripeClient();
      if (!stripe) throw new Error("Order confirmation is unavailable. Please contact our team.");
      report = await fulfilDanishSession(await stripe.checkout.sessions.retrieve(id));
    } catch (failure) { error = failure instanceof OrderError ? failure.message : "Your order could not be opened. Please retry or contact our team with your payment reference."; }
  }
  return <main id="main" className="order-shell"><h1>{report ? "Your report order is ready." : "Check your order."}</h1><section className="order-panel">{report ? <><p>Review the forecast before starting the English report. Your order link also lets you return to the completed report.</p><Link className="button" href={`/report?rid=${encodeURIComponent(report.runId)}&key=${encodeURIComponent(report.key)}`}>Review forecast</Link></> : <><p role="alert">{error}</p><p>If payment succeeded, keep your payment reference and contact <a className="text-link" href="mailto:company-valuation@valuatum.com">company-valuation@valuatum.com</a>. You do not need to pay again.</p><Link className="text-link" href="/order/denmark">Return to company search</Link></>}</section></main>;
}
