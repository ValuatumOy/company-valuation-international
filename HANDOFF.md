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

Approved current generated sample reports are still needed. The new sample is visibly fictional and old actual samples are clearly historical. Prices/free-credit quantities from the old site are qualified; confirm current commercial terms before the domain switch. The inherited legal/security wording should be confirmed against each existing service's current practices.

No production domain switch, payment integration, backend change or paid report generation was performed.

## Feedback fixes

- Reproduced the bottom homepage valuation CTA failing after the hero already set `#solutions`. Native fragment anchors now return to the section even when the URL hash is unchanged; shared header/TOC fragment links use the same behavior. The interaction suite covers the exact regression at 375/768/1440px.
- All Finnish customer destinations now open `arvonmaaritys.fi`, superseding the earlier `CVFinland` registration change. Finnish routes remain readable for old-URL compatibility, with the same external ordering destination. The Finnish contact form was removed. Manual primary CTA and the resource guide's registration link open `PPVTemplate` registration. External service links open a separate tab.
- The first migration retained video links and diagram text but omitted actual embeds/diagrams. Restored all four original YouTube videos, the historical-versus-forecast diagram, the method-selection diagram on both resource pages, and the PDF workflow. YouTube uses privacy-enhanced embeds without autoplay; native text diagrams remain readable on mobile.
- `npm run check:content` verifies the old media contract, checks mobile/desktop layout with lintapple, and exercises registration clicks with requests intercepted. It does not submit to the live services. Local route checks and the existing unit/build/type/lint checks passed; actual resource YouTube player loading was also verified in the browser.

## Country offering and report examples

- Finnish orders and all Finnish service/contact/sample links go to `arvonmaaritys.fi`. Its existing public Heeros Oyj sample (26 pages, 4 August 2026) was checked against the local Finnish site's PDF by SHA-256. This is an existing public report, not a newly generated one.
- New English reports for Denmark and the US are requested from the team. Homepage/sample-page rows show JYSK A/S and Amazon.com, Inc. with working request links; country and target company prefill the email enquiry. Data availability, scope and price are confirmed before generation. The form still prepares email in the visitor's email app and does not send from a server.
- Earlier CreditReports.dk/PDF/manual tools and historical samples remain identifiable as separate existing material. No new English sample PDF is linked until a real report has been generated and reviewed.
- `npm run check:commercial` verifies Finnish destinations across all 20 pages, company requests/prefills, the real Finnish sample link and layout/lintapple at 375/768/1440px. All frontend checks passed.
- Foreign sample preparation is isolated in a worktree of `AI-company-valuation-raportti`; no production backend deployment/reseed, estimate regeneration or paid report run has been performed. Wisdom AMZN actuals stop in 2018; fresh historical input is prepared from the official FY2025 SEC filing. JYSK identity/data are verified on the Danish Profinder test environment. Data and preparation files remain outside this site's public repository.

## Deployment setup

Vercel project ID: `prj_9YbkB69mf0EhnA0GUfVjAHHRIcpG`; team: `valuatum-dk`. Repository is private. Hobby does not support its automatic Git integration. The CLI can publish a source package using the existing authorized Vercel account; use the README instructions and explicit `--target preview`. Deployment authentication remains enabled. The old live domain was not attached or moved.

Review URL: https://company-valuation-international-qro2l0ial-valuatum-dk.vercel.app (Ready, explicit Preview target).

GitHub CI passed on source commit `101456d2739eaa620c4ef516aef807ed64b4440d`. Source ZIP and desktop/mobile screenshots are also saved in the task's outputs folder.
