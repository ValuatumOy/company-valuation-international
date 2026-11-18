import { Suspense } from "react";
import type { Metadata } from "next";
import { ReportWorkspace } from "@/components/report-workspace";
import { pipelineUrl } from "@/lib/orders";

export const metadata: Metadata = { title: "Your company valuation report", robots: { index: false, follow: false }, referrer: "no-referrer" };
export const dynamic = "force-dynamic";
export default function ReportPage() {
  return <main id="main" className="order-shell"><h1>Your valuation report.</h1><Suspense fallback={<p>Opening your report…</p>}><ReportWorkspace pipelineBaseUrl={pipelineUrl()} /></Suspense></main>;
}
