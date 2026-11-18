# Handoff — 14 October 2026

## Built

- New private `ValuatumOy/company-valuation-international` repository and Vercel project on `valuatum-dk`.
- New responsive visual identity: pale cool surfaces, deep petroleum teal, Manrope typography, soft shapes and report-led hero.
- All 19 existing pages plus a new illustrative sample report; 11 permanent redirects.
- Prerendered HTML, per-page metadata/canonical/OG, Organization/WebSite/Article/Breadcrumb and visible FAQ structured data, sitemap, real 404s, preview noindex.
- Existing active Finland, Denmark, PDF and manual service paths retained. Broader company-data coverage remains forthcoming; user-provided international financial statements can already be used.
- Original content sources and historical illustrations preserved, not presented as newly generated reports.
- Lintapple installed and configured; route and metadata regression checks included.

## Editing

- `src/app/page.tsx`: homepage.
- `src/app/globals.css`: design tokens and responsive styling.
- `src/content/pages.ts`: complete migrated content.
- `src/components/content-page.tsx`: page template and service calls to action.
- `src/components/report-preview.tsx`: illustrative report tabs.
- `src/app/sample-report/page.tsx`: sample calculation and historical report links.
- `src/lib/site.ts`: service URLs and canonical/OG metadata.
- `next.config.ts`: redirects, response headers and indexing policy.

## Verification

Run the commands in README and `scripts/README.md`. The live route checker only makes GET requests to the local website. Never use it to submit to valuation services. CLI deployment status is verified with Vercel inspect; browser QA covers homepage, mobile navigation, FAQ, sample tabs and key content pages.

`npm audit --omit=dev` passed with zero findings at implementation time. The current Next ESLint development dependency chain reports the braces recursion advisory; no patched braces release was available. This dependency processes local lint globs, not visitor input. Do not downgrade Next.js to npm audit's suggested old major version.

All 20 rendered content pages, 11 redirects and local links passed the route/metadata audit. Fifteen unit tests cover migration, indexing and SEO regressions. Lintapple passed with zero findings on the homepage, international contact form, PDF solution and sample report at 375/768/1440px. The interaction suite passed tabs/keyboard navigation, FAQ, mobile menu and contact validation at those widths. Approved narrow policy exceptions are recorded in `ui-policy.json`; this is not a claim of exhaustive WCAG certification. GitHub CI repeats typechecking, ESLint, unit tests, build and rendered route/SEO checks.

## Next editorial inputs

Three approved examples are linked: the current Harvia Oyj consolidated report on arvonmaaritys.fi, the polished JYSK A/S English PDF, and a new manually prepared NVIDIA English PDF. JYSK values concern the Danish legal entity, not the global group. The old NVIDIA source-forecast draft remains withheld; the public example is a separate, reviewed manual DCF using verified FY2026 accounts and explicitly illustrative assumptions. The synthetic walkthrough and historical archive remain identified. Prices/free-credit quantities from the old site are qualified; confirm current commercial terms and legal/security wording before the domain switch.

No production domain switch or payment integration was performed. Earlier report preparation used two authorized local paid runs, described below; the subsequent manual JYSK and NVIDIA edits did not trigger another paid run. The production backend remains unchanged.

## Feedback fixes

- Reproduced the bottom homepage valuation CTA failing after the hero already set `#solutions`. Native fragment anchors now return to the section even when the URL hash is unchanged; shared header/TOC fragment links use the same behavior. The interaction suite covers the exact regression at 375/768/1440px.
- All Finnish customer destinations now open `arvonmaaritys.fi`, superseding the earlier `CVFinland` registration change. Finnish routes remain readable for old-URL compatibility, with the same external ordering destination. The Finnish contact form was removed. Manual primary CTA and the resource guide's registration link open `PPVTemplate` registration. External service links open a separate tab.
- The first migration retained video links and diagram text but omitted actual embeds/diagrams. Restored all four original YouTube videos, the historical-versus-forecast diagram, the method-selection diagram on both resource pages, and the PDF workflow. YouTube uses privacy-enhanced embeds without autoplay; native text diagrams remain readable on mobile.
- `npm run check:content` verifies the old media contract, checks mobile/desktop layout with lintapple, and exercises registration clicks with requests intercepted. It does not submit to the live services. Local route checks and the existing unit/build/type/lint checks passed; actual resource YouTube player loading was also verified in the browser.

## Country offering and report examples

- Finnish orders and all Finnish service/contact/sample links go to `arvonmaaritys.fi`. Its existing public Heeros Oyj sample (26 pages, 4 August 2026) was checked against the local Finnish site's PDF by SHA-256. This is an existing public report, not a newly generated one.
- New English reports for Denmark and the US are requested from the team. Homepage/sample-page rows show JYSK A/S and NVIDIA Corporation with working PDF and request links; country and company prefill the email enquiry. Data availability, scope and price are confirmed before generation. The form prepares email in the visitor's email app and does not send from a server.
- Earlier CreditReports.dk/PDF/manual tools and historical samples remain identifiable as separate existing material.
- `npm run check:commercial` verifies Finnish destinations across all 20 pages, company requests/prefills, the real Finnish sample link and layout/lintapple at 375/768/1440px. All frontend checks passed.
- Foreign preparation and execution are isolated in `work/valuation-report-english` and a local SQLite runner. The user approved generation and publication after review. One JYSK run and one alternate US run (NVIDIA) completed successfully, costing USD 0.428882 and USD 0.460934 respectively. No production backend deployment/reseed or estimate regeneration occurred. Raw source/run data remains outside this website repository.
- English/source-currency support is in draft backend PR https://github.com/ValuatumOy/AI-company-valuation-raportti/pull/13. It preserves source DCF dividends/capex, distinct foreign EVA outputs, annual WACC and unavailable expected values; no FX conversion is applied. Existing Finnish fixture HTML retains byte-for-byte parity. The PR includes the inherited local annual-EVA-table commit `eb91b60`; review it before merging. The production backend remains unchanged.
- Private artifacts are in `work/report-sources` and `work/report-prepared`. JYSK FID 133268 / CVR 13590400 has 2013–2025 history and stored 2026–2035 DKK forecasts from `upcloudtest.valuatum.com`. Production equivalence and its forecast algorithm remain unverified. NVIDIA Wisdom FID 10592 has FY2020–FY2026 history and stored FY2027–FY2036 USD forecasts; FY2025/2026 balance-sheet facts were checked against the official FY2026 SEC annual report. Amazon had no current supplied full model.
- Paid originals are preserved. The reviewed JYSK copy corrects source-backed narrative and rendering without another LLM run or new economic assumptions. Its DCF and EVA bridges reconcile to their own source totals and neither is described as an observed transaction price. The original NVIDIA source-forecast draft remains internal; its forecast economics must be investigated before use. A separate manual NVIDIA example is now approved and public, as described below. Never copy raw source JSON, credentials or the official full NVIDIA annual report into this site's public assets.

## Deployment setup

Vercel project ID: `prj_9YbkB69mf0EhnA0GUfVjAHHRIcpG`; team: `valuatum-dk`. Repository is private. Hobby does not support its automatic Git integration. The CLI can publish a source package using the existing authorized Vercel account; use the README instructions and explicit `--target preview`. At the user's explicit request, deployment authentication is now disabled for this website project. Public previews retain noindex. The old live domain was not attached or moved.

Earlier review URL: https://company-valuation-international-k2eda83ao-valuatum-dk.vercel.app (Ready, explicit Preview target; deployment `dpl_EhgruhB9rhfqqnwtctezszM4AtYK`, source `ea6b990e49a3947621f9d8d280b8bf06dd43e76a`). Public access requires no Vercel login. Anonymous requests to the homepage, sample page and both English PDFs returned HTTP 200 without redirects, cookies, authorization or bypass headers; all retained `X-Robots-Tag: noindex, nofollow`, and both HTML pages retained robots meta noindex. The project setting was updated with `ssoProtection: null`; password and IP protection were already absent. GitHub CI passed for this three-report/editorial/SEO revision: https://github.com/ValuatumOy/company-valuation-international/actions/runs/38563048307. Later documentation updates do not change the deployed source.

GitHub CI passed on source commit `fbaf3ba09bebef440587a4f8d73850f2be378962`. Local typecheck, ESLint, 10 unit tests, build, 20-page/11-redirect audit, JYSK PDF response/popup checks, company request prefills, repeated-hash CTA interactions and lintapple at 375/768/1440px passed. Backend commit `f6f6d20e6a6abdc179b78db45d32d17947943219` passed 312 focused tests plus the separately isolated peer test; five Finnish HTML fixtures retain exact parity. Source ZIP, reviewed JYSK PDF, internal NVIDIA draft and desktop/mobile screenshots are saved in the task's outputs folder.

## Manual JYSK editorial pass

At the user's request, the JYSK PDF was manually polished without a new generation run. Its headings and contents use consistent sentence case. Empty expected-value/range cards and unfinished scenario tables were removed; the document now focuses on the source DCF base case and the existing sensitivity analysis. Repeated technical prose was shortened while material source/model limitations remain disclosed. All retained numerical table cells, SVG charts and 10 external source links were verified unchanged. The current PDF has 27 pages and SHA-256 `38c75a02d902d5f0f030844c1b24ef94a92133fd30d4732841f9795752afcfab`, matching the public asset, output PDF and local HTTP response. The reviewed HTML and paid originals remain preserved; private `work/report-prepared/polish_jysk.py` produces the curated `jysk-polished-report.html` and an audit JSON. Do not overwrite the polished public PDF by re-running the older review export. Backend source code was not changed by this editorial pass.

## Manual US example and full editorial/SEO pass

The user authorized a manual US example despite the old source-model issues. `public/reports/nvidia-english-example.pdf` is a separate 10-page manual report using FY2020–2026 history and official FY2026 balance-sheet facts. All forecast growth, margins, reinvestment and discount assumptions are explicitly illustrative, not management guidance or Wisdom forecasts. Valuation reference is 25 January 2026; preparation is 14 October 2026. The model uses 9% WACC, 3% terminal growth, 16% illustrative cash tax and positive capital-expenditure outflows. It recomputes terminal-year cash flow including working-capital investment. Financial adjustment is USD 76.339bn; illustrative equity value is USD 2,718.196bn. Independent review reconciled every annual cash flow, financial bridge and all 23 sensitivity outcomes. All ten pages passed visual and text-boundary checks. SHA-256 `faf8649a6a84e06e66797216251fa9678fb5816c3a393e72674077a2a38f2799` matches the public and output copies.

Private reproducible preparation files are `work/report-prepared/manual_nvidia.py`, `nvidia-manual-report.html` and `nvidia-manual-model-audit.json`. No external LLM or valuation generation was called for this manual report. Keep these and the original internal draft outside the website repository; only the reviewed PDF is public. Both homepage and sample page link all three company examples. Request links remain email enquiries, with no new automatic international ordering flow.

The no-ai-slop editorial pass covered all 20 website pages and shared copy. The SEO pass unified titles/social metadata, added accurate guide authorship and connected page/breadcrumb/article schema, and corrected collection-page classification. `docs/seo-audit.md` includes the baseline, search intent map, evidence, lab metrics and domain-launch checklist. `npm run check:seo` and the CI route/SEO gate protect the rendered results. Final local verification passed typecheck, ESLint, 15 tests, build, 20-page SEO/route checks, 11 redirects, report PDF actions, the existing media checks and mobile/desktop lintapple. Lighthouse mobile: performance 89, accessibility 100, best practices 100; LCP 2.6s, TBT 340ms, CLS 0. The preview's intentional noindex is Lighthouse's only scored SEO failure; do not remove it for a score. No production domain change or Search Console submission was performed.

## 14 October 2026 — Current Finnish examples and report scope

The Finnish service now uses fresh Harvia, Gofore and Fiskars consolidated reports generated through the current local pipeline, replacing the homepage Heeros and coming-soon cards. The international Finnish example points to `/samples/harvia-oyj.pdf` on arvonmaaritys.fi. Historical Heeros URLs remain preserved on the Finnish site. All three new samples have 16 sections, 26 tables and 7/7/8 SVG charts; confidence grades are absent and substantive limitations remain. Independent financial review required targeted scenario-prose, peer-range and EVA-bridge corrections plus visible source-data caveats. Originals and repair manifests remain private. Three authorized local runs cost USD 1.655158; no Railway production generation or backend deployment occurred.

The website now explicitly labels NVIDIA as a 10-page manual DCF example; its scope differs from the full Harvia/JYSK reports. JYSK retains the previously approved polished 27-page full structure and supported sensitivity illustrations. Neither English PDF was regenerated or altered in this update. No unsupported graphs or scenario values were added.

Current delivery: Finnish commit `f24534d6f944e37abcb074f0ee59239465ae2951` is Ready in Production (`dpl_Hje3Z3wpdXPgzWviGWhqq4aA6ukQ`) and aliased to www.arvonmaaritys.fi. International source `ce93f29` is Ready Preview (`dpl_BNxEuAWYtYuF2bQqycc3kvfgFjVU`), with public preview protection unchanged. GitHub checks passed: https://github.com/ValuatumOy/company-valuation-international/actions/runs/38571428346. Local typecheck, lint, 15 tests, build, rendered route/SEO and commercial-path checks passed. Final PDFs: Harvia 34 pages (SHA-256 bb309b9ff31426a2c5f6c5e48a47a6e2166ef9e77f732a3fdea135f805e54c5d), Gofore 34 (5d74eef07fbc65658378935630118dea51f26af15325180d74b37044be37e03b), Fiskars 36 (3708cb22c7f53bfdeec002bc72da01090f8fedd87efdfd41f24dcf040306a53c). Local HTTP responses match final PDF hashes.

## Full NVIDIA report — 14 October 2026

The public NVIDIA PDF now uses the same full template and section structure as the three current Finnish examples: 26 pages, 16 sections, 29 tables and eight SVG charts. The previous short manual PDF is superseded. Base equity value remains USD 2,718.196016314965 billion, financial bridge USD 76.339 billion. EVA follows the explicit modeled capital roll-forward and terminal residual; it is a reconciliation, not an independent market confirmation. Three full margin scenarios and both sensitivity grids are recalculated. Fiscal reference remains 25 January 2026; report preparation 14 October 2026. Forecasts and scenario weights are authored illustrative inputs, not management guidance or consensus.

Independent review passed 931 numerical comparisons, 460 annual table cells and all 50 sensitivity cells. Final corrections aligned displayed units to bn USD and restored cash/borrowings chart parity from official FY2025/FY2026 accounts. All 26 pages and heavy tables/charts were checked. Public PDF SHA-256: `45dac7c9b1a745e2210ed537d2cd6930f79ae73fb9364fed9574ac860f8b0660`. Private builder/audits: `work/report-prepared/build_nvidia_full.py`, `nvidia-full-model-audit.json`, `nvidia-full-quality-check.json`. No source input or credentials belong in public assets. No paid LLM generation or production backend change was used for this report.

Full NVIDIA publication source `9a9511b` is Ready Preview at https://company-valuation-international-th0ijnnf4-valuatum-dk.vercel.app (deployment `dpl_FiEMzeShxv5ZreSn5SwN9dT1bKgP`). GitHub CI passed. The PDF is public without Vercel login; preview noindex remains.

## Danish automatic orders — implementation review, 14 October 2026

The user confirmed the same automatic order flow as Finland. The new client is
implemented in `codex/denmark-automatic-orders`; backend branch
`codex/denmark-report-orders` includes the earlier English/currency work and
country-aware source, payment, forecast, refinement and delivery paths. Deploy
the separate Finnish webhook country filter before enabling DK Checkout.

Independent cross-repo review passed with ordering gated OFF. It found and
required fixes to generic scenario restatement affecting peer values, empty
refinements, stale original order links, paid-return replays and long forecast
imports. Backend: 428 tests passed. Client: build/TypeScript, lint and 18 tests
passed. Broad isolated browser checks covered responsive375/768/1440, search,
error/request states, native-currency forecast edits, PDF and refinements. Six
focused final checks passed direct forecast CORS/units, explicit start, latest
links and exactly one paid redemption. Fixture traffic was blocked externally.

Production source is `platform.creditreports.dk/rest` with separately configured
server credentials; Upcloud test data is never a fallback. Novo Nordisk passes
offline data readiness and JYSK fails incomplete forecasts. Native source money
is millions, report money thousands. No FX conversion is performed.

Production forecast generation/import and a full paid English DK report have
not been run. Keep both frontend and backend gates OFF until operational checks
pass. Backend CLAUDE.md explicitly requires user approval for a Railway report
generation run. No paid run, actual Stripe payment, source write or customer
email was performed in this implementation. See `docs/danish-orders.md` and the
backend `DANISH_ORDERS.md` for configuration and CORS/webhook prerequisites.

Implementation source `3c5a0f6` is Ready Preview at
https://company-valuation-international-miz30h5l4-valuatum-dk.vercel.app
(`dpl_4aFPMCv9gE7KWwk31MHQaV5FKFF8`), public and noindex. GitHub checks passed.
Draft PRs: international client #1, backend #14 (source `c30e1b0`, supersedes
English-only #13), Finnish webhook isolation #6 (source `c3f4c8a`). All 28 isolated
browser checks passed after focused fixes. Production test approval was requested
for one Novo Nordisk English report; do not interpret an unanswered request as
permission to run it.

The user subsequently approved ONE Novo Nordisk production test, then requested
a wrap-up because the Danish writer credential was unavailable. No paid run
started. Read-only production Python calls are blocked by WAF Bot Control's
`SignalNonBrowserUserAgent` (trace matched in sampled requests). Native source
reads work, but an actual baseline-copy import fails the source permission
`Controller.Estimates`; no job/model was created. Do not enable Danish orders.
Backend `c30e1b0` is now successfully deployed on Railway (configuration deployment
`7b06a024-ca71-4838-831a-d2525a6cecdc`); both DK flags remain `0`. Finnish webhook
filter `c3f4c8a` and international `8f90eed` are on main. CORS is configured for
the stable preview and the reviewed unique deployment. Stable public preview:
https://company-valuation-international-preview.vercel.app. See
`docs/danish-orders.md` for exact stopping point and resume prerequisites.

Credential incident: a metadata inspection accidentally exposed three Wisdom
REST token fields in the task's tool transcript. No values were committed to Git.
Affected fields: `REST_API_KEY` in `pdf-dataimport-Wisdom-prod`; `valuatumRestToken`
and `valuatumRestWriteToken` in `pdf-report/customers/Wisdom`. The user was notified.
These require controlled owner-managed rotation and consumer updates; no tokens
were rotated in this session. Never copy their values into this handoff or Git.

## 2026-11-18 — Security upgrade, PDF drop, request process

- Next.js 16.4.0 → 16.4.6 (`9c2412a`): fixes GHSA-2464-fhr4-w9xw (RCE in image
  optimization) and four related advisories. Deployed to production.
- PDF drop (`/solutions/pdf-based-company-valuation`, `/solutions/international-company-valuation`):
  `src/components/pdf-drop.tsx` uses the existing PDF import service exactly like
  valuation.valuatum.com — POST to the upload Lambda, PUT to the presigned S3 URL,
  then redirect to pdfanalysis.valuatum.com registration with `uploadSession`.
  Verified end to end from the preview origin up to the registration page; no
  account was created, so report generation after registration was not observed.
- S3 bucket `valu-pdf-dataimport-files-prod` CORS (not IaC-managed): added
  `https://company-valuation.com`, `https://www.company-valuation.com`,
  `https://company-valuation-international.vercel.app` and
  `https://company-valuation-international-preview.vercel.app` to the existing
  PUT rule. Previous origins were the Amplify master URL, creditrisk.valuatum.com
  and valuation.valuatum.com; to roll back, remove the four added origins.
- International request process (quote per request): quote and data availability
  within one business day, invoice payment, PDF by email 2–3 business days after
  acceptance. User-confirmed values.
- Decisions: Denmark's €79 automatic order replaces the creditreports.dk card once
  enabled; for Sweden the candidate source is `sweden.valuatum.com` (unverified: its
  `/rest/company` returns 401 like every other Valuatum host, which proves nothing
  about Swedish forecast coverage; needs its own token and owner confirmation).
  Don't clone the DK flow for SE until DK has completed a production run. Domain
  cutover happens after DK, SE and PDF work.
- The PDF drop hands off to the existing PDF tool's own report, not the
  26-page template shown on `/sample-report`. Registration page 404s
  (`/style/741/*.css`) are identical with and without `uploadSession`.
- Still blocked: DK write credential (`Controller.Estimates`) and WAF exception;
  SE API token; Railway CLI token (run `npx @railway/cli login`); Stripe keys must
  be entered in Vercel by the user; Vercel Hobby plan vs. commercial use.

## 2026-11-18 — Denmark and Sweden source findings (read-only)

- Sweden (wiki `SwedenAWSEnvironment`, owner Sami): `sweden.valuatum.com` is a hosted
  Valuatum platform fed by Bolagsverket iXBRL annual reports. Read-only `ai` DB user
  (IAM auth, see wiki `DevelopmentWithAI`) shows 180,199 companies and followed
  models with financial history, but every MODELVERSION has `ESTIMATEYEARS = 0`, no
  fair values, and ESTIMATEGENERATIONJOB is empty: forecasts have never been
  generated there. 1,440 estimate generation rules exist. Sweden sits behind
  `profinder-lb`, which has no WAF, so only the credential blocks it.
- Denmark: Railway still has only `VALUATUM_DK_TOKEN` (no separate write credential);
  DK flags remain 0. `platform.creditreports.dk` is behind `upcloud-prod-lb` /
  `upcloudprod-web-acl`; its Bot Control group is scoped to Host containing
  `platform` with no rule overrides, so `SignalNonBrowserUserAgent` still blocks
  the backend's Python client unless the call comes from Ireland (`allow-ireland`,
  priority 1). Railway SSH stays removed; no WAF or credential change was made.
- Both countries need the same thing from the platform owner: a server-only REST
  credential with `Controller.Estimates` for the international backend.
- WAF change, 2026-11-18 (user-approved): in `upcloudprod-web-acl`, the Bot Control
  scope-down is now `Host contains "platform"` AND NOT (`UriPath starts with "/rest/"`
  AND `Authorization starts with "Bearer "`). Verified from a non-Irish IP with a
  Python user agent: `/rest/` without auth 403, `/rest/` with a Bearer header 401
  (reaches the app), site pages 403 for bots even with a Bearer header, 200 for a
  browser. All other rules unchanged. Pre-change ACL backup:
  `work/waf-backup/upcloudprod-web-acl-2026-11-18.json`.

## 2026-11-18 — Sweden source probe

- Railway now has `VALUATUM_SE_API_BASE_URL=https://sweden.valuatum.com/rest` and
  `VALUATUM_SE_TOKEN` (read access works). Company search needs `code=NNNNNN-NNNN`
  (bare digits return []); broad names return 400 "Too many results".
- Coverage is partial: e.g. Volvo AB and Clas Ohlson are absent; DB COMPANY.INDUSTRYCODE
  is 0 while REST returns NACE `industryText`. Sample data gaps: Axfood Snabbgross AB
  (556000-3575, fid 16872) has EBITDA = EBIT and 2024–2025 copied from 2023;
  Husqvarna Stockholm AB (556983-9805, fid 52623) has real 2024–2025.
- Local read-only readiness probe (`work/tooling/se_readiness.py`, currency label
  overridden in-process only) fails on missing forecast cash-flow reconciliation, as
  expected before generation.
- User-approved estimate generation for fid 52623 returned
  `401 No rights for permission Controller.Estimates`; nothing was created. The SE
  token needs the same permission as the pending DK credential.
- User decisions: English report, €79 like Denmark, Bolagsverket data rights OK.
