import assert from "node:assert/strict";
import { writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import { attributes, inspectHtml, sitemapUrls } from "./check-site.mjs";

function content(html) {
  return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
}

export function auditSeoHtml(html, canonical) {
  const page = inspectHtml(html);
  for (const field of ["titles", "descriptions", "headings"]) {
    assert.equal(page[field].length, 1, `${canonical}: exactly one ${field}`);
    assert.ok(page[field][0]?.trim(), `${canonical}: empty ${field}`);
  }
  assert.deepEqual(page.canonicals.map((url) => new URL(url).href), [new URL(canonical).href], `${canonical}: incorrect canonical`);
  const document = content(html);
  assert.equal(attributes(document.match(/<html\b[^>]*>/i)?.[0] || "").lang, "en", `${canonical}: English language declaration`);
  const meta = [...document.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) => attributes(tag));
  const value = (name) => meta.find((tag) => tag.name === name || tag.property === name)?.content;
  for (const name of ["og:title", "twitter:title"]) {
    assert.equal(value(name), page.titles[0], `${canonical}: ${name} differs from search title`);
  }
  for (const name of ["og:description", "twitter:description"]) {
    assert.equal(value(name), page.descriptions[0], `${canonical}: ${name} differs from description`);
  }
  assert.equal(new URL(value("og:url")).href, new URL(canonical).href, `${canonical}: Open Graph canonical mismatch`);
  assert.equal(value("twitter:card"), "summary_large_image", `${canonical}: social card type`);
  for (const name of ["og:image", "twitter:image"]) {
    assert.equal(new URL(value(name)).protocol, "https:", `${canonical}: absolute HTTPS social image`);
  }
  assert.ok(value("og:image:alt"), `${canonical}: missing social image description`);
  let previousHeading = 0;
  for (const [, levelText] of document.matchAll(/<h([1-6])\b[^>]*>/gi)) {
    const level = Number(levelText);
    assert.ok(level <= previousHeading + 1, `${canonical}: heading level jumps h${previousHeading} to h${level}`);
    previousHeading = level;
  }
  const images = [...document.matchAll(/<img\b[^>]*>/gi)].map(([tag]) => attributes(tag));
  for (const image of images) {
    assert.ok(Object.hasOwn(image, "alt"), `${canonical}: image lacks alt attribute`);
    assert.ok(Number(image.width) > 0 && Number(image.height) > 0, `${canonical}: image lacks intrinsic dimensions`);
  }
  for (const [tag] of document.matchAll(/<(?:img|iframe|script)\b[^>]*>/gi)) {
    assert.doesNotMatch(attributes(tag).src || "", /^http:/i, `${canonical}: mixed-content asset`);
  }
  const schemas = page.schemaBlocks.flatMap((json) => {
    const item = JSON.parse(json);
    return item["@graph"] || [item];
  });
  const breadcrumb = schemas.find((item) => item["@type"] === "BreadcrumbList");
  if (breadcrumb) {
    assert.equal(breadcrumb.itemListElement.at(-1).item, canonical, `${canonical}: breadcrumb final URL`);
    assert.deepEqual(breadcrumb.itemListElement.map((item) => item.position), breadcrumb.itemListElement.map((_, i) => i + 1), `${canonical}: breadcrumb positions`);
  }
  if (new URL(canonical).pathname === "/resources") {
    assert.ok(schemas.some((item) => item["@type"] === "CollectionPage"), "Resource index must be a collection");
    assert.ok(!schemas.some((item) => item["@type"] === "Article"), "Resource index must not claim article authorship");
  }
  return { ...page, images: images.length, schemaTypes: schemas.map((item) => item["@type"]), htmlBytes: Buffer.byteLength(html) };
}

export function auditSiteMetadata(pages) {
  for (const field of ["titles", "descriptions"]) {
    const values = pages.map((page) => page[field][0]);
    assert.equal(new Set(values).size, values.length, `Duplicate page ${field}`);
  }
}

export function crawlDepths(pages, origin) {
  const edges = new Map(pages.map((page) => [new URL(page.url).pathname, page.hrefs
    .map((href) => new URL(href, page.url))
    .filter((url) => url.origin === origin)
    .map((url) => url.pathname)]));
  const depths = new Map([["/", 0]]);
  const queue = ["/"];
  for (const path of queue) {
    for (const next of edges.get(path) || []) {
      if (edges.has(next) && !depths.has(next)) {
        depths.set(next, depths.get(path) + 1);
        queue.push(next);
      }
    }
  }
  return depths;
}

export async function checkSeo({ baseUrl = process.env.CHECK_BASE_URL || "http://localhost:3000", siteUrl = process.env.CHECK_SITE_URL || "https://company-valuation.com" } = {}) {
  assert.ok(["localhost", "127.0.0.1", "[::1]"].includes(new URL(baseUrl).hostname), "SEO audit is restricted to the local review server");
  const response = await fetch(new URL("/sitemap.xml", baseUrl));
  assert.equal(response.status, 200);
  const urls = sitemapUrls(await response.text());
  const pages = [];
  for (const url of urls) {
    const result = await fetch(new URL(new URL(url).pathname, baseUrl), { signal: AbortSignal.timeout(15000) });
    assert.equal(result.status, 200, url);
    pages.push({ url, ...auditSeoHtml(await result.text(), url) });
  }
  auditSiteMetadata(pages);
  const depths = crawlDepths(pages, new URL(siteUrl).origin);
  const compatibilityPaths = new Set(["/contact-finland", "/solutions/finnish-company-valuation"]);
  for (const page of pages) {
    const path = new URL(page.url).pathname;
    if (!compatibilityPaths.has(path)) assert.ok(depths.has(path) && depths.get(path) <= 3, `${path}: orphan page or more than three clicks from home`);
  }
  const image = await fetch(new URL("/og-image.png", baseUrl));
  assert.equal(image.status, 200, "Social image must load");
  assert.match(image.headers.get("content-type") || "", /image\/png/, "Social image must be PNG");
  const summary = {
    checkedAt: new Date().toISOString(),
    baseUrl, canonicalOrigin: new URL(siteUrl).origin, pages: pages.length,
    maxNavigationDepth: Math.max(...depths.values()),
    compatibilityPaths: [...compatibilityPaths],
    results: pages.map((page) => ({ path: new URL(page.url).pathname, title: page.titles[0], description: page.descriptions[0], schemaTypes: page.schemaTypes, images: page.images, htmlBytes: page.htmlBytes, clicksFromHome: depths.get(new URL(page.url).pathname) ?? null })),
  };
  if (process.env.SEO_AUDIT_OUTPUT) await writeFile(process.env.SEO_AUDIT_OUTPUT, `${JSON.stringify(summary, null, 2)}\n`);
  return summary;
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  checkSeo().then((result) => console.log(`Passed SEO: ${result.pages} pages; unique metadata, social cards, schema, images and navigation depth ${result.maxNavigationDepth}.`)).catch((error) => { console.error(error.message); process.exitCode = 1; });
}
