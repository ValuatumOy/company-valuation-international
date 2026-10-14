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

All 20 rendered content pages, 11 redirects and local links passed the route/metadata audit. Ten unit tests cover migration and indexing. Lintapple passed with zero findings on the homepage, international contact form, PDF solution and sample report at 375/768/1440px. The interaction suite passed tabs/keyboard navigation, FAQ, mobile menu and contact validation at those widths. Approved narrow policy exceptions are recorded in `ui-policy.json`; this is not a claim of exhaustive WCAG certification. GitHub CI repeats typechecking, ESLint, unit tests and build.

## Next editorial inputs

The approved JYSK A/S English PDF is published as an example with source/model limitations. Its values concern the Danish legal entity, not the global group. The NVIDIA draft is withheld pending validation of negative forecast depreciation, investment cash inflows and unusually large interest expenses. The synthetic walkthrough and historical archive remain identified. Prices/free-credit quantities from the old site are qualified; confirm current commercial terms and inherited legal/security wording before the domain switch.

No production domain switch, payment integration, backend change or paid report generation was performed.

## Feedback fixes

- Reproduced the bottom homepage valuation CTA failing after the hero already set `#solutions`. Native fragment anchors now return to the section even when the URL hash is unchanged; shared header/TOC fragment links use the same behavior. The interaction suite covers the exact regression at 375/768/1440px.
- All Finnish customer destinations now open `arvonmaaritys.fi`, superseding the earlier `CVFinland` registration change. Finnish routes remain readable for old-URL compatibility, with the same external ordering destination. The Finnish contact form was removed. Manual primary CTA and the resource guide's registration link open `PPVTemplate` registration. External service links open a separate tab.
- The first migration retained video links and diagram text but omitted actual embeds/diagrams. Restored all four original YouTube videos, the historical-versus-forecast diagram, the method-selection diagram on both resource pages, and the PDF workflow. YouTube uses privacy-enhanced embeds without autoplay; native text diagrams remain readable on mobile.
- `npm run check:content` verifies the old media contract, checks mobile/desktop layout with lintapple, and exercises registration clicks with requests intercepted. It does not submit to the live services. Local route checks and the existing unit/build/type/lint checks passed; actual resource YouTube player loading was also verified in the browser.

## Country offering and report examples

- Finnish orders and all Finnish service/contact/sample links go to `arvonmaaritys.fi`. Its existing public Heeros Oyj sample (26 pages, 4 August 2026) was checked against the local Finnish site's PDF by SHA-256. This is an existing public report, not a newly generated one.
- New English reports for Denmark and the US are requested from the team. Homepage/sample-page rows show JYSK A/S and NVIDIA Corporation with working request links; country and company prefill the email enquiry. JYSK also links to its reviewed English PDF. Data availability, scope and price are confirmed before generation. The form prepares email in the visitor's email app and does not send from a server.
- Earlier CreditReports.dk/PDF/manual tools and historical samples remain identifiable as separate existing material.
- `npm run check:commercial` verifies Finnish destinations across all 20 pages, company requests/prefills, the real Finnish sample link and layout/lintapple at 375/768/1440px. All frontend checks passed.
- Foreign preparation and execution are isolated in `work/valuation-report-english` and a local SQLite runner. The user approved generation and publication after review. One JYSK run and one alternate US run (NVIDIA) completed successfully, costing USD 0.428882 and USD 0.460934 respectively. No production backend deployment/reseed or estimate regeneration occurred. Raw source/run data remains outside this website repository.
- English/source-currency support is in draft backend PR https://github.com/ValuatumOy/AI-company-valuation-raportti/pull/13. It preserves source DCF dividends/capex, distinct foreign EVA outputs, annual WACC and unavailable expected values; no FX conversion is applied. Existing Finnish fixture HTML retains byte-for-byte parity. The PR includes the inherited local annual-EVA-table commit `eb91b60`; review it before merging. The production backend remains unchanged.
- Private artifacts are in `work/report-sources` and `work/report-prepared`. JYSK FID 133268 / CVR 13590400 has 2013–2025 history and stored 2026–2035 DKK forecasts from `upcloudtest.valuatum.com`. Production equivalence and its forecast algorithm remain unverified. NVIDIA Wisdom FID 10592 has FY2020–FY2026 history and stored FY2027–FY2036 USD forecasts; FY2025/2026 balance-sheet facts were checked against the official FY2026 SEC annual report. Amazon had no current supplied full model.
- Paid originals are preserved. Reviewed copies correct source-backed narrative and rendering without another LLM run or new economic assumptions. JYSK passed independent publication review: its DCF and EVA bridges reconcile to their own source totals and neither is described as an observed transaction price. NVIDIA remains an internal draft with a prominent cover/summary warning; its source forecast economics must be investigated before publication. Never copy raw source JSON, credentials or the official full NVIDIA annual report into this site's public assets.

## Deployment setup

Vercel project ID: `prj_9YbkB69mf0EhnA0GUfVjAHHRIcpG`; team: `valuatum-dk`. Repository is private. Hobby does not support its automatic Git integration. The CLI can publish a source package using the existing authorized Vercel account; use the README instructions and explicit `--target preview`. Deployment authentication remains enabled. The old live domain was not attached or moved.

Review URL: https://company-valuation-international-fuid73o07-valuatum-dk.vercel.app (Ready, explicit Preview target; deployment `dpl_7StiaG89gUivvgVBLGxQ8PDXdfMX`, source `554e500aa6974ae77219d41ccfa16581e431b215`). Vercel login is required by the existing preview protection. GitHub CI passed for this manually polished PDF revision; the following URL update changes documentation only after deployment.

GitHub CI passed on source commit `fbaf3ba09bebef440587a4f8d73850f2be378962`. Local typecheck, ESLint, 10 unit tests, build, 20-page/11-redirect audit, JYSK PDF response/popup checks, company request prefills, repeated-hash CTA interactions and lintapple at 375/768/1440px passed. Backend commit `f6f6d20e6a6abdc179b78db45d32d17947943219` passed 312 focused tests plus the separately isolated peer test; five Finnish HTML fixtures retain exact parity. Source ZIP, reviewed JYSK PDF, internal NVIDIA draft and desktop/mobile screenshots are saved in the task's outputs folder.

## Manual JYSK editorial pass

At the user's request, the JYSK PDF was manually polished without a new generation run. Its headings and contents use consistent sentence case. Empty expected-value/range cards and unfinished scenario tables were removed; the document now focuses on the source DCF base case and the existing sensitivity analysis. Repeated technical prose was shortened while material source/model limitations remain disclosed. All retained numerical table cells, SVG charts and 10 external source links were verified unchanged. The current PDF has 27 pages and SHA-256 `38c75a02d902d5f0f030844c1b24ef94a92133fd30d4732841f9795752afcfab`, matching the public asset, output PDF and local HTTP response. The reviewed HTML and paid originals remain preserved; private `work/report-prepared/polish_jysk.py` produces the curated `jysk-polished-report.html` and an audit JSON. Do not overwrite the polished public PDF by re-running the older review export. Backend source code was not changed by this editorial pass.
