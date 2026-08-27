import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";



import { config } from "../../contracts.config.mjs";










const output = config.docsDir;
const specsOutput = join(output, "specs");

await rm(output, {
  recursive: true,
  force: true,
});

await mkdir(specsOutput, {
  recursive: true,
});

for (const service of config.services) {
  const source = join(config.specsDir, `${service.name}.json`);
  const target = join(specsOutput, `${service.name}.json`);
  const contents = await readFile(source, "utf8");

  await writeFile(target, contents);
}

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

const title = "OctalMesh Web Shop APIs";
const description = "Contract-First OpenAPI specifications, generated clients and servers for the OctalMesh Web Shop microservices.";

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1"
  >
  <meta
    name="description"
    content="${escapeHtml(description)}"
  >
  <title>${escapeHtml(title)}</title>
</head>
<body>
  <div id="app"></div>

  <script src="https://cdn.jsdelivr.net/npm/@scalar/api-reference@1.66.1"></script>

  <script>
    Scalar.createApiReference("#app", {
      baseServerURL: "https://octalmesh.com",
      favicon: '/favicon.svg',
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

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}
