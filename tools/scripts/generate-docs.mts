/**
 * Generates documentation site for all services defined in the OpenAPI
 * specifications.
 *
 * Usage: `tsx scripts/generate-docs.mts`
 */
import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { dirname, join } from "node:path";

import { config } from "@root/contracts.config.mts";

const output = config.docsDir;
const specsOutput = join(output, "specs");

await rm(output, { recursive: true, force: true });
await mkdir(specsOutput, { recursive: true });

for (const service of config.services) {
  const source = join(config.specsDir, `${service.name}.json`);
  const target = join(specsOutput, `${service.name}.json`);
  const contents = await readFile(source, "utf8");

  await writeFile(target, contents);
}

const require = createRequire(import.meta.url);
const mainEntryPoint = require.resolve("@scalar/api-reference");

let packageDir = dirname(mainEntryPoint);
while (
  !packageDir.endsWith("@scalar/api-reference") &&
  !packageDir.endsWith("@scalar\\api-reference")
) {
  const parent = dirname(packageDir);

  if (parent === packageDir) {
    break;
  }

  packageDir = parent;
}

const scalarScriptPath = join(packageDir, "dist", "browser", "standalone.js");
const scalarTarget = join(output, "scalar.js");

await copyFile(scalarScriptPath, scalarTarget);
console.log(`Copied Scalar script to ${scalarTarget}`);

const sources = config.services
  .map(
    (service, index) => `{
      title: ${JSON.stringify(service.title)},
      slug: ${JSON.stringify(service.name)},
      url: "./specs/${service.name}.json"${
        index === 0 ? ",\n      default: true" : ""
      }
    }`,
  )
  .join(",\n");

const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <div id="app"></div>

    <!-- Load the Script -->
    <script src="./scalar.js"></script>

    <!-- Initialize the API Reference -->
    <script>
      Scalar.createApiReference("#app", {
        baseServerURL: "${config.docsServer.baseServerUrl}",
        favicon: "${config.docsServer.favicon}",
        metaData: {
          title: "${config.docsServer.title}",
          description: "${config.docsServer.description}",
          ogTitle: "${config.docsServer.title}",
          ogDescription: "${config.docsServer.description}",
        },
        layout: "classic",
        darkMode: true,
        telemetry: false,
        showDeveloperTools: "never",
        showOperationId: true,
        hideTestRequestButton: false,
        sources: [
          ${sources}
        ]
      });
    </script>
  </body>
</html>
`;

await writeFile(join(output, "index.html"), html);

console.log(`Generated Scalar documentation site at ${output}`);
