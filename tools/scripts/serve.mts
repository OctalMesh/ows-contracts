import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

import { config } from "../../contracts.config.mjs";

const host = "localhost";
const port = 4000;
const root = config.docsDir;

const mimeTypes: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
};

const server = createServer((request, response) => {
  if (!request.url) {
    response.writeHead(400);
    response.end();
    return;
  }

  const url = new URL(request.url, `http://${host}:${port}`);
  const pathname = decodeURIComponent(url.pathname);

  const relativePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  let file = join(root, relativePath);

  try {
    if (statSync(file).isDirectory()) {
      file = join(file, "index.html");
    }
  } catch {
    response.writeHead(404);
    response.end("Not Found");
    return;
  }

  try {
    const stat = statSync(file);

    if (!stat.isFile()) {
      response.writeHead(404);
      response.end("Not Found");
      return;
    }

    response.writeHead(200, {
      "Content-Type": mimeTypes[extname(file)] ?? "application/octet-stream",
    });

    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(404);
    response.end("Not Found");
  }
});

server.listen(port, host, () => {
  console.log(`Scalar documentation: http://${host}:${port}`);
});
