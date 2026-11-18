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
    assert.equal(await page.locator(".hero-reports").getAttribute("href"), "/sample-report");
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
  const pdfPage = await browser.newPage();
  const putBodies = [];
  const brregPaths = [];
  await pdfPage.route("**/*", (route) => {
    const url = new URL(route.request().url());
    if (url.origin === new URL(base).origin) return route.continue();
    if (url.hostname.endsWith(".lambda-url.eu-west-1.on.aws"))
      return route.fulfill({ json: { sessionId: "check-session", uploadUrl: "https://upload.example/file.pdf", s3Key: "k" } });
    if (url.hostname === "upload.example") {
      putBodies.push(route.request().method());
      return route.fulfill({ status: 200, headers: { "Access-Control-Allow-Origin": "*" } });
    }
    if (url.hostname === "pdfanalysis.valuatum.com") return route.fulfill({ body: "registration" });
    if (url.hostname === "data.brreg.no") {
      brregPaths.push(url.pathname);
      const cors = { "Access-Control-Allow-Origin": "*" };
      if (url.pathname.endsWith("/000000000/aar")) return route.fulfill({ status: 404, headers: cors });
      if (url.pathname.endsWith("/aar")) return route.fulfill({ json: ["2024", "2025"], headers: cors });
      return route.fulfill({ body: "%PDF-1.4", headers: { ...cors, "Content-Type": "application/pdf" } });
    }
    return route.abort();
  });
  await pdfPage.goto(`${base}/solutions/pdf-based-company-valuation`, { waitUntil: "networkidle" });
  await pdfPage.locator(".pdf-drop input").setInputFiles({ name: "notes.txt", mimeType: "text/plain", buffer: Buffer.from("x") });
  assert.equal(await pdfPage.locator(".pdf-drop-error").innerText(), "Choose a PDF file.");
  const dropped = await pdfPage.evaluateHandle(() => {
    const data = new DataTransfer();
    data.items.add(new File(["%PDF-1.4"], "statement.pdf", { type: "application/pdf" }));
    return data;
  });
  await pdfPage.dispatchEvent(".pdf-drop", "drop", { dataTransfer: dropped });
  await pdfPage.waitForURL(/pdfanalysis\.valuatum\.com.*uploadSession=check-session/);
  assert.deepEqual(putBodies, ["PUT"]);
  await pdfPage.goto(`${base}/solutions/pdf-based-company-valuation`, { waitUntil: "networkidle" });
  const orgnr = pdfPage.getByLabel("Norwegian company? Enter its organisation number", { exact: true });
  const getAccounts = pdfPage.getByRole("button", { name: "Get latest accounts", exact: true });
  await orgnr.fill("12345");
  await getAccounts.click();
  assert.equal(await pdfPage.locator(".pdf-drop-error").innerText(), "Enter the nine-digit organisation number.");
  await orgnr.fill("000000000");
  await getAccounts.click();
  await pdfPage.locator(".pdf-drop-error", { hasText: "No published accounts" }).waitFor();
  await orgnr.fill("955 497 643");
  await getAccounts.click();
  await pdfPage.waitForURL(/pdfanalysis\.valuatum\.com.*uploadSession=check-session/);
  assert.ok(brregPaths.some((p) => p.endsWith("/955497643/2025")), `latest year fetched: ${brregPaths}`);
  assert.deepEqual(putBodies, ["PUT", "PUT"]);
  await pdfPage.close();
  console.log(
    `Passed: PDF drop validation, drag-and-drop upload, Norwegian register fetch and registration hand-off; repeated valuation anchor navigation, hero report link, FAQ, mobile menu, contact validation and lintapple at ${policy.viewports.map((v) => v.width).join(", ")}px.`,
  );
} finally {
  await browser.close();
}
