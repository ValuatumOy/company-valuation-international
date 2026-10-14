import assert from "node:assert/strict";
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { chromium } from "playwright";
import { checkPage } from "lintapple";

const base = process.env.CHECK_BASE_URL || "http://localhost:3000";
const policy = JSON.parse(await readFile("ui-policy.json", "utf8"));
const screenshots = process.env.SCREENSHOT_DIR;
const browser = await chromium.launch();
try {
  for (const viewport of policy.viewports) {
    const page = await browser.newPage({ viewport, colorScheme: "light" });
    await page.goto(base);
    await page.evaluate(() => document.fonts.ready);
    assert.equal(
      await page.evaluate(
        () =>
          document.documentElement.scrollWidth <=
          document.documentElement.clientWidth,
      ),
      true,
      `${viewport.width}px: horizontal page overflow`,
    );
    if (viewport.width < 801) {
      await page
        .getByRole("button", { name: "Open navigation", exact: true })
        .click();
      assert.equal(
        await page
          .getByRole("navigation", { name: "Mobile navigation", exact: true })
          .isVisible(),
        true,
      );
      await page
        .getByRole("navigation", { name: "Mobile navigation", exact: true })
        .getByRole("link", { name: "Resources", exact: true })
        .click();
      await page.waitForURL(`${base}/resources`);
      assert.equal(
        await page
          .getByRole("navigation", { name: "Mobile navigation", exact: true })
          .count(),
        0,
      );
      await page.goto(base);
    }
    await page.locator(".hero").getByRole("link", { name: "Find your valuation", exact: true }).click();
    await page.waitForFunction(() => Math.abs(document.querySelector("#solutions").getBoundingClientRect().top - 100) < 10);
    const closingAction = page.locator(".closing-cta").getByRole("link", { name: "Find your valuation", exact: true });
    await closingAction.scrollIntoViewIfNeeded();
    assert.ok(await page.locator("#solutions").evaluate((el) => el.getBoundingClientRect().top < -1000));
    await closingAction.click();
    await page.waitForFunction(() => Math.abs(document.querySelector("#solutions").getBoundingClientRect().top - 100) < 10);
    await page.getByRole("tab", { name: "Financials", exact: true }).click();
    assert.match(
      await page.getByRole("tabpanel").innerText(),
      /EBITDA margin[\s\S]*15.0%/,
    );
    await page
      .getByRole("tab", { name: "Financials", exact: true })
      .press("ArrowRight");
    assert.equal(
      await page
        .getByRole("tab", { name: "Methods", exact: true })
        .getAttribute("aria-selected"),
      "true",
    );
    assert.match(
      await page.getByRole("tabpanel").innerText(),
      /Equity value = EBITDA/,
    );
    await page.getByRole("tab", { name: "Methods", exact: true }).press("Home");
    assert.equal(
      await page
        .getByRole("tab", { name: "Overview", exact: true })
        .getAttribute("aria-selected"),
      "true",
    );
    await page
      .locator("details")
      .filter({ hasText: "Which countries are supported?" })
      .locator("summary")
      .click();
    assert.match(
      await page.locator("details[open]").innerText(),
      /PDF upload and manual input/,
    );
    assert.equal(await page.locator("details[open]").count(), 1);
    const audit = await checkPage(page, policy);
    assert.equal(
      audit.findings.length,
      0,
      `${viewport.width}px: ${audit.findings.map((f) => `${f.rule}: ${f.message}`).join("\n")}`,
    );
    if (screenshots && [375, 1440].includes(viewport.width)) {
      await mkdir(screenshots, { recursive: true });
      await page.screenshot({
        path: path.join(screenshots, `homepage-${viewport.width}.png`),
        fullPage: true,
      });
      await page.goto(base);
      await page.screenshot({
        path: path.join(screenshots, `hero-${viewport.width}.png`),
      });
    }
    await page.goto(`${base}/contact-international`);
    assert.equal(
      await page.locator("form").evaluate((form) => form.checkValidity()),
      false,
    );
    await page.getByLabel("Your name", { exact: true }).fill("Example Visitor");
    await page
      .getByLabel("Your email", { exact: true })
      .fill("visitor@example.com");
    await page.getByLabel("Country", { exact: true }).fill("Germany");
    await page.getByLabel("Company to value", { exact: true }).fill("Example GmbH");
    assert.equal(
      await page.locator("form").evaluate((form) => form.checkValidity()),
      true,
    );
    assert.equal(
      await page
        .getByRole("button", { name: "Prepare email", exact: true })
        .isVisible(),
      true,
    );
    assert.match(
      await page.locator("form").innerText(),
      /Review and send it there/,
    );
    // No contact submission or external service interaction.
    const contactAudit = await checkPage(page, policy);
    assert.equal(
      contactAudit.findings.length,
      0,
      `${viewport.width}px: contact form accessibility findings`,
    );
    await page.close();
  }
  console.log(
    `Passed: repeated valuation anchor navigation, report tabs and keyboard navigation, FAQ, mobile menu, contact validation and lintapple at ${policy.viewports.map((v) => v.width).join(", ")}px.`,
  );
} finally {
  await browser.close();
}
