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

## Deployment setup

Vercel project ID: `prj_9YbkB69mf0EhnA0GUfVjAHHRIcpG`; team: `valuatum-dk`. Repository is private. Hobby does not support its automatic Git integration. The CLI can publish a source package using the existing authorized Vercel account; use the README instructions and explicit `--target preview`. Deployment authentication remains enabled. The old live domain was not attached or moved.

Review URL: https://company-valuation-international-pj7npcp3l-valuatum-dk.vercel.app

GitHub CI passed on source commit `3c9f4f6bb76b099f8ef592aec23f5f9980d5391a`. Source ZIP and desktop/mobile screenshots are also saved in the task's outputs folder.
