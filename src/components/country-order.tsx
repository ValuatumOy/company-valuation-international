"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { businessId, orderCountries, type OrderCompany, type OrderCountry } from "@/lib/order-countries";

export function CountryOrder({ country, enabled }: { country: OrderCountry; enabled: boolean }) {
  const spec = orderCountries[country];
  const contact = `/contact-international?country=${spec.name}`;
  const [companies, setCompanies] = useState<OrderCompany[]>([]);
  const [selected, setSelected] = useState<OrderCompany | null>(null);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);
  const [error, setError] = useState("");
  const [notices, setNotices] = useState<string[]>([]);
  async function search(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setLoading(true); setError(""); setSelected(null);
    const query = String(new FormData(event.currentTarget).get("query") || "");
    try {
      const response = await fetch(`/api/order/${spec.slug}/search?${new URLSearchParams({ q: query })}`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      setCompanies(data.companies); setSearched(true);
    } catch (error) { setError(error instanceof Error ? error.message : "Search could not be completed. Please retry."); }
    finally { setLoading(false); }
  }
  async function checkout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!selected) return;
    const form = new FormData(event.currentTarget); setLoading(true); setError("");
    try {
      const response = await fetch(`/api/order/${spec.slug}/checkout`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ fid: selected.fid, code: businessId(selected.company_code), email: form.get("email"), input: form.get("input"), website: form.get("website"), acknowledged: notices.length > 0 }) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error);
      if (data.notices?.length) { setNotices(data.notices); setLoading(false); return; }
      const url = new URL(data.url);
      if (url.protocol !== "https:" || url.hostname !== "checkout.stripe.com") throw new Error("Checkout could not be opened. Please retry.");
      window.location.assign(url.href);
    } catch (error) { setError(error instanceof Error ? error.message : "Checkout could not be opened. Please retry."); setLoading(false); }
  }
  if (!enabled) return <section className="order-panel"><h2>Request your report</h2><p>Online ordering is not available here yet. Our team can confirm the company data and prepare an English report.</p><Link className="button" href={contact}>Request report</Link></section>;
  return <section className="order-panel"><h2>Find your company</h2><form className="order-search" onSubmit={search}><label className="form-field">Company name or {spec.idName}<input name="query" minLength={3} maxLength={100} required autoComplete="off" /></label><button className="button" disabled={loading} type="submit">{loading ? "Please wait…" : "Search companies"}</button></form>
    {error && <p className="order-error" role="alert">{error}</p>}
    {searched && !companies.length && <p role="status">No matching company was found. Try its {spec.idHint} or <Link className="text-link" href={contact}>request a report</Link>.</p>}
    {!!companies.length && <ul className="company-results" aria-label="Matching companies">{companies.map(company => <li key={`${company.fid}:${company.company_code}`}><button type="button" aria-pressed={selected?.fid === company.fid} onClick={() => { setSelected(company); setError(""); setNotices([]); }}><strong>{company.company_name}</strong><span>{spec.idShort} {businessId(company.company_code)} · {company.industry_text || `${spec.adjective} company`}</span></button></li>)}</ul>}
    {selected && <form className="contact-form" onSubmit={checkout} key={selected.fid}><h2>{selected.company_name}</h2><p>English valuation report · €79 including applicable VAT. Payment is in EUR; the report uses the company’s reporting currency. Company data is checked before checkout opens.</p><p>After payment, review and edit the revenue and operating-profit forecast before starting your report.</p><label className="form-field">Email for your report<input name="email" type="email" autoComplete="email" required maxLength={200} /></label><label className="form-field">Company context or valuation assumptions (optional)<textarea name="input" rows={4} maxLength={4000} /></label><label className="sr-only" aria-hidden="true">Leave empty<input name="website" tabIndex={-1} autoComplete="off" /></label>{!!notices.length && <div className="order-notices" role="status"><h3>Before you pay</h3><ul>{notices.map(notice => <li key={notice}>{notice}</li>)}</ul></div>}<button className="button" type="submit" disabled={loading}>{loading ? spec.checking : notices.length ? "I understand, continue to payment" : "Continue to secure payment"}</button></form>}
  </section>;
}
