import test from "node:test";
import assert from "node:assert/strict";
import {
  auditHtml,
  attributes,
  inspectHtml,
  legacyPaths,
  legacyRedirects,
  localLink,
  sitemapUrls,
} from "../scripts/check-site.mjs";

const canonical = "https://company-valuation.com/support";
const html = `<!doctype html><html><head>
  <title>Support &amp; guidance</title><meta content='Get help with your valuation.' name='description'>
  <link href='${canonical}' rel='canonical'><meta name='robots' content='noindex, nofollow'>
  <script type='application/ld+json'>{"@context":"https://schema.org","@type":"WebPage","name":"Support","description":"Upload \\u003cPDF\\u003e"}</script>
  </head><body><h1>Support</h1><a href='/support/faq'>FAQ</a>
  <script>const payload = "<h1>not rendered</h1><a href='/fake'>fake</a>";</script></body></html>`;

test("migration contract preserves all 19 canonical URLs and 11 direct redirects", () => {
  assert.equal(legacyPaths.length, 19);
  assert.equal(new Set(legacyPaths).size, 19);
  assert.equal(Object.keys(legacyRedirects).length, 11);
  for (const destination of Object.values(legacyRedirects)) {
    assert.ok(legacyPaths.includes(destination));
    assert.ok(
      !Object.hasOwn(legacyRedirects, destination),
      "Redirect destination must not redirect again",
    );
  }
});

test("audits server-rendered metadata while ignoring framework script payloads", () => {
  const page = auditHtml(html, canonical, "preview");
  assert.deepEqual(page.titles, ["Support & guidance"]);
  assert.deepEqual(page.headings, ["Support"]);
  assert.deepEqual(page.hrefs, ["/support/faq"]);
  assert.equal(
    attributes(
      `<meta content="A &quot;quoted&quot; &#38; &#x26; description" name="description">`,
    ).content,
    'A "quoted" & & description',
  );
});

test("detects SEO regressions in rendered pages", () => {
  assert.throws(
    () =>
      auditHtml(
        html.replace("</body>", "<h1>Duplicate</h1></body>"),
        canonical,
        "preview",
      ),
    /exactly one h1/,
  );
  assert.throws(
    () =>
      auditHtml(
        html.replace("name='description'", "name='other'"),
        canonical,
        "preview",
      ),
    /exactly one description/,
  );
  assert.throws(
    () =>
      auditHtml(
        html.replace(canonical, `${canonical}/wrong`),
        canonical,
        "preview",
      ),
    /incorrect canonical/,
  );
  assert.throws(
    () =>
      auditHtml(
        html.replace("\\u003cPDF\\u003e", "<PDF>"),
        canonical,
        "preview",
      ),
    /must escape/,
  );
  assert.throws(
    () =>
      auditHtml(
        html.replace('"@type":"WebPage",', '"@type":,'),
        canonical,
        "preview",
      ),
    SyntaxError,
  );
  assert.throws(
    () => auditHtml(html, canonical, "production"),
    /indexing policy/,
  );
});

test("preview accepts noindex headers, production accepts default index behavior", () => {
  const withoutRobots = html.replace(/<meta name='robots'[^>]+>/, "");
  assert.doesNotThrow(() =>
    auditHtml(withoutRobots, canonical, "preview", "noindex"),
  );
  assert.doesNotThrow(() => auditHtml(withoutRobots, canonical, "production"));
  assert.throws(
    () => auditHtml(withoutRobots, canonical, "preview"),
    /indexing policy/,
  );
});

test("resolves only local links and maps production URLs to the checked server", () => {
  const base = "http://localhost:3000";
  assert.equal(
    localLink(
      "../faq?topic=a&amp;b=2",
      `${base}/support/help`,
      base,
      canonical,
    ),
    `${base}/faq?topic=a&amp;b=2`,
  );
  assert.equal(
    localLink(
      "https://company-valuation.com/support#contact",
      base,
      base,
      canonical,
    ),
    `${base}/support`,
  );
  assert.equal(
    localLink("mailto:info@valuatum.com", base, base, canonical),
    null,
  );
  assert.equal(
    localLink(
      "https://reports.company-valuation.com/order",
      base,
      base,
      canonical,
    ),
    null,
  );
  assert.deepEqual(inspectHtml(html).hrefs, ["/support/faq"]);
});

test("extracts XML sitemap URLs and decodes escaped query strings", () => {
  assert.deepEqual(
    sitemapUrls(
      "<urlset><url><loc>https://company-valuation.com/</loc></url><url><loc>https://company-valuation.com/a?a=1&amp;b=2</loc></url></urlset>",
    ),
    [
      "https://company-valuation.com/",
      "https://company-valuation.com/a?a=1&b=2",
    ],
  );
  assert.throws(() => sitemapUrls("<html>not a sitemap</html>"), /URL set/);
});
