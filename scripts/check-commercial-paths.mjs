import assert from "node:assert/strict";
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { checkPage } from "lintapple";
import { sitemapUrls } from "./check-site.mjs";

const base = process.env.CHECK_BASE_URL || "http://localhost:3000";
const policy = JSON.parse(await readFile("ui-policy.json", "utf8"));
const screenshots = process.env.SCREENSHOT_DIR;
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  const urls = sitemapUrls(await (await fetch(`${base}/sitemap.xml`)).text());
  for (const url of urls) {
    await page.goto(`${base}${new URL(url).pathname}`, { waitUntil: "domcontentloaded" });
    const hrefs = await page.locator("a[href]").evaluateAll((links) => links.map((a) => a.getAttribute("href")));
    for (const href of hrefs) {
      assert.doesNotMatch(href, /valuation-finland\.valuatum\.com|luottoriskit\.fi|nokiavaluationreport/, `${url}: obsolete Finnish customer destination`);
      assert.ok(!href.startsWith("/contact-finland") && !href.startsWith("/solutions/finnish-company-valuation"), `${url}: Finnish action must lead to arvonmaaritys.fi`);
    }
  }
  for (const width of [375, 768, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto(base);
    const finland = page.locator(".solution-card").filter({ hasText: "Value a Finnish company" });
    assert.equal(await finland.getByRole("link").getAttribute("href"), "https://arvonmaaritys.fi/");
    const danish = page.locator(".solution-card").filter({ hasText: "Value a Danish company" });
    await danish.getByRole("link", { name: "Request report", exact: true }).click();
    await page.waitForURL(`${base}/contact-international?country=Denmark`);
    assert.equal(await page.getByLabel("Country", { exact: true }).inputValue(), "Denmark");
    assert.equal(await page.getByLabel("Company to value", { exact: true }).inputValue(), "");

    await page.goto(`${base}/sample-report`);
    assert.equal(await page.locator(".company-example").filter({ hasText: "Heeros Oyj" }).getByRole("link").getAttribute("href"), "https://arvonmaaritys.fi/samples/heeros-oyj.pdf");
    for (const [company, country] of [["JYSK A/S", "Denmark"], ["Amazon.com, Inc.", "United States"]]) {
      await page.locator(".company-example").filter({ hasText: company }).getByRole("link", { name: "Request report", exact: true }).click();
      await page.getByLabel("Company to value", { exact: true }).waitFor();
      assert.equal(await page.getByLabel("Country", { exact: true }).inputValue(), country);
      assert.equal(await page.getByLabel("Company to value", { exact: true }).inputValue(), company);
      await page.getByLabel("Your name", { exact: true }).fill("Example Visitor");
      await page.getByLabel("Your email", { exact: true }).fill("visitor@example.com");
      await page.getByLabel("Company identifier (optional)", { exact: true }).fill("EXAMPLE-ID");
      assert.equal(await page.locator("form").evaluate((form) => form.checkValidity()), true);
      assert.deepEqual(await page.locator("form").evaluate((form) => {
        const data = new FormData(form);
        return [data.get("country"), data.get("targetCompany"), data.get("identifier")];
      }), [country, company, "EXAMPLE-ID"]);
      // No form submission, messages or live report generation.
      await page.goto(`${base}/sample-report`);
    }
    for (const route of ["/sample-report", "/contact-international?country=Denmark&company=JYSK%20A%2FS", "/solutions/finnish-company-valuation", "/contact-finland", "/solutions/danish-company-valuation"]) {
      await page.goto(`${base}${route}`);
      await page.evaluate(() => document.fonts.ready);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${width}px ${route}: overflow`);
      if (route === "/contact-finland") assert.equal(await page.locator("form").count(), 0);
      const audit = await checkPage(page, policy);
      assert.equal(audit.findings.length, 0, `${width}px ${route}: ${JSON.stringify(audit.findings)}`);
      if (screenshots && route === "/sample-report" && width !== 768) {
        await mkdir(screenshots, { recursive: true });
        await page.locator("#company-examples").screenshot({ path: path.join(screenshots, `company-examples-${width}.png`) });
      }
    }
  }
  console.log(`Passed: Finnish destinations on all ${urls.length} pages, real sample PDF link, Danish/Amazon request navigation and prefills, and lintapple at 375/768/1440px.`);
} finally {
  await browser.close();
}
