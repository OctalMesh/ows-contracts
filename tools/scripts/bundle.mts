/**
 * Bundles the OpenAPI specifications for all services defined in the config
 * file using the Redocly CLI.
 *
 * Usage: `tsx scripts/bundle.mts`
 */
import { spawn } from "node:child_process";
import { mkdir, rm } from "node:fs/promises";

import { config } from "@root/contracts.config.mts";

const run = (args: string[]): Promise<void> =>
  new Promise<void>((resolvePromise, reject) => {
    const child = spawn("pnpm", ["exec", "redocly", "bundle", ...args], {
      cwd: config.rootDir,
      stdio: "inherit",
      shell: true,
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }

      reject(new Error(`redocly exited with ${code}`));
    });
  });

await rm(config.specsDir, { recursive: true, force: true });
await mkdir(config.specsDir, { recursive: true });

for (const service of config.services) {
  const output = `${service.name}.json`;

  await run([service.entrypoint, "-o", `${config.specsDir}/${output}`]);
}

console.log(
  `Bundled ${config.services.length} specifications into ${config.specsDir}`,
);
