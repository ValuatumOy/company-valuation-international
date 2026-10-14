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

Three approved examples are linked: Heeros Oyj on arvonmaaritys.fi, the polished JYSK A/S English PDF, and a new manually prepared NVIDIA English PDF. JYSK values concern the Danish legal entity, not the global group. The old NVIDIA source-forecast draft remains withheld; the public example is a separate, reviewed manual DCF using verified FY2026 accounts and explicitly illustrative assumptions. The synthetic walkthrough and historical archive remain identified. Prices/free-credit quantities from the old site are qualified; confirm current commercial terms and legal/security wording before the domain switch.

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

Review URL: https://company-valuation-international-k2eda83ao-valuatum-dk.vercel.app (Ready, explicit Preview target; deployment `dpl_EhgruhB9rhfqqnwtctezszM4AtYK`, source `ea6b990e49a3947621f9d8d280b8bf06dd43e76a`). Public access requires no Vercel login. Anonymous requests to the homepage, sample page and both English PDFs returned HTTP 200 without redirects, cookies, authorization or bypass headers; all retained `X-Robots-Tag: noindex, nofollow`, and both HTML pages retained robots meta noindex. The project setting was updated with `ssoProtection: null`; password and IP protection were already absent. GitHub CI passed for this three-report/editorial/SEO revision: https://github.com/ValuatumOy/company-valuation-international/actions/runs/38563048307. Later documentation updates do not change the deployed source.

GitHub CI passed on source commit `fbaf3ba09bebef440587a4f8d73850f2be378962`. Local typecheck, ESLint, 10 unit tests, build, 20-page/11-redirect audit, JYSK PDF response/popup checks, company request prefills, repeated-hash CTA interactions and lintapple at 375/768/1440px passed. Backend commit `f6f6d20e6a6abdc179b78db45d32d17947943219` passed 312 focused tests plus the separately isolated peer test; five Finnish HTML fixtures retain exact parity. Source ZIP, reviewed JYSK PDF, internal NVIDIA draft and desktop/mobile screenshots are saved in the task's outputs folder.

## Manual JYSK editorial pass

At the user's request, the JYSK PDF was manually polished without a new generation run. Its headings and contents use consistent sentence case. Empty expected-value/range cards and unfinished scenario tables were removed; the document now focuses on the source DCF base case and the existing sensitivity analysis. Repeated technical prose was shortened while material source/model limitations remain disclosed. All retained numerical table cells, SVG charts and 10 external source links were verified unchanged. The current PDF has 27 pages and SHA-256 `38c75a02d902d5f0f030844c1b24ef94a92133fd30d4732841f9795752afcfab`, matching the public asset, output PDF and local HTTP response. The reviewed HTML and paid originals remain preserved; private `work/report-prepared/polish_jysk.py` produces the curated `jysk-polished-report.html` and an audit JSON. Do not overwrite the polished public PDF by re-running the older review export. Backend source code was not changed by this editorial pass.

## Manual US example and full editorial/SEO pass

The user authorized a manual US example despite the old source-model issues. `public/reports/nvidia-english-example.pdf` is a separate 10-page manual report using FY2020–2026 history and official FY2026 balance-sheet facts. All forecast growth, margins, reinvestment and discount assumptions are explicitly illustrative, not management guidance or Wisdom forecasts. Valuation reference is 25 January 2026; preparation is 14 October 2026. The model uses 9% WACC, 3% terminal growth, 16% illustrative cash tax and positive capital-expenditure outflows. It recomputes terminal-year cash flow including working-capital investment. Financial adjustment is USD 76.339bn; illustrative equity value is USD 2,718.196bn. Independent review reconciled every annual cash flow, financial bridge and all 23 sensitivity outcomes. All ten pages passed visual and text-boundary checks. SHA-256 `faf8649a6a84e06e66797216251fa9678fb5816c3a393e72674077a2a38f2799` matches the public and output copies.

Private reproducible preparation files are `work/report-prepared/manual_nvidia.py`, `nvidia-manual-report.html` and `nvidia-manual-model-audit.json`. No external LLM or valuation generation was called for this manual report. Keep these and the original internal draft outside the website repository; only the reviewed PDF is public. Both homepage and sample page link all three company examples. Request links remain email enquiries, with no new automatic international ordering flow.

The no-ai-slop editorial pass covered all 20 website pages and shared copy. The SEO pass unified titles/social metadata, added accurate guide authorship and connected page/breadcrumb/article schema, and corrected collection-page classification. `docs/seo-audit.md` includes the baseline, search intent map, evidence, lab metrics and domain-launch checklist. `npm run check:seo` and the CI route/SEO gate protect the rendered results. Final local verification passed typecheck, ESLint, 15 tests, build, 20-page SEO/route checks, 11 redirects, report PDF actions, the existing media checks and mobile/desktop lintapple. Lighthouse mobile: performance 89, accessibility 100, best practices 100; LCP 2.6s, TBT 340ms, CLS 0. The preview's intentional noindex is Lighthouse's only scored SEO failure; do not remove it for a score. No production domain change or Search Console submission was performed.
