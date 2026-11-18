import { acceptsCurrency, isOrderCountry } from "@/lib/order-countries";
import { pipelineUrl } from "@/lib/orders";

async function proxy(request: Request, context: { params: Promise<{ path: string[] }> }) {
  const { path } = await context.params;
  const rid = path[0], action = path.slice(1).join("/");
  if (path.length > 3 || !/^[a-f0-9]{32}$/.test(rid || "") || (request.method === "GET" ? !["", "report.html", "report.pdf"].includes(action) : !["round2", "round2/checkout", "round2/redeem"].includes(action))) return Response.json({ error: "Unknown report action" }, { status: 404 });
  const auth = request.headers.get("authorization") || "";
  if (!/^Bearer (?:exp_|cli_)[A-Za-z0-9_-]+$/.test(auth)) return Response.json({ error: "Open the report using the link from your order." }, { status: 401 });
  if (request.method === "POST" && request.headers.get("origin") !== new URL(request.url).origin) return Response.json({ error: "Invalid report request" }, { status: 403 });
  const headers: Record<string, string> = { Authorization: auth };
  let body: string | undefined;
  if (request.method === "POST") {
    body = await request.text();
    if (body.length > 16000) return Response.json({ error: "Report changes are too long." }, { status: 413 });
    headers["Content-Type"] = "application/json";
  }
  try {
    const info = await fetch(`${pipelineUrl()}/api/runs/${rid}`, { headers: { Authorization: auth }, cache: "no-store", signal: AbortSignal.timeout(15000) });
    if (!info.ok) return Response.json({ error: "The private report link could not be verified." }, { status: info.status });
    const run = await info.json();
    if (!isOrderCountry(run.params?.country_code) || !acceptsCurrency(run.params.country_code, run.params.source_currency)) return Response.json({ error: "Open this report through the service where you ordered it." }, { status: 403 });
    if (!action) return Response.json(run, { headers: { "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow", "Referrer-Policy": "no-referrer" } });
    if (action === "round2/checkout") {
      const capabilities = await fetch(`${pipelineUrl()}/api/public/capabilities`, { cache: "no-store", signal: AbortSignal.timeout(10000) });
      if (!capabilities.ok || (await capabilities.json()).extra_review_price_cents !== 500) return Response.json({ error: "The additional review price needs to be checked. Please contact our team." }, { status: 503 });
    }
    const response = await fetch(`${pipelineUrl()}/api/runs/${rid}${action ? `/${action}` : ""}`, { method: request.method, headers, body, cache: "no-store", signal: AbortSignal.timeout(180000) });
    const responseHeaders = new Headers({ "Content-Type": response.headers.get("content-type") || "application/json", "Cache-Control": "private, no-store", "X-Robots-Tag": "noindex, nofollow", "Referrer-Policy": "no-referrer" });
    if (action === "report.pdf") responseHeaders.set("Content-Disposition", "attachment; filename=valuation-report.pdf");
    return new Response(response.body, { status: response.status, headers: responseHeaders });
  } catch { return Response.json({ error: "The report service could not be reached. Please retry." }, { status: 502 }); }
}
export const GET = proxy;
export const POST = proxy;
