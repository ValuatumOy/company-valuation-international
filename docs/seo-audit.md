# SEO audit and launch checks

Reviewed 14 October 2026. Scope: all 20 HTML pages, 11 legacy redirects, metadata, schema, navigation, media and the production indexing switch. The public company-valuation.com domain has not moved. Vercel previews are publicly readable at the user's request and remain noindex. This audit does not claim measured search rankings, keyword volumes or field Core Web Vitals.

Published review build: [Vercel preview](https://company-valuation-international-k2eda83ao-valuatum-dk.vercel.app), verified Ready with Preview target from source commit `ea6b990e49a3947621f9d8d280b8bf06dd43e76a`. [GitHub CI](https://github.com/ValuatumOy/company-valuation-international/actions/runs/38563048307) passed, including the new rendered route/SEO checks. The user subsequently requested public preview access: Vercel Authentication was disabled for this project. Anonymous requests to the homepage, sample page and both English report PDFs returned HTTP 200 with no redirects or login/bypass credentials; robots headers remain noindex, nofollow and HTML robots meta remains noindex. No rebuild or production domain change was required.

## Changes and evidence

| Finding | Before | Implementation | Impact |
| --- | --- | --- | --- |
| Search and share titles differed | 19 of 20 rendered pages had different title and Open Graph title strings; the homepage could repeat the brand/template | Shared metadata now emits one explicit title for search, Open Graph and Twitter | Medium: clear, consistent search/share identity |
| Generic and duplicate titles | Resources, Key Features, User Manual lacked subject context; the Finnish contact and solution pages shared a title | Descriptive titles identify valuation guides, manual features/user guide and Finnish enquiries separately | Medium: distinct page intent |
| Resource index claimed to be an article | `/resources` emitted Article even though it is a directory of guides | Resource hub is CollectionPage; genuine guides retain Article | Medium: accurate structured data |
| Breadcrumbs did not express parent pages | Guide UI showed the eyebrow; structured breadcrumb showed a different title and skipped Resources | UI/schema use the same trail; resources, support FAQ and nested manual pages link to actual parents | Medium: navigation and contextual internal links |
| Guides lacked visible editorial identity | Article author was an organization reference but not visible beside content | Genuine guides show “By Valuatum Oy”, linked to the company page; schema has the same author and publisher | Medium: financial-content accountability |
| Page entities were implicit | Content pages had global Organization/WebSite and some Article/FAQ markup | Content templates now emit connected WebPage/AboutPage/ContactPage/CollectionPage, BreadcrumbList and genuine Article identifiers | Low: reliable entity relationships |
| Canonical environment URL could have a trailing slash | Direct string concatenation could create double slashes | One normalized canonical origin and URL helper; deployed canonical URLs use HTTPS | Medium: canonical consistency |
| Existing crawler checks omitted metadata duplication and navigation depth | Checks covered missing metadata/canonical/404/redirect/noindex but not those regressions | New rendered SEO check covers unique titles/descriptions, social metadata/image response, language, heading hierarchy, image alt/dimensions, mixed content, schema roles and crawl reachability | Medium: prevents regressions |

`docs/seo-baseline.json` records the actual pre-change local production build, including each rendered title/description/schema type. For the final rendered report, run `SEO_AUDIT_OUTPUT=/absolute/path/seo-verification.json node scripts/check-seo.mjs` against the rebuilt local site. In PowerShell set `$env:SEO_AUDIT_OUTPUT` first. No external service or report generation is triggered.

## Final local verification

- TypeScript, ESLint, all 15 unit tests and the production build passed.
- All 20 pages passed the rendered SEO audit: unique titles/descriptions, matching social metadata, canonical URLs, valid schema roles, heading hierarchy and image attributes. Every non-compatibility page is reachable in one click from home.
- All 11 legacy redirects and 26 local asset/page links passed. The indexing policy remains noindex for this review environment.
- The interaction suite passed the repeated-fragment valuation CTA regression, report tabs/keyboard navigation, FAQ, mobile menu and contact validation at 375/768/1440px. Both English report links open real PDFs; Finnish links point to arvonmaaritys.fi. The media suite preserved all four original YouTube videos and four diagram placements.
- The full website copy was edited with the no-ai-slop skill, including guides, service pages, homepage, sample page, FAQ and footer. Existing section anchors, assets and service destinations were retained. Privacy/security copy distinguishes this email-enquiry website from the separate account and financial-statement services.
- Lighthouse 13.5.0 mobile lab run, 14 October 2026, local production build: performance 89, accessibility 100, best practices 100. LCP 2.6s, total blocking time 340ms, CLS 0. This is a single local simulated run, not field Core Web Vitals; LCP remains slightly above the 2.5s target and production performance should be monitored.
- Lighthouse SEO scored 66 solely because the review build intentionally blocks indexing. Keep this protection until the authorized production domain launch; the full rendered SEO checks passed independently. The footer wordmark contrast finding from the first Lighthouse run was corrected and the final accessibility run passed.

## Reviewed example reports

The sample page now describes all three real PDFs with DigitalDocument entries inside its CollectionPage schema. Harvia is the current full Finnish consolidated report, replacing the old homepage Heeros example. JYSK is the approved, manually polished 27-page report. The US example is a new 10-page manual NVIDIA DCF based on verified FY2026 accounts, with clearly identified illustrative forecast assumptions. It does not reuse the problematic forecast economics from the earlier internal draft. Independent financial review checked its annual cash flows, financial-asset/debt bridge, terminal cash flow and all 23 sensitivity outcomes. No additional paid report generation was triggered by this editorial/SEO pass.

## Existing foundations retained

- Static, server-rendered main content and metadata; native crawlable links and semantic sections.
- One H1 per page, canonical HTTPS URLs, 20-page sitemap, direct permanent redirects for all 11 known aliases and real HTTP 404s for unknown paths.
- Explicit production indexing opt-in. Preview HTML and all file responses, including PDFs, receive noindex. Crawling remains allowed so a crawler can see the directive; previews do not advertise the production sitemap.
- Manrope is self-hosted through `next/font`, with swap display. Historical screenshots use responsive `next/image` with intrinsic dimensions and lazy loading. YouTube embeds are lazy loaded. The old large background/logo PNGs remain provenance assets but are not requested for the current homepage.
- Organization/WebSite describe the actual Valuatum company. FAQ markup matches visible answers; this audit promises no FAQ rich result. No invented reviews, ratings, author qualifications or publication dates.
- English page language. No hreflang links to arvonmaaritys.fi: it is a separate Finnish product site, not a set of reciprocal translations of these pages.
- The two Finnish compatibility URLs retain their old 200 status/canonicals for migration, while Finnish service actions go directly to arvonmaaritys.fi. They are intentionally exempt from the crawl-depth assertion. All other HTML pages must be reachable within three clicks from home.

## Search intent map

These are content targets, not keyword-volume claims. Keep the educational guides distinct from the commercial service pages; avoid publishing near-duplicate country pages without actual service coverage.

| Page | Primary intent |
| --- | --- |
| `/` | Compare company valuation tools and request/read reports |
| `/resources` | Find company valuation guides |
| `/resources/company-valuation/what-is-company-valuation` | Understand company valuation, value versus price and required inputs |
| `/resources/company-valuation/methods` | Compare DCF, multiples and asset-based methods and their assumptions |
| `/sample-report` | Inspect actual example reports and a clearly labelled illustrative calculation |
| `/solutions/pdf-based-company-valuation` | Value a business from a PDF financial statement |
| `/solutions/manual-data-input-company-valuation` | Enter financial data and adjust valuation assumptions |
| `/solutions/manual-data-input-company-valuation/key-features` | Inspect manual-tool features |
| `/solutions/manual-data-input-company-valuation/user-manual` | Complete specific manual-tool tasks |
| `/solutions/danish-company-valuation` | Request a Danish report and understand available data |
| `/solutions/finnish-company-valuation` | Find the Finnish ordering service |
| `/solutions/international-company-valuation` | Request an international report; confirm data, scope and price |
| `/solutions/why-do-you-need-company-valuation` | Understand transaction, fundraising, financing and planning use cases |
| `/contact-international` | Send a company/country enquiry using the visitor's email app |
| `/contact-finland` | Legacy Finnish enquiry destination pointing to arvonmaaritys.fi |
| `/support` | Find valuation-tool help |
| `/support/faq` | Resolve common input, method, report and access questions |
| `/about-us` | Check the company behind the tools and its background |
| `/security` | Understand service-specific data handling and find support |
| `/privacy-policy` | Read privacy information and policy scope |

## Required at the domain launch

1. Confirm current commercial/pricing and inherited legal/security statements with the service owner. Keep each sample's entity, currency, financial period, assumptions and source limitations visible. Review the actual report; an attractive PDF alone does not establish a defensible valuation.
2. Keep the repository private. Attach company-valuation.com only as a separately authorized launch action. Choose the non-www HTTPS hostname consistently, redirect HTTP/www at the hosting/domain layer, and preserve all existing path redirects and historical public assets.
3. Set `NEXT_PUBLIC_SITE_URL=https://company-valuation.com` and `SITE_INDEXABLE=true` only in the production environment; rebuild. Vercel Preview still cannot enable indexing. Confirm there is no production authentication gate or inherited noindex header/meta. Keep preview indexing blocked even though preview access is public.
4. Against the authorized production build, verify all canonical URLs, redirects, `/robots.txt` sitemap declaration, `/sitemap.xml`, unknown-path 404 and PDF links. The local check commands are `node scripts/check-site.mjs` and `node scripts/check-seo.mjs`; the latter deliberately accepts localhost only.
5. In the owner's verified Google Search Console property, submit `https://company-valuation.com/sitemap.xml`. Inspect the homepage, both main guides, PDF/manual/Danish solution pages and sample page. Check selected canonicals and render the page using URL Inspection. Validate breadcrumbs/articles with Rich Results Test after Google can access the actual domain. A noindex preview does not establish production indexing or Search Console results.
6. Record pre-launch Search Console clicks, impressions, queries, indexed pages and existing high-traffic URLs. Compare after migration, investigate 404/redirect/canonical exclusions and contact conversion. Access and baseline traffic were not supplied to this audit; no account property was changed.
7. Measure public homepage, sample and long guide pages with PageSpeed Insights and Search Console field data. Target LCP <=2.5s, INP <=200ms and CLS <=0.1 at the 75th percentile. A local layout test does not establish field performance; collect production data before reporting a pass. Recheck lazy video/image loading and any later analytics scripts.

## Sources

- [Google: canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)
- [Google: sitemap construction](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google: noindex and crawl access](https://developers.google.com/search/docs/crawling-indexing/block-indexing)
- [Google: descriptive title links](https://developers.google.com/search/docs/appearance/title-link)
- [Google: meta descriptions](https://developers.google.com/search/docs/appearance/snippet)
- [Google: breadcrumbs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb)
- [Google: articles and factual authorship](https://developers.google.com/search/docs/appearance/structured-data/article)
- [Google: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
- Bundled Next.js 16.4 guides: metadata/generateMetadata, sitemap, JSON-LD and fonts in `node_modules/next/dist/docs/`. APIs were checked against the installed version.
