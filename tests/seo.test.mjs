import assert from "node:assert/strict";
import test from "node:test";
import { pageMetadata, canonicalUrl } from "../src/lib/site.ts";
import { contentPages } from "../src/content/pages.ts";
import { contentBreadcrumbs, contentSchemaType, isValuationArticle } from "../src/lib/content-seo.ts";
import { auditSeoHtml, auditSiteMetadata, crawlDepths } from "../scripts/check-seo.mjs";

test("generic and compatibility pages receive distinct descriptive search titles", () => {
  const titles = contentPages.map((page) => pageMetadata(page.title, page.description, page.path).title.absolute);
  assert.equal(new Set(titles).size, titles.length);
  assert.match(pageMetadata("User Manual", "Guide", "/solutions/manual-data-input-company-valuation/user-manual").title.absolute, /Manual Company Valuation/);
  assert.equal(canonicalUrl("/support"), "https://company-valuation.com/support");
});

test("resource collections and guides have distinct schema roles and accurate parent trails", () => {
  const resource = contentPages.find((page) => page.path === "/resources");
  const guide = contentPages.find((page) => page.path.endsWith("/methods"));
  assert.equal(contentSchemaType(resource), "CollectionPage");
  assert.equal(isValuationArticle(resource), false);
  assert.equal(isValuationArticle(guide), true);
  assert.deepEqual(contentBreadcrumbs(guide, contentPages).map((item) => item.path), ["/", "/resources", guide.path]);
  const faq = contentPages.find((page) => page.path === "/support/faq");
  assert.deepEqual(contentBreadcrumbs(faq, contentPages).map((item) => item.path), ["/", "/support", "/support/faq"]);
});

const url = "https://company-valuation.com/support";
const html = `<html lang="en"><head><title>Support | Valuatum</title><meta name="description" content="Help with valuation"><meta property="og:title" content="Support | Valuatum"><meta name="twitter:title" content="Support | Valuatum"><meta property="og:description" content="Help with valuation"><meta name="twitter:description" content="Help with valuation"><meta property="og:url" content="${url}"><meta name="twitter:card" content="summary_large_image"><meta property="og:image" content="https://company-valuation.com/og-image.png"><meta name="twitter:image" content="https://company-valuation.com/og-image.png"><meta property="og:image:alt" content="Valuation"><link rel="canonical" href="${url}"></head><body><h1>Support</h1><h2>Questions</h2><img src="/report.png" alt="Report" width="100" height="60"></body></html>`;

test("rendered SEO checks reject broken social cards, heading jumps and unsized images", () => {
  assert.doesNotThrow(() => auditSeoHtml(html, url));
  assert.throws(() => auditSeoHtml(html.replace('property="og:title" content="Support | Valuatum"', 'property="og:title" content="Wrong title"'), url), /differs from search title/);
  assert.throws(() => auditSeoHtml(html.replace("<h2>", "<h4>"), url), /heading level jumps/);
  assert.throws(() => auditSeoHtml(html.replace('width="100"', ''), url), /intrinsic dimensions/);
  assert.throws(() => auditSeoHtml(html.replace('alt="Report"', ''), url), /alt attribute/);
});

test("site audit detects duplicate descriptions and orphaned routes", () => {
  const pages = [
    { url: "https://company-valuation.com/", titles: ["Home"], descriptions: ["One"], hrefs: ["/resources"] },
    { url: "https://company-valuation.com/resources", titles: ["Resources"], descriptions: ["Two"], hrefs: ["/guide"] },
    { url: "https://company-valuation.com/guide", titles: ["Guide"], descriptions: ["Three"], hrefs: [] },
    { url: "https://company-valuation.com/orphan", titles: ["Orphan"], descriptions: ["Four"], hrefs: [] },
  ];
  assert.doesNotThrow(() => auditSiteMetadata(pages));
  assert.throws(() => auditSiteMetadata(pages.map((page) => ({ ...page, descriptions: ["Same"] }))), /Duplicate page descriptions/);
  const depths = crawlDepths(pages, "https://company-valuation.com");
  assert.equal(depths.get("/guide"), 2);
  assert.equal(depths.has("/orphan"), false);
});
