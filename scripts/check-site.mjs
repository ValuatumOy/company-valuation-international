import assert from "node:assert/strict";
import { pathToFileURL } from "node:url";

// Migration contract from the previous public/sitemap.xml and src/App.tsx.
export const legacyPaths = [
  "/",
  "/resources",
  "/resources/company-valuation/what-is-company-valuation",
  "/resources/company-valuation/methods",
  "/support",
  "/support/faq",
  "/about-us",
  "/privacy-policy",
  "/contact-finland",
  "/contact-international",
  "/solutions/manual-data-input-company-valuation",
  "/solutions/manual-data-input-company-valuation/key-features",
  "/solutions/manual-data-input-company-valuation/user-manual",
  "/solutions/pdf-based-company-valuation",
  "/solutions/danish-company-valuation",
  "/solutions/finnish-company-valuation",
  "/solutions/international-company-valuation",
  "/solutions/why-do-you-need-company-valuation",
  "/security",
];

export const legacyRedirects = {
  "/company-valuation":
    "/resources/company-valuation/what-is-company-valuation",
  "/company-valuation-methods": "/resources/company-valuation/methods",
  "/what-is-valuation":
    "/resources/company-valuation/what-is-company-valuation",
  "/valuation-methods": "/resources/company-valuation/methods",
  "/solutions/manual-data-input":
    "/solutions/manual-data-input-company-valuation",
  "/solutions/manual-data-input/key-features":
    "/solutions/manual-data-input-company-valuation/key-features",
  "/solutions/manual-data-input/user-manual":
    "/solutions/manual-data-input-company-valuation/user-manual",
  "/solutions/pdf-based-valuation": "/solutions/pdf-based-company-valuation",
  "/solutions/why-do-you-need-valuation":
    "/solutions/why-do-you-need-company-valuation",
  "/key-features":
    "/solutions/manual-data-input-company-valuation/key-features",
  "/user-manual": "/solutions/manual-data-input-company-valuation/user-manual",
};

function decode(value) {
  return value.replace(
    /&(?:amp|quot|apos|lt|gt|#(\d+)|#x([\da-f]+));/gi,
    (entity, decimal, hex) => {
      if (decimal || hex)
        return String.fromCodePoint(parseInt(decimal || hex, hex ? 16 : 10));
      return {
        "&amp;": "&",
        "&quot;": '"',
        "&apos;": "'",
        "&lt;": "<",
        "&gt;": ">",
      }[entity.toLowerCase()];
    },
  );
}

export function attributes(tag) {
  return Object.fromEntries(
    [...tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)].map(
      (match) => [
        match[1].toLowerCase(),
        decode(match[2] ?? match[3] ?? match[4]),
      ],
    ),
  );
}

function plainText(html) {
  return decode(html.replace(/<[^>]*>/g, "")).trim();
}

export function inspectHtml(html) {
  const document = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "");
  const meta = [...document.matchAll(/<meta\b[^>]*>/gi)].map(([tag]) =>
    attributes(tag),
  );
  const links = [...document.matchAll(/<link\b[^>]*>/gi)].map(([tag]) =>
    attributes(tag),
  );
  const schemaBlocks = [
    ...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi),
  ]
    .filter(([, tag]) => attributes(tag).type === "application/ld+json")
    .map(([, , json]) => json);
  return {
    titles: [...document.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)].map(
      ([, value]) => plainText(value),
    ),
    descriptions: meta
      .filter((tag) => tag.name?.toLowerCase() === "description")
      .map((tag) => tag.content),
    headings: [...document.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map(
      ([, value]) => plainText(value),
    ),
    canonicals: links
      .filter((tag) => tag.rel?.split(/\s+/).includes("canonical"))
      .map((tag) => tag.href),
    robots: meta
      .filter((tag) =>
        ["robots", "googlebot"].includes(tag.name?.toLowerCase()),
      )
      .map((tag) => tag.content || "")
      .join(","),
    schemaBlocks,
    hrefs: [...document.matchAll(/<a\b[^>]*>/gi)]
      .map(([tag]) => attributes(tag).href)
      .filter(Boolean),
  };
}

export function auditHtml(html, canonical, indexing, robotsHeader = "") {
  const page = inspectHtml(html);
  for (const [name, values] of [
    ["title", page.titles],
    ["description", page.descriptions],
    ["h1", page.headings],
  ]) {
    assert.equal(
      values.length,
      1,
      `${canonical}: expected exactly one ${name}`,
    );
    assert.ok(values[0]?.trim(), `${canonical}: empty ${name}`);
  }
  assert.deepEqual(
    page.canonicals.map((url) => new URL(url).href),
    [new URL(canonical).href],
    `${canonical}: incorrect canonical`,
  );
  assert.ok(page.schemaBlocks.length, `${canonical}: missing JSON-LD`);
  for (const json of page.schemaBlocks) {
    assert.ok(
      !json.includes("<"),
      `${canonical}: JSON-LD must escape less-than characters`,
    );
    const schema = JSON.parse(json);
    const schemas = Array.isArray(schema) ? schema : [schema];
    assert.ok(
      schemas.every((item) => item && typeof item === "object"),
      `${canonical}: invalid JSON-LD object`,
    );
    assert.ok(
      schemas.some((item) => item["@context"] === "https://schema.org"),
      `${canonical}: missing schema.org context`,
    );
    assert.ok(
      schemas.some((item) => item["@type"] || item["@graph"]?.length),
      `${canonical}: missing schema type`,
    );
  }
  const noindex = /\bnoindex\b/i.test(`${page.robots},${robotsHeader}`);
  assert.equal(
    noindex,
    indexing === "preview",
    `${canonical}: expected ${indexing} indexing policy`,
  );
  return page;
}

export function sitemapUrls(xml) {
  assert.match(xml, /<urlset\b/, "Expected a sitemap URL set");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(([, url]) =>
    decode(url),
  );
}

export function localLink(href, currentUrl, baseUrl, siteUrl) {
  const url = new URL(href, currentUrl);
  if (![new URL(baseUrl).origin, new URL(siteUrl).origin].includes(url.origin))
    return null;
  return new URL(`${url.pathname}${url.search}`, baseUrl).href;
}

export async function checkSite({
  baseUrl = process.env.CHECK_BASE_URL || "http://localhost:3000",
  siteUrl = process.env.CHECK_SITE_URL || "https://company-valuation.com",
  indexing = process.env.CHECK_INDEXING || "preview",
} = {}) {
  assert.ok(
    ["preview", "production"].includes(indexing),
    "CHECK_INDEXING must be preview or production",
  );
  const origin = new URL(siteUrl).origin;
  const request = (path) =>
    fetch(new URL(path, baseUrl), {
      redirect: "manual",
      signal: AbortSignal.timeout(15000),
    });
  const sitemapResponse = await request("/sitemap.xml");
  assert.equal(sitemapResponse.status, 200, "sitemap.xml must return 200");
  const urls = sitemapUrls(await sitemapResponse.text());
  assert.equal(new Set(urls).size, urls.length, "Duplicate sitemap entries");
  for (const path of legacyPaths)
    assert.ok(
      urls.includes(new URL(path, origin).href),
      `Missing legacy sitemap path: ${path}`,
    );
  for (const url of urls)
    assert.equal(new URL(url).origin, origin, `Wrong sitemap origin: ${url}`);

  const localLinks = new Set();
  for (const url of urls) {
    const path = new URL(url).pathname;
    const response = await request(path);
    assert.equal(
      response.status,
      200,
      `${path}: canonical page must return 200 without redirect`,
    );
    assert.match(
      response.headers.get("content-type") || "",
      /text\/html/,
      `${path}: expected HTML`,
    );
    const page = auditHtml(
      await response.text(),
      url,
      indexing,
      response.headers.get("x-robots-tag") || "",
    );
    for (const href of page.hrefs) {
      const local = localLink(href, new URL(path, baseUrl), baseUrl, origin);
      if (local) localLinks.add(local);
    }
  }

  for (const [source, destination] of Object.entries(legacyRedirects)) {
    const response = await request(source);
    assert.ok(
      [301, 308].includes(response.status),
      `${source}: expected a permanent server redirect`,
    );
    const target = new URL(
      response.headers.get("location"),
      new URL(source, baseUrl),
    );
    assert.equal(
      target.href,
      new URL(destination, baseUrl).href,
      `${source}: incorrect redirect destination`,
    );
    assert.equal(
      (await request(destination)).status,
      200,
      `${source}: redirect chain or broken destination`,
    );
  }

  for (const url of localLinks) {
    const response = await request(url);
    if ([301, 302, 307, 308].includes(response.status)) {
      const target = new URL(response.headers.get("location"), url);
      assert.equal(
        target.origin,
        new URL(baseUrl).origin,
        `Local link redirects outside this site: ${url}`,
      );
      assert.equal(
        (await request(target.href)).status,
        200,
        `Broken local link or redirect chain: ${url}`,
      );
    } else {
      assert.equal(response.status, 200, `Broken local link: ${url}`);
    }
  }

  assert.equal(
    (await request("/__migration-check-missing-page__")).status,
    404,
    "Unknown paths must return a real HTTP 404",
  );
  const robotsResponse = await request("/robots.txt");
  assert.equal(robotsResponse.status, 200, "robots.txt must return 200");
  const robots = await robotsResponse.text();
  if (indexing === "preview") {
    assert.match(
      robots,
      /^Allow:\s*\/\s*$/im,
      "Allow crawlers to read the preview noindex directive",
    );
    assert.doesNotMatch(
      robots,
      /^Sitemap:/im,
      "Preview must not advertise a production sitemap",
    );
  } else {
    assert.doesNotMatch(
      robots,
      /^Disallow:\s*\/\s*$/im,
      "Production must allow crawling",
    );
    assert.ok(
      robots.includes(`Sitemap: ${new URL("/sitemap.xml", origin).href}`),
      "Production robots must list the canonical sitemap",
    );
  }
  return {
    pages: urls.length,
    redirects: Object.keys(legacyRedirects).length,
    localLinks: localLinks.size,
    indexing,
  };
}

if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(process.argv[1]).href
) {
  checkSite()
    .then((result) =>
      console.log(
        `Passed: ${result.pages} pages, ${result.redirects} redirects, ${result.localLinks} local links, ${result.indexing} robots policy.`,
      ),
    )
    .catch((error) => {
      console.error(error.message);
      process.exitCode = 1;
    });
}
