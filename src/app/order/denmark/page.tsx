import Link from "next/link";
import type { Metadata } from "next";
import { DanishOrder } from "@/components/danish-order";
import { danishOrdersEnabled } from "@/lib/denmark-orders";

export const metadata: Metadata = { title: "Order a Danish company valuation report", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";
export default async function DanishOrderPage() {
  return <main id="main" className="order-shell"><Link className="text-link" href="/solutions/danish-company-valuation">Danish company valuation</Link><h1>Value a Danish company.</h1><p className="intro">Choose the company, review the forecast and receive an English valuation report. Financial figures retain the company’s reporting currency.</p><DanishOrder enabled={await danishOrdersEnabled()} /></main>;
}
