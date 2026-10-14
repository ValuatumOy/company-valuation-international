import assert from "node:assert/strict";
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { checkPage } from "lintapple";

const base = process.env.CHECK_BASE_URL || "http://localhost:3000";
const policy = JSON.parse(await readFile("ui-policy.json", "utf8"));
const screenshots = process.env.SCREENSHOT_DIR;
// These IDs and diagram placements are the media contract from the old active routes.
const media = [
  ["/resources/company-valuation/what-is-company-valuation", "3_R14_eFCOg", ["selection"]],
  ["/resources/company-valuation/methods", null, ["methods", "selection"]],
  ["/solutions/manual-data-input-company-valuation/key-features", "RCqo-1ph-Gs", []],
  ["/solutions/pdf-based-company-valuation", "TkujkI6Riu4", ["pdf-process"]],
  ["/solutions/why-do-you-need-company-valuation", "vHu7WsCF-5Y", []],
];
const registration = [
  ["/solutions/finnish-company-valuation", "Register now", "https://valuation-finland.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=CVFinland&popup=true"],
  ["/solutions/manual-data-input-company-valuation", "Register for manual valuation", "https://estimator.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PPVTemplate&userType=&popup=true"],
];

const browser = await chromium.launch();
try {
  for (const width of [375, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await context.newPage();
    for (const [route, video, diagrams] of media) {
      await page.goto(`${base}${route}`, { waitUntil: "domcontentloaded" });
      await page.evaluate(() => document.fonts.ready);
      assert.equal(await page.locator("iframe").count(), video ? 1 : 0, route);
      if (video) {
        const frame = page.locator("iframe");
        assert.equal(await frame.getAttribute("src"), `https://www.youtube-nocookie.com/embed/${video}`);
        assert.ok(await frame.getAttribute("title"));
        const bounds = await frame.boundingBox();
        assert.ok(Math.abs(bounds.width / bounds.height - 16 / 9) < 0.01);
      }
      assert.deepEqual(await page.locator("[data-diagram]").evaluateAll((els) => els.map((el) => el.dataset.diagram)), diagrams, route);
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth), `${route}: overflow`);
      const audit = await checkPage(page, policy);
      assert.equal(audit.findings.length, 0, `${width}px ${route}: ${JSON.stringify(audit.findings)}`);
      if (screenshots && route.endsWith("what-is-company-valuation")) {
        await mkdir(screenshots, { recursive: true });
        await page.locator("[data-diagram]").scrollIntoViewIfNeeded();
        await page.screenshot({ path: path.join(screenshots, `resource-diagram-${width}.png`) });
      }
    }
    for (const [route, label, url] of registration) {
      // Exercise the real click/popup without contacting or submitting to the live service.
      await context.route(url, (request) => request.fulfill({ contentType: "text/html", body: "<h1>Registration navigation intercepted by test</h1>" }));
      await page.goto(`${base}${route}`);
      const action = page.locator(".page-hero").getByRole("link", { name: label, exact: true });
      assert.equal(await action.getAttribute("href"), url);
      const popupPromise = page.waitForEvent("popup");
      await action.click();
      const popup = await popupPromise;
      await popup.waitForLoadState("domcontentloaded");
      assert.equal(popup.url(), url);
      await popup.close();
    }
    await context.close();
  }
  console.log("Passed: all four legacy video embeds, all four diagram placements, mobile/desktop lintapple, and both primary registration clicks (intercepted).");
} finally {
  await browser.close();
}
