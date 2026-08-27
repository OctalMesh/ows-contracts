import { spawn } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";

import { config } from "../../contracts.config.mjs";

const run = (args: string[]) =>
  new Promise<void>((resolvePromise, reject) => {
    const child = spawn(
      "pnpm",
      ["exec", "openapi-generator-cli", "generate", ...args],
      {
        cwd: config.rootDir,
        stdio: "inherit",
        shell: true,
      },
    );

    child.on("close", (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }

      reject(new Error(`client generation exited with ${code}`));
    });
  });

await mkdir(`${config.rootDir}/clients/ts`, { recursive: true });

await mkdir(`${config.rootDir}/clients/go`, { recursive: true });

for (const service of config.services) {
  const input = `${config.specsDir}/${service.name}.json`;

  await rm(service.clients.typescript.directory, {
    recursive: true,
    force: true,
  });

  await rm(service.clients.go.directory, {
    recursive: true,
    force: true,
  });

  await run([
    "-i",
    input,
    "-g",
    "typescript-fetch",
    "-o",
    service.clients.typescript.directory,
    `--additional-properties=${service.clients.typescript.additionalProperties}`,
  ]);

  await run([
    "-i",
    input,
    "-g",
    "go",
    "-o",
    service.clients.go.directory,
    `--additional-properties=${service.clients.go.additionalProperties}`,
  ]);

  const moduleFile = `${service.clients.go.directory}/go.mod`;

  const contents = await readFile(moduleFile, "utf8");

  await writeFile(
    moduleFile,
    contents.replace(/^module .*$/m, `module ${service.clients.go.modulePath}`),
  );
}
