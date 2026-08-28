/**
 * Lints the OpenAPI contracts using Redocly.
 *
 * It checks each service's OpenAPI specification against the rules defined
 * in `redocly.yaml`.
 *
 * Usage: `tsx scripts/lint.mts`
 */
import { spawnSync } from "node:child_process";

import { config } from "@root/contracts.config.mts";

console.log("Linting OpenAPI contracts...");

let hasErrors = false;

for (const service of config.services) {
  console.log(`Checking [${service.name}]...`);

  const result = spawnSync(
    "pnpm",
    ["exec", "redocly", "lint", service.entrypoint],
    {
      cwd: config.rootDir,
      stdio: "inherit",
      shell: true,
    },
  );

  if (result.status !== 0) {
    hasErrors = true;
  }
}

if (hasErrors) {
  process.exit(1);
}
