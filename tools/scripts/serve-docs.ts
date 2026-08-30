/**
 * A simple HTTP server to serve the documentation files.
 * This script is used to serve the documentation files in the `dist/docs`
 * directory.
 *
 * Usage: `tsx scripts/serve-docs`
 */
import { createReadStream, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

import { config } from "@root/contracts.config";

const host = config.docsServer.host;
const port = config.docsServer.port;

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

  // noinspection HttpUrlsUsage
  const url = new URL(request.url, `http://${host}:${port}`);
  const pathname = decodeURIComponent(url.pathname);

  const relativePath = normalize(pathname).replace(/^(\.\.[/\\])+/, "");
  let file = join(config.docsDir, relativePath);

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
  // noinspection HttpUrlsUsage
  console.log(`Scalar documentation: http://${host}:${port}`);
});
