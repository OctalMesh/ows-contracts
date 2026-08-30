/**
 * Generates SDK packages for all services defined in the OpenAPI
 * specifications.
 *
 * Usage: `tsx scripts/generate-sdk`
 */
import { spawn } from "node:child_process";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

import {
  type SdkTargetConfig,
  allSdkTargets,
  config,
} from "@root/contracts.config";

import { renderReadme } from "@lib/readme-templates";
import { resolveVersion } from "@lib/version";

const runOpenApiGenerator = (args: string[]): Promise<void> => {
  return new Promise<void>((resolvePromise, reject) => {
    const child = spawn(
      "pnpm",
      ["exec", "openapi-generator-cli", "generate", ...args],
      { cwd: config.rootDir, stdio: "inherit", shell: true },
    );

    child.on("close", (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }

      reject(new Error(`generation exited with ${code}`));
    });
  });
};

const runOpenApiTypescript = (args: string[]): Promise<void> => {
  return new Promise<void>((resolvePromise, reject) => {
    const child = spawn("pnpm", ["exec", "openapi-typescript", ...args], {
      cwd: config.rootDir,
      stdio: "inherit",
      shell: true,
    });

    child.on("close", (code) => {
      if (code === 0) {
        resolvePromise();
        return;
      }

      reject(new Error(`openapi-typescript exited with ${code}`));
    });
  });
};

const version = resolveVersion();

await rm(config.sdkDir, { recursive: true, force: true });
await mkdir(config.sdkDir, { recursive: true });

for (const { service, target } of allSdkTargets) {
  const input = path.join(config.specsDir, `${service.name}.json`);

  await mkdir(target.outputDir, { recursive: true });

  if (target.tool === "openapi-typescript") {
    await runOpenApiTypescript([
      input,
      "-o",
      path.join(target.outputDir, "index.d.ts"),
    ]);
    await writeTypesPackageJson(target, version, service.name);
  } else {
    await runOpenApiGenerator([
      "-i",
      input,
      "-g",
      target.generator,
      "-o",
      target.outputDir,
      `--additional-properties=${target.additionalProperties}`,
    ]);

    if (target.lang === "go") {
      await patchGoModule(target.outputDir, target.goModulePath!);
    }

    if (target.lang === "typescript") {
      await patchNpmPackage(target.outputDir, version, service.name);
    }

    if (target.lang === "java") {
      await patchMavenPom(target.outputDir, version);
    }
  }

  await writeFile(path.join(target.outputDir, "VERSION"), `${version}\n`);
  await writeFile(
    path.join(target.outputDir, "README.md"),
    renderReadme({ service, target, version }),
  );
}

console.log(
  `Generated ${allSdkTargets.length} SDK packages (version ${version}) into ${config.sdkDir}`,
);

//<editor-fold desc="SDK Patching Helpers" defaultstate="collapsed">

/**
 * Patch the `go.mod` file in a generated Go SDK package to set the correct
 * module path.
 *
 * @param outputDir  - The directory where the SDK package was generated.
 * @param modulePath - The correct module path to set.
 */
async function patchGoModule(
  outputDir: string,
  modulePath: string,
): Promise<void> {
  const moduleFile = path.join(outputDir, "go.mod");

  try {
    const contents = await readFile(moduleFile, "utf8");

    await writeFile(
      moduleFile,
      contents.replace(/^module .*$/m, `module ${modulePath}`),
    );
  } catch {
    // go-server templates don't always emit go.mod
  }
}

/**
 * Patch the `package.json` file in a generated TypeScript SDK package to set
 * the correct version and repository information.
 *
 * @param outputDir   - The directory where the SDK package was generated.
 * @param version     - The version of the package to set.
 * @param serviceName - The name of the service for repository path.
 */
async function patchNpmPackage(
  outputDir: string,
  version: string,
  serviceName: string,
): Promise<void> {
  const pkgFile = path.join(outputDir, "package.json");
  const pkg = JSON.parse(await readFile(pkgFile, "utf8"));

  pkg.version = version;
  pkg.repository = {
    type: "git",
    url: `git+https://github.com/${config.github.owner}/${config.github.repo}.git`,
    directory: `sdk/svc-${serviceName}/typescript-client`,
  };
  pkg.publishConfig = {
    registry: "https://npm.pkg.github.com",
    access: "restricted",
  };

  await writeFile(pkgFile, JSON.stringify(pkg, null, 2));
}

/**
 * Write a `package.json` from scratch for a types-only npm package (the
 * TypeScript server target). Unlike `patchNpmPackage`, there's no generator
 * output to patch here - `openapi-typescript` only emits `index.d.ts`.
 *
 * @param target      - The SDK target config for the specific SDK.
 * @param version     - The version of the package to set.
 * @param serviceName - The name of the service for repository path.
 */
async function writeTypesPackageJson(
  target: SdkTargetConfig,
  version: string,
  serviceName: string,
): Promise<void> {
  const pkg = {
    name: target.npmPackageName,
    version,
    description: `Types-only OpenAPI contract for the ${serviceName} service.`,
    types: "./index.d.ts",
    files: ["index.d.ts"],
    license: "MIT",
    repository: {
      type: "git",
      url: `git+https://github.com/${config.github.owner}/${config.github.repo}.git`,
      directory: `sdk/svc-${serviceName}/typescript-server`,
    },
    publishConfig: {
      registry: "https://npm.pkg.github.com",
      access: "restricted",
    },
  };

  await writeFile(
    path.join(target.outputDir, "package.json"),
    JSON.stringify(pkg, null, 2),
  );
}

/**
 * Patch the `pom.xml` file in a generated Java SDK package to set the correct
 * version and distribution management information for publishing.
 *
 * @param outputDir - The directory where the SDK package was generated.
 * @param version   - The version of the package to set.
 */
async function patchMavenPom(
  outputDir: string,
  version: string,
): Promise<void> {
  const pomFile = path.join(outputDir, "pom.xml");

  try {
    let pom = await readFile(pomFile, "utf8");
    pom = pom.replace(
      /<version>[^<]*<\/version>/,
      `<version>${version}</version>`,
    );

    if (!pom.includes("<distributionManagement>")) {
      pom = pom.replace(
        "</project>",
        [
          "  <distributionManagement>",
          "    <repository>",
          "      <id>github</id>",
          `      <name>${config.github.owner} ${config.github.repo} Packages</name>`,
          `      <url>https://maven.pkg.github.com/${config.github.owner}/${config.github.repo}</url>`,
          "    </repository>",
          "  </distributionManagement>",
          "</project>",
        ].join("\n"),
      );
    }

    await writeFile(pomFile, pom);
  } catch {
    // pom.xml absent (e.g. Gradle build selected)
  }
}

//</editor-fold>
