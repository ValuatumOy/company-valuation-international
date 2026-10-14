# Company Valuation International

The new English-language Company Valuation website for Valuatum. Next.js 16 App Router, React 19, TypeScript and plain CSS. Pages are prerendered; client JavaScript is limited to navigation, the illustrative report tabs and the email enquiry form.

- Repository: https://github.com/ValuatumOy/company-valuation-international
- Vercel project: https://vercel.com/valuatum-dk/company-valuation-international
- Intended production domain: https://company-valuation.com (not transferred yet)

## Local development

Node 22 or later; deployment project uses Node 24.

```sh
npm ci
npm run dev
```

## Checks

```sh
npm run typecheck
npm run lint
npm test
npm run build
npm start
npm run check:site
npm run check:seo
npm run lint:ui
npm run check:ui
npm run check:content
npm run check:commercial
```

Lintapple is installed from its published npm package. `ui-policy.json` defines the project's font, type roles, control sizes and three responsive viewports. Its narrow exceptions cover decorative art, fluid display typography, the hidden skip link and the standard mobile menu icon. The real report tabs, text contrast, labels and page bounds are checked.

## Content and services

All 19 previous canonical URLs and 11 aliases are preserved. Content is in `src/content/pages.ts`; original source and historical asset provenance are recorded under `docs/`. The website sends users to the existing PDF, manual, Finnish and Danish valuation services. It does not generate reports or take payments itself.

`/sample-report` links to three examples: the existing public Heeros Oyj report at arvonmaaritys.fi, the manually polished and reviewed JYSK A/S English PDF in DKK, and a manually prepared NVIDIA English PDF in USD (14 October 2026). JYSK refers to the Danish legal entity, CVR 13590400, rather than the worldwide group. The NVIDIA example uses verified FY2026 accounts and explicitly illustrative forecast assumptions; it is a new manual DCF, not the earlier withheld source-forecast draft or an investment recommendation. Its annual cash flows, equity bridge and sensitivity calculations passed independent review. JYSK and NVIDIA requests prefill the international enquiry. The fictional calculation and historical library remain identified. Finnish actions go to arvonmaaritys.fi; new international reports use requests with scope/price confirmation.

Contact forms prepare a `mailto:` message in the visitor's email app. They do not store or send enquiries on a server. The UI says this explicitly and provides the direct email address.

## Indexing and deployment

The project is a review environment by default: every page and response carries `noindex`, and `robots.txt` does not advertise the sitemap. Crawling stays allowed so crawlers can read `noindex`.

Only set `SITE_INDEXABLE=true` for production when the real domain is moved. Vercel Preview remains `noindex` even if that flag is enabled. `NEXT_PUBLIC_SITE_URL` defaults to the real domain for canonical/OG URLs. Rebuild after changing either setting.

Use a Vercel preview deployment during development. Do not move the existing domain or publish the production version as part of routine edits.

The current Vercel team is on Hobby. Automatic Git integration with this private organization repository is unavailable on that plan. Authenticated CLI source deployments work. Git metadata from the workstation's commit author also caused a preview permission rejection, so the review deployment was created from the same committed source ZIP in a separate folder, linked to the same project and authenticated Vercel account. Keep the repository private and deployment protection enabled. Do not upgrade billing or change membership automatically.

When deploying a fresh source package, link it with `vercel link --project company-valuation-international --scope valuatum-dk --yes`, then use `vercel deploy --target preview --yes --no-wait --scope valuatum-dk`. Always specify the target: Vercel automatically assigned the project's very first unqualified deployment to production, despite the absence of `--prod`. That isolated version remains noindex and has no connection to the existing company-valuation.com domain.

Before the domain switch, review current pricing, legacy financial assumptions, legal/security copy and real report samples. Then attach the domain, enable production indexing, deploy production, verify routes/redirects and submit the sitemap in Search Console. See `HANDOFF.md`.

The full 20-page copy and SEO pass is documented in `docs/seo-audit.md`. Automated checks cover metadata uniqueness, social cards, schema roles, heading hierarchy, media attributes and internal crawl depth, alongside the existing route and interaction checks. CI runs the route and SEO checks against its built local server.
