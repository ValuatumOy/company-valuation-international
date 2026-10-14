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

## Production test stopping point, 14 October 2026

The user approved one Novo Nordisk production test, then asked to wrap up before
obtaining the missing credential. No paid report run was started.

- Actual source reads through the native PowerShell client succeed. The first
  forecast-import attempt reaches Java but returns
  `403: No rights for permission Controller.Estimates`; no job or new model was
  created. Do not grant writes to the directory's existing client credential.
  A separate server-only Danish credential with that permission is required.
- A read-only modeldata call from Railway's actual Python client is blocked by
  AWS WAF `AWSManagedRulesBotControlRuleSet/SignalNonBrowserUserAgent`. The traced
  request established this exact cause; no firewall rule was changed. A reviewed
  exception for legitimate authenticated API traffic is required before launch.
- Backend source `c30e1b0` is deployed successfully on Railway with both Danish
  enablement/verification flags `0`. International CORS origins are configured.
  The Finnish webhook country filter `c3f4c8a` is on main.
- Public stable preview:
  https://company-valuation-international-preview.vercel.app
  points at reviewed source `3c5a0f6`. Frontend ordering stays disabled.

Private source-test evidence is preserved outside Git in
`work/report-prepared/novo-dk-source-operational-iwr-audit.json`. Temporary source
diagnostic SSH access was removed. Continue with the dedicated credential and
scoped firewall configuration, then source generation/import, the one approved
English report test and financial/layout review. The wrap-up request means no
production test should resume until the user resumes this work.
