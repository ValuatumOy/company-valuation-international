# Danish ordering

`/order/denmark` uses the existing Finnish backend with an explicit Danish source,
English report language and native DKK/EUR report currency. Payment remains EUR.
The flow is company search → source readiness → €79 payment → forecast review/edit
→ report generation → private English HTML/PDF → included or paid refinements.

Enable only after the backend's `DANISH_ORDERS.md` operational checks pass:

- Set `DANISH_ORDERS_ENABLED=1`, `VALUATION_PIPELINE_URL`, and `ORDER_SITE_URL`.
- Configure `STRIPE_SECRET_KEY`, `STRIPE_AI_REPORT_PRICE_ID`, and
  `STRIPE_WEBHOOK_SECRET` on the server. The base price must be active, one-time,
  EUR 79, with inclusive tax. Additional reviews require backend price EUR 5.
- Register `/api/stripe/webhook` for completed and async-paid Checkout sessions.
- Deploy the Finnish webhook country filter first so DK orders are ignored there.
- Set the backend's separate Danish production credentials and enablement flags.
- Add the international site origin to backend `ALLOWED_ORIGINS` and verify its
  authenticated forecast-import CORS preflight before launch. Forecast submission
  goes directly to the backend, matching Finland, because source imports can take
  up to ten minutes and exceed Vercel's request budget.

Until both frontend and backend enablement gates pass, the order page offers a
report request. Existing public country copy continues to describe that available
service. Switch launch copy and primary Denmark destinations when orders are enabled.

The source checks bind FID and the exact source company code to the paid company.
A source-provided `K` is retained internally; customers see their eight-digit CVR.
Incomplete sources are rejected before Stripe Checkout. Production Novo Nordisk
passes the offline data check; production JYSK currently lacks complete forecasts.
Read-only source checks do not prove that forecast generation/import works.

Forecast rows arrive in thousands of the native currency. The editor displays
millions and sends edited values in millions to the source import. No FX conversion
is made. Stripe metadata and webhook verification bind country, language, company,
currency and recipient. Replayed confirmations resolve to the same order.

The report proxy allows only key-bound report and refinement endpoints.
It checks Danish run ownership before forwarding, preserves private/no-store,
noindex and no-referrer headers, and exposes no admin or force-retry actions.
Empty refinements are disabled; old emailed links follow the latest report version.

Verification uses isolated local fixtures with external requests blocked. No real
Stripe payment, production report run, forecast import or customer email is part
of automated verification. A separately approved production run is still required
before launch. Keep production ordering disabled until that succeeds.
