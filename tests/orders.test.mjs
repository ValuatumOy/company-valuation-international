import assert from "node:assert/strict";
import test from "node:test";
import { fulfilOrderSession, inputMetadata, readInput, selectedCompanyReady, productTag } from "../src/lib/orders.ts";

test("order context survives Stripe metadata chunks, including Unicode", () => {
  const text = "Yritys 😀 " .repeat(600);
  const metadata = inputMetadata(text);
  assert.equal(readInput(metadata), Array.from(text).slice(0, 4000).join(""));
  assert.ok(Object.values(metadata).every(value => Array.from(value).length <= 500));
});

test("readiness binds source FID, plain CVR and native currency before payment", async () => {
  const original = globalThis.fetch;
  const ready = { fid: 349862, company_code: "24256790K", company_name: "Novo Nordisk A/S", eligible: true, currency: "DKK" };
  try {
    globalThis.fetch = async () => Response.json(ready);
    assert.deepEqual(await selectedCompanyReady("DK", 349862, "24256790"), ready);
    for (const change of [{ fid: 1 }, { company_code: "13590400" }, { currency: "USD" }, { currency: "SEK" }, { eligible: false }]) {
      globalThis.fetch = async () => Response.json({ ...ready, ...change });
      await assert.rejects(selectedCompanyReady("DK", 349862, "24256790"));
    }
  } finally { globalThis.fetch = original; }
});

test("Swedish readiness binds the hyphenated organisation number and SEK", async () => {
  const original = globalThis.fetch;
  const ready = { fid: 52623, company_code: "556983-9805", company_name: "Husqvarna Stockholm Aktiebolag", eligible: true, currency: "SEK" };
  let url;
  try {
    globalThis.fetch = async (requested) => { url = new URL(requested); return Response.json(ready); };
    assert.deepEqual(await selectedCompanyReady("SE", 52623, "556983-9805"), ready);
    assert.equal(url.searchParams.get("country"), "SE");
    for (const change of [{ company_code: "5569839805" }, { currency: "EUR" }, { currency: "DKK" }]) {
      globalThis.fetch = async () => Response.json({ ...ready, ...change });
      await assert.rejects(selectedCompanyReady("SE", 52623, "556983-9805"));
    }
  } finally { globalThis.fetch = original; }
});

test("only a paid order-country session with an identified company reaches delivery", async () => {
  const original = globalThis.fetch;
  const session = { id: "cs_test_fixture", payment_status: "paid", customer_details: { email: "buyer@example.com" }, metadata: { product: productTag, country: "DK", reportLanguage: "en", reportCurrency: "DKK", businessId: "24256790", fid: "349862", companyName: "Novo Nordisk A/S", ...inputMetadata("Company context") } };
  const swedish = { ...session, metadata: { ...session.metadata, country: "SE", reportCurrency: "SEK", businessId: "556983-9805", fid: "52623", companyName: "Husqvarna Stockholm Aktiebolag" } };
  let calls = 0, payload;
  try {
    globalThis.fetch = async (_url, init) => { calls++; payload = JSON.parse(init.body); return Response.json({ run_id: "a".repeat(32), key: "exp_fixture" }); };
    for (const change of [{ payment_status: "unpaid" }, { metadata: { ...session.metadata, country: "FI" } }, { metadata: { ...session.metadata, country: "NO" } }, { metadata: { ...session.metadata, reportCurrency: "USD" } }, { metadata: { ...session.metadata, fid: "invalid" } }, { metadata: { ...swedish.metadata, reportCurrency: "DKK" } }, { metadata: { ...swedish.metadata, businessId: "5569839805" } }]) await assert.rejects(fulfilOrderSession({ ...session, ...change }));
    assert.equal(calls, 0);
    assert.deepEqual(await fulfilOrderSession(session), { runId: "a".repeat(32), key: "exp_fixture" });
    assert.equal(calls, 1);
    assert.deepEqual(payload, { country: "DK", report_language: "en", business_id: "24256790", fid: 349862, company_name: "Novo Nordisk A/S", email: "buyer@example.com", user_input: "Company context", stripe_session_id: "cs_test_fixture", mode: "forecast", website: "" });
    await fulfilOrderSession(swedish);
    assert.equal(payload.country, "SE");
    assert.equal(payload.business_id, "556983-9805");
    assert.equal(payload.fid, 52623);
  } finally { globalThis.fetch = original; }
});
