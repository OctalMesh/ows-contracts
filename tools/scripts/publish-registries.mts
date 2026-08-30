/**
 * Publishes registry-backed packages to GitHub Packages:
 *   - TypeScript client       -> npm   (needs NODE_AUTH_TOKEN / configured registry)
 *   - TypeScript server types -> npm   (same registry - types-only package)
 *   - Java client             -> Maven (needs ~/.m2/settings.xml with <id>github</id>
 *     credentials, wired up by actions/setup-java in CI)
 *   - Java server stubs       -> Maven (same as above)
 *
 *   - Go packages are intentionally skipped here, they are consumed straight
 *     from their git branch/tag (see publish-sdk.mts), Go has no registry step.
 *
 * Usage: `tsx scripts/publish-registries.mts [--dry-run]`
 */
import { spawnSync } from "node:child_process";

import { allSdkTargets } from "@root/contracts.config.mts";

const dryRun = process.argv.includes("--dry-run");

function run(cmd: string, args: string[], cwd: string): void {
  console.log(`$ ${cmd} ${args.join(" ")}  (in ${cwd})`);

  if (dryRun) {
    return;
  }

  const result = spawnSync(cmd, args, { cwd, stdio: "inherit", shell: true });

  if (result.status !== 0) {
    throw new Error(`${cmd} ${args.join(" ")} exited with ${result.status}`);
  }
}

let publishedCount = 0;

for (const { service, target } of allSdkTargets) {
  if (target.lang === "typescript") {
    console.log(
      `\n=== npm publish: ${target.npmPackageName} (svc: ${service.name}, ${target.kind}) ===`,
    );
    run(
      "npm",
      ["publish", "--registry=https://npm.pkg.github.com"],
      target.outputDir,
    );

    publishedCount += 1;
  }

  if (target.lang === "java") {
    console.log(
      `\n=== maven deploy: ${target.mavenGroupId}:${target.mavenArtifactId} (svc: ${service.name}, ${target.kind}) ===`,
    );
    run("mvn", ["-B", "deploy", "-DskipTests"], target.outputDir);

    publishedCount += 1;
  }
}

console.log(`\nDone - published ${publishedCount} registry package(s).`);
