import { countryBySlug } from "@/lib/order-countries";
import { ordersEnabled, pipelineUrl } from "@/lib/orders";

export async function GET(request: Request, { params }: { params: Promise<{ country: string }> }) {
  const country = countryBySlug((await params).country);
  if (!country || !await ordersEnabled(country)) return Response.json({ error: "Online ordering is unavailable. Please request a report." }, { status: 503 });
  const q = (new URL(request.url).searchParams.get("q") || "").trim();
  if (q.length < 3 || q.length > 100) return Response.json({ companies: [] });
  try {
    const response = await fetch(`${pipelineUrl()}/api/public/company-search?${new URLSearchParams({ q, country })}`, { cache: "no-store", signal: AbortSignal.timeout(15000) });
    if (!response.ok) return Response.json({ error: "Company search is unavailable. Please try again." }, { status: 502 });
    const data = await response.json();
    const companies = (Array.isArray(data) ? data : data.companies || []).slice(0, 20);
    return Response.json({ companies });
  } catch { return Response.json({ error: "Company search is unavailable. Please try again." }, { status: 502 }); }
}
