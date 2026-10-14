import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

for (const [name, flag, environment, expected] of [
  ["default review environment is noindex", "", "", false],
  ["production can explicitly enable indexing", "true", "production", true],
  ["preview cannot enable indexing", "true", "preview", false],
  ["production stays noindex until approved", "false", "production", false],
]) {
  test(name, () => {
    const result = spawnSync(
      process.execPath,
      [
        "--input-type=module",
        "-e",
        "import { indexable } from './src/lib/site.ts'; console.log(indexable);",
      ],
      {
        env: { ...process.env, SITE_INDEXABLE: flag, VERCEL_ENV: environment },
        encoding: "utf8",
      },
    );
    assert.equal(result.status, 0, result.stderr);
    assert.equal(result.stdout.trim(), String(expected));
  });
}
