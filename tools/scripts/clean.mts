import { rm } from "node:fs/promises";
import { resolve } from "node:path";

import { config } from "../../contracts.config.mjs";

const generated = [
  config.distDir,

  ...config.services.flatMap((service) => [
    service.clients.typescript.directory,
    service.clients.go.directory,
    service.servers.go.directory,
    service.servers.java.directory,
  ]),
];

await Promise.all(
  generated.map((directory) =>
    rm(resolve(directory), {
      recursive: true,
      force: true,
    }),
  ),
);

console.log(`Cleaned ${generated.length} generated output directories.`);
