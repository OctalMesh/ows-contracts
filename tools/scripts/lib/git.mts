import { spawnSync } from "node:child_process";

/**
 * The result of executing a git command.
 *
 * @see {@link git} - The function that executes the git command.
 */
export interface GitResult {
  status: number;
  stdout: string;
  stderr: string;
}

/**
 * Execute a git command in a given working directory and return the result.
 *
 * @param args - The command-line arguments to pass to the git command.
 * @param cwd  - The working directory in which to execute the git command.
 * @returns The result of the git command.
 *
 * @see {@link GitResult} - The result of executing the git command.
 */
export function git(args: string[], cwd: string): GitResult {
  const result = spawnSync("git", args, { cwd, encoding: "utf8" });

  return {
    status: result.status ?? 1,
    stdout: (result.stdout ?? "").trim(),
    stderr: (result.stderr ?? "").trim(),
  };
}

/**
 * Check if a remote branch exists in the given repository.
 *
 * @param repoRoot - The root directory of the repository.
 * @param branch   - The name of the branch to check.
 * @returns Whether the remote branch exists (true) or not (false).
 */
export function remoteBranchExists(repoRoot: string, branch: string): boolean {
  return (
    git(["ls-remote", "--exit-code", "--heads", "origin", branch], repoRoot)
      .status === 0
  );
}

/**
 * Check if a remote tag exists in the given repository.
 *
 * @param repoRoot - The root directory of the repository.
 * @param tag      - The name of the tag to check.
 * @returns Whether the remote tag exists (true) or not (false).
 */
export function tagExists(repoRoot: string, tag: string): boolean {
  return (
    git(["ls-remote", "--exit-code", "--tags", "origin", tag], repoRoot)
      .status === 0
  );
}

/**
 * Require that a git command succeeded, throwing an error with the given message
 * if it did not.
 *
 * @param result  - The result of the git command to check.
 * @param message - The error message to throw if the command failed.
 * @throws Error if the git command failed (non-zero exit code).
 */
export function requireOk(result: GitResult, message: string): void {
  if (result.status !== 0) {
    throw new Error(`${message}: ${result.stderr || result.stdout}`);
  }
}
