import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CountryOrder } from "@/components/country-order";
import { countryBySlug, orderCountries } from "@/lib/order-countries";
import { ordersEnabled } from "@/lib/orders";

type Props = { params: Promise<{ country: string }> };
export const dynamic = "force-dynamic";
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const country = countryBySlug((await params).country);
  return { title: country ? `Order a ${orderCountries[country].adjective} company valuation report` : "Order a valuation report", robots: { index: false, follow: false } };
}
export default async function CountryOrderPage({ params }: Props) {
  const country = countryBySlug((await params).country);
  if (!country) notFound();
  const spec = orderCountries[country];
  return <main id="main" className="order-shell"><Link className="text-link" href={spec.back.href}>{spec.back.label}</Link><h1>Value a {spec.adjective} company.</h1><p className="intro">Choose the company, review the forecast and receive an English valuation report. Financial figures retain the company’s reporting currency.</p><CountryOrder country={country} enabled={await ordersEnabled(country)} /></main>;
}
