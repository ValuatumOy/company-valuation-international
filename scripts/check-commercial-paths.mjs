import assert from "node:assert/strict";
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { checkPage } from "lintapple";
import { sitemapUrls } from "./check-site.mjs";

const base = process.env.CHECK_BASE_URL || "http://localhost:3000";
const policy = JSON.parse(await readFile("ui-policy.json", "utf8"));
const screenshots = process.env.SCREENSHOT_DIR;
const jyskPdf = "/reports/jysk-as-english-example.pdf";
const nvidiaPdf = "/reports/nvidia-english-example.pdf";
for (const pdf of [jyskPdf, nvidiaPdf]) {
  const pdfResponse = await fetch(`${base}${pdf}`);
  assert.equal(pdfResponse.status, 200, `${pdf}: example PDF must be served locally`);
  assert.match(pdfResponse.headers.get("content-type") || "", /^application\/pdf(?:;|$)/i);
  assert.equal(Buffer.from(await pdfResponse.arrayBuffer()).subarray(0, 5).toString("ascii"), "%PDF-", `${pdf}: PDF magic`);
}
const browser = await chromium.launch({ channel: "chromium" });
try {
  const page = await browser.newPage();
  await page.context().route("**/*", (route) =>
    new URL(route.request().url()).origin === new URL(base).origin ? route.continue() : route.abort(),
  );
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
    assert.equal(await danish.getByRole("link").getAttribute("href"), "https://creditreports.dk/en/");

    await page.goto(`${base}/sample-report`);
    for (const [company, pdf] of [["Harvia Oyj", "https://arvonmaaritys.fi/samples/harvia-oyj.pdf"], ["Gofore Oyj", "https://arvonmaaritys.fi/samples/gofore-oyj.pdf"], ["Fiskars Oyj Abp", "https://arvonmaaritys.fi/samples/fiskars-oyj-abp.pdf"], ["JYSK A/S", jyskPdf], ["NVIDIA Corporation", nvidiaPdf]]) {
      const reportLink = page.locator(".company-example").filter({ hasText: company });
      assert.equal(await reportLink.getAttribute("href"), pdf);
      assert.equal(await reportLink.getAttribute("target"), "_blank");
      assert.match(await reportLink.getAttribute("rel"), /\bnoopener\b/);
      if (!pdf.startsWith("/")) continue;
      const popupPromise = page.waitForEvent("popup");
      await reportLink.click();
      const popup = await popupPromise;
      await popup.waitForURL(`${base}${pdf}`);
      await popup.close();
    }
    for (const [company, country] of [["JYSK A/S", "Denmark"], ["NVIDIA Corporation", "United States"]]) {
      await page.goto(`${base}/contact-international?country=${encodeURIComponent(country)}&company=${encodeURIComponent(company)}`);
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
    }
    for (const route of ["/", "/sample-report", "/contact-international?country=Denmark&company=JYSK%20A%2FS", "/contact-international?country=United%20States&company=NVIDIA%20Corporation", "/solutions/finnish-company-valuation", "/contact-finland", "/solutions/danish-company-valuation"]) {
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
  console.log(`Passed: Finnish destinations on all ${urls.length} pages, all five sample report links, JYSK/NVIDIA PDF popups, request prefills, and lintapple at 375/768/1440px.`);
} finally {
  await browser.close();
}
