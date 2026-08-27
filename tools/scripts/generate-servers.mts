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

      reject(new Error(`server generation exited with ${code}`));
    });
  });

await mkdir(`${config.rootDir}/servers/java`, { recursive: true });

await mkdir(`${config.rootDir}/servers/go`, { recursive: true });

for (const service of config.services) {
  const input = `${config.specsDir}/${service.name}.json`;

  await rm(service.servers.java.directory, {
    recursive: true,
    force: true,
  });

  await rm(service.servers.go.directory, {
    recursive: true,
    force: true,
  });

  await run([
    "-i",
    input,
    "-g",
    "spring",
    "-o",
    service.servers.java.directory,
    `--additional-properties=${service.servers.java.additionalProperties}`,
  ]);

  await run([
    "-i",
    input,
    "-g",
    "go-server",
    "-o",
    service.servers.go.directory,
    `--additional-properties=${service.servers.go.additionalProperties}`,
  ]);

  const moduleFile = `${service.servers.go.directory}/go.mod`;

  const contents = await readFile(moduleFile, "utf8");

  await writeFile(
    moduleFile,
    contents.replace(/^module .*$/m, `module ${service.servers.go.modulePath}`),
  );
}
