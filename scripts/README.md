# Migration checks

Run the package-independent parser and migration contract tests:

```sh
node --test tests/migration.test.mjs
```

With the site running, audit its initial HTML, sitemap, old URLs, local links, HTTP 404 response, and indexing policy:

```sh
node scripts/check-site.mjs
```

Defaults: `CHECK_BASE_URL=http://localhost:3000`, `CHECK_SITE_URL=https://company-valuation.com`, `CHECK_INDEXING=preview`. Set `CHECK_INDEXING=production` when checking a production-mode server. PowerShell example:

```powershell
$env:CHECK_INDEXING = 'production'
$env:CHECK_BASE_URL = 'http://localhost:3000'
node scripts/check-site.mjs
```

The script performs GET requests only. It does not submit forms, upload files, visit external service links, or generate reports. Run it separately against preview and production builds to verify their different indexing policies. External link health, interactive forms, and visual layout require separate review.

`npm run check:ui` exercises local report tabs and arrow-key navigation, the FAQ accordion, mobile navigation and native contact validation. It runs lintapple against the initial and changed states at 375, 768 and 1440 pixels. It does not submit the contact form or visit external services. Optional `SCREENSHOT_DIR` saves desktop/mobile page images.

Run `npm test` for both migration/parser tests and the production/preview indexing switch tests. The four indexing cases ensure preview cannot become indexable accidentally.

`npm run check:ui` also reproduces the repeated-hash case: click the hero valuation link, scroll to the closing CTA, then click it to return to Solutions.

`npm run check:content` checks the four legacy YouTube embeds and four diagram placements at 375 and 1440 pixels, runs lintapple on the media pages, and clicks the Finnish/manual registration CTAs with the external requests intercepted. It never creates accounts or reports. `SCREENSHOT_DIR` optionally saves resource-page media screenshots. Video IDs match the old site; actual player availability is controlled by YouTube.
