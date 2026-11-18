"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { acceptsCurrency, isOrderCountry } from "@/lib/order-countries";

type Forecast = { years: number[]; net_sales: number[]; ebit: number[] };
type Question = { id: string; question: string; why_it_matters?: string };
type ReportInput = { meta?: { country_code?: string; currency?: string; company_name?: string }; forecast?: Forecast; clarification_requests?: Question[] };
type Run = { status: string; params?: { country_code?: string; source_currency?: string }; input_data?: ReportInput; results?: { order: number; parsed_json?: ReportInput }[]; report?: { meta?: { company_name?: string }; clarification_requests?: { id: string; question: string; why_it_matters?: string }[] } };

export function ReportWorkspace({ pipelineBaseUrl }: { pipelineBaseUrl: string }) {
  const params = useSearchParams();
  const [rid, setRid] = useState(params.get("rid") || "");
  const key = params.get("key") || "";
  const [run, setRun] = useState<Run | null>(null), [forecast, setForecast] = useState<Forecast | null>(null);
  const [html, setHtml] = useState(""), [error, setError] = useState(""), [busy, setBusy] = useState(false);
  const [answers, setAnswers] = useState<Record<string, string>>({}), [extraReview, setExtraReview] = useState(false);
  const [reviewContext, setReviewContext] = useState("");
  const headers = useCallback(() => ({ Authorization: `Bearer ${key}`, "Content-Type": "application/json" }), [key]);
  const input = run?.input_data || run?.results?.find(result => result.order === 0)?.parsed_json;
  const currency = input?.meta?.currency || run?.params?.source_currency || "";
  const runCountry = input?.meta?.country_code || run?.params?.country_code;
  const validLink = /^[a-f0-9]{32}$/.test(rid) && /^(?:exp_|cli_)[A-Za-z0-9_-]+$/.test(key);
  const questions = run?.results?.find(result => result.order === 1)?.parsed_json?.clarification_requests || [];
  const hasReviewInput = !!reviewContext.trim() || questions.some(question => answers[question.id]?.trim());
  const changeRun = useCallback((nextRid: string) => {
    if (!/^[a-f0-9]{32}$/.test(nextRid)) throw new Error("The updated report link could not be retrieved.");
    setRid(nextRid); setHtml(""); setRun(null); setForecast(null); setAnswers({}); setExtraReview(false); setReviewContext("");
    window.history.replaceState(null, "", `/report?rid=${encodeURIComponent(nextRid)}&key=${encodeURIComponent(key)}`);
  }, [key, setRid, setHtml, setRun, setForecast, setAnswers, setExtraReview, setReviewContext]);
  const paidToken = params.get("paid_round_token"), paidSession = params.get("session_id"), paidParentRid = params.get("rid") || "";
  const refresh = useCallback(async () => {
    const response = await fetch(`/api/report/${rid}`, { headers: headers(), cache: "no-store" });
    if (!response.ok) throw new Error("The report could not be opened. Check your order link and retry.");
    const next: Run & { latest_run_id?: string } = await response.json();
    if (next.latest_run_id && next.latest_run_id !== rid && !paidToken) {
      changeRun(next.latest_run_id);
      return "ok";
    }
    const source = next.input_data || next.results?.find(result => result.order === 0)?.parsed_json;
    const country = source?.meta?.country_code || next.params?.country_code;
    if (!isOrderCountry(country)) throw new Error("This page is for reports ordered on this website. Open your report through the service where you ordered it.");
    setRun(next);
    if (next.status === "awaiting_forecast" && source?.forecast) setForecast(previous => previous || structuredClone(source.forecast!));
    if (["ok", "validation_failed"].includes(next.status)) {
      const report = await fetch(`/api/report/${rid}/report.html`, { headers: headers(), cache: "no-store" });
      if (report.ok) setHtml(await report.text());
    }
    return next.status;
  }, [headers, rid, paidToken, changeRun, setRun, setForecast, setHtml]);
  useEffect(() => {
    if (!validLink) return;
    let stopped = false, timer: ReturnType<typeof setTimeout>;
    async function poll() {
      try { const status = await refresh(); if (!stopped && !["ok", "validation_failed", "error"].includes(status)) timer = setTimeout(poll, 5000); }
      catch (failure) { if (!stopped) setError(failure instanceof Error ? failure.message : "Please retry opening the report."); }
    }
    void poll(); return () => { stopped = true; clearTimeout(timer); };
  }, [refresh, validLink]);
  useEffect(() => {
    if (!validLink || !paidToken || !paidSession || !/^[a-f0-9]{32}$/.test(paidParentRid)) return;
    let active = true;
    async function redeem() {
      try {
        const response = await fetch(`/api/report/${paidParentRid}/round2/redeem`, { method: "POST", headers: headers(), body: JSON.stringify({ token: paidToken, stripe_session_id: paidSession }) });
        const result = await response.json();
        if (response.status === 409) {
          const previous = await fetch(`/api/report/${paidParentRid}`, { headers: headers(), cache: "no-store" });
          const recovered = previous.ok ? await previous.json() : null;
          if (recovered?.latest_run_id && recovered.latest_run_id !== paidParentRid) {
            if (active) changeRun(recovered.latest_run_id);
            return;
          }
        }
        if (!response.ok) throw new Error("Your paid review could not be opened. Please retry or contact our team; do not pay again.");
        if (active) changeRun(result.run_id);
      } catch (failure) { if (active) setError(failure instanceof Error ? failure.message : "Please retry."); }
    }
    void redeem(); return () => { active = false; };
  }, [paidToken, paidSession, paidParentRid, headers, changeRun, validLink]);
  async function start(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (!forecast) return;
    setBusy(true); setError("");
    const original = input?.forecast;
    const edits = forecast.years.flatMap((year, i) => (["net_sales", "ebit"] as const).filter(variable => original?.[variable][i] !== forecast[variable][i]).map(variable => ({ varname: variable === "net_sales" ? "ns" : "ebit", year, value: forecast[variable][i] / 1000 })));
    try {
      const response = await fetch(`${pipelineBaseUrl}/api/runs/${rid}/generate-forecast`, { method: "POST", headers: headers(), body: JSON.stringify({ forecast_edits: edits }) });
      if (!response.ok) throw new Error("The forecast could not be submitted. Please check the figures and try again.");
      await refresh();
    } catch (failure) { setError(failure instanceof Error ? failure.message : "Please retry."); }
    finally { setBusy(false); }
  }
  async function download() {
    setBusy(true); setError("");
    try {
      const response = await fetch(`/api/report/${rid}/report.pdf`, { headers: headers() });
      if (!response.ok) throw new Error("The PDF could not be downloaded. Please retry.");
      const url = URL.createObjectURL(await response.blob()), link = document.createElement("a");
      link.href = url; link.download = "company-valuation-report.pdf"; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch (failure) { setError(failure instanceof Error ? failure.message : "Please retry."); }
    finally { setBusy(false); }
  }
  async function refine(event: FormEvent<HTMLFormElement>, paid = false) {
    event.preventDefault(); if (!hasReviewInput) return; setBusy(true); setError("");
    const body = { clarifications: questions.filter(question => answers[question.id]?.trim()).map(question => ({ id: question.id, question: question.question, answer: answers[question.id].trim() })), clarifications_free_text: reviewContext.trim() };
    try {
      const response = await fetch(`/api/report/${rid}/round2${paid ? "/checkout" : ""}`, { method: "POST", headers: headers(), body: JSON.stringify(body) });
      if (response.status === 429) { setExtraReview(true); return; }
      if (!response.ok) throw new Error("The review could not be started. Please try again or contact our team.");
      const result = await response.json();
      if (paid) {
        const url = new URL(result.checkout_url);
        if (url.protocol !== "https:" || url.hostname !== "checkout.stripe.com") throw new Error("The payment page could not be verified.");
        window.location.assign(url.href);
      } else changeRun(result.run_id);
    } catch (failure) { setError(failure instanceof Error ? failure.message : "Please retry."); }
    finally { setBusy(false); }
  }
  if (!validLink) return <section className="order-panel"><p>Open the report using the private link from your order confirmation.</p></section>;
  return <section className="order-panel"><h2>{input?.meta?.company_name || run?.report?.meta?.company_name || "Your company"}</h2>{error && <p role="alert" className="order-error">{error}</p>}
    {!run && <p role="status">Loading your order…</p>}
    {run?.status === "awaiting_forecast" && forecast && isOrderCountry(runCountry) && acceptsCurrency(runCountry, currency) && <form onSubmit={start}><h3>Review the forecast</h3><p>Amounts are in millions of {currency}. These are model forecasts, not company guidance. Change revenue and operating profit where you have better assumptions.</p><div className="forecast-scroll"><table className="forecast-table"><caption>Annual forecast · million {currency}</caption><thead><tr><th>Fiscal year</th><th>Revenue</th><th>Operating profit</th></tr></thead><tbody>{forecast.years.map((year, i) => <tr key={year}><th>{year}</th>{(["net_sales", "ebit"] as const).map(variable => <td key={variable}><input aria-label={`${variable === "net_sales" ? "Revenue" : "Operating profit"} ${year}`} type="number" step="any" required value={forecast[variable][i] / 1000} onChange={event => { const amount = event.target.valueAsNumber; if (Number.isFinite(amount)) setForecast(previous => previous ? { ...previous, [variable]: previous[variable].map((value, index) => index === i ? amount * 1000 : value) } : null); }} /></td>)}</tr>)}</tbody></table></div><button className="button" disabled={busy} type="submit">{busy ? "Submitting forecast…" : "Start my report"}</button></form>}
    {run && !["awaiting_forecast", "ok", "validation_failed", "error"].includes(run.status) && <p role="status">Preparing your report. You can return using the same order link.</p>}
    {run?.status === "error" && <p role="alert">The report could not be completed. Contact company-valuation@valuatum.com with your order reference; you do not need to pay again.</p>}
    {run?.status === "validation_failed" && <p role="alert">The report needs further review. Check its limitations and contact our team before using the result.</p>}
    {html && <><button className="button" type="button" disabled={busy} onClick={download}>Download PDF</button><form className="contact-form" onSubmit={event => refine(event, extraReview)}><h3>Review your assumptions</h3><p>Provide answers or company information to refine the report. Figures change only when supported by the model and your confirmed assumptions.</p>{questions.map(question => <label className="form-field" key={question.id}>{question.question}<textarea rows={3} maxLength={2000} value={answers[question.id] || ""} onChange={event => setAnswers(previous => ({ ...previous, [question.id]: event.target.value }))} /></label>)}<label className="form-field">Additional company information<textarea name="context" rows={4} maxLength={8000} value={reviewContext} onChange={event => setReviewContext(event.target.value)} /></label>{extraReview && <p>Your included reviews have been used. An additional review costs €5 including applicable VAT.</p>}<button className="button" type="submit" disabled={busy || !hasReviewInput}>{busy ? "Preparing review…" : extraReview ? "Buy an additional review · €5" : "Refine my report"}</button></form><iframe className="report-frame" sandbox="allow-popups" referrerPolicy="no-referrer" title="English company valuation report" srcDoc={html} /></>}
  </section>;
}
