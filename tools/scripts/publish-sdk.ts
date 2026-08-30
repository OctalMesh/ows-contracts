/**
 * Redistributes dist/sdk/<service>/<lang>-<kind> into its own orphan branch
 * (sdk/svc-<service>/<lang>-<kind>) and tags the publish.
 *
 * Each target gets its own throwaway git worktree so this never touches the
 * checkout that ran `pnpm run generate`, safe to run in the same CI job.
 *
 * Usage: `tsx scripts/publish-sdk.ts [--dry-run]`
 */
import { cp, mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";

import { allSdkTargets, config } from "@root/contracts.config";

import {
  git,
  readFileAtTag,
  remoteBranchExists,
  requireOk,
  tagExists,
} from "@lib/git";

const dryRun = process.argv.includes("--dry-run");

for (const { service, target } of allSdkTargets) {
  const version = (
    await readFile(path.join(target.outputDir, "VERSION"), "utf8")
  ).trim();
  const localHash = (
    await readFile(path.join(target.outputDir, "SPEC_HASH"), "utf8")
  ).trim();
  const tag = `${target.tagPrefix}-v${version}`;

  console.log(
    `\n=== ${service.name} / ${target.lang}-${target.kind} -> ${target.branch} (v${version}) ===`,
  );

  if (tagExists(config.rootDir, tag)) {
    const remoteHash = readFileAtTag(config.rootDir, tag, "SPEC_HASH");

    if (remoteHash !== null && remoteHash !== localHash) {
      throw new Error(
        `Tag ${tag} already exists, but the ${service.name} spec content ` +
          `has changed since it was published under that version. Bump ` +
          `"info.version" in specs/${service.name}/openapi.yaml before ` +
          `releasing again.`,
      );
    }

    console.log(
      `Tag ${tag} already exists on origin with matching content, skipping (already published).`,
    );
    continue;
  }

  const worktreeDir = await mkdtemp(path.join(tmpdir(), "sdk-publish-"));
  await rm(worktreeDir, { recursive: true, force: true });

  git(["fetch", "origin", target.branch], config.rootDir);
  const hasRemoteBranch = remoteBranchExists(config.rootDir, target.branch);

  const setup = hasRemoteBranch
    ? git(
        ["worktree", "add", worktreeDir, `origin/${target.branch}`],
        config.rootDir,
      )
    : git(["worktree", "add", "--detach", worktreeDir], config.rootDir);
  requireOk(setup, `Failed to create worktree for ${target.branch}`);

  if (hasRemoteBranch) {
    requireOk(
      git(
        ["checkout", "-B", target.branch, `origin/${target.branch}`],
        worktreeDir,
      ),
      `Failed to check out ${target.branch}`,
    );
  } else {
    requireOk(
      git(["checkout", "--orphan", target.branch], worktreeDir),
      `Failed to create orphan branch ${target.branch}`,
    );
  }

  git(["rm", "-rf", "--quiet", "."], worktreeDir);
  await cp(target.outputDir, worktreeDir, { recursive: true });

  git(["add", "-A"], worktreeDir);
  const hasChanges =
    git(["diff", "--cached", "--quiet"], worktreeDir).status !== 0;

  if (!hasChanges) {
    console.log("No content changes since last publish - committing tag only.");
  } else {
    requireOk(
      git(
        [
          "commit",
          "-m",
          `chore(sdk): publish ${service.name} ${target.lang}-${target.kind} v${version}`,
        ],
        worktreeDir,
      ),
      `Commit failed for ${target.branch}`,
    );
  }

  requireOk(git(["tag", tag], worktreeDir), `Tagging failed for ${tag}`);

  if (dryRun) {
    console.log(`[dry-run] would push ${target.branch} and tag ${tag}`);
  } else {
    requireOk(
      git(["push", "origin", `HEAD:refs/heads/${target.branch}`], worktreeDir),
      `Push failed for ${target.branch}`,
    );
    requireOk(
      git(["push", "origin", tag], worktreeDir),
      `Tag push failed for ${tag}`,
    );
    console.log(`Published ${target.branch} @ ${tag}`);
  }

  git(["worktree", "remove", "--force", worktreeDir], config.rootDir);
}

console.log(`\nDone - processed ${allSdkTargets.length} SDK packages.`);
