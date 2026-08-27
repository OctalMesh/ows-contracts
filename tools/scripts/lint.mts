import { spawnSync } from "node:child_process";

import { config } from "../../contracts.config.mjs";

console.log("Linting OpenAPI contracts...");

let hasErrors = false;

for (const service of config.services) {
  console.log(`Checking [${service.name}]...`);

  const result = spawnSync(
    "pnpm",
    [
      "exec",
      "spectral",
      "lint",
      service.entrypoint,
      "--ruleset",
      `${config.rootDir}/.spectral.yaml`,
    ],
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
