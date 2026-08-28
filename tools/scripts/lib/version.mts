/**
 * Resolves the version to stamp onto every generated SDK package.
 *
 * CI sets `SDK_VERSION` explicitly (see `.github/workflows/release.yaml`, job
 * `version`). Locally, falling back to a dev timestamp keeps `pnpm run
 * generate` usable without any extra setup.
 *
 * @returns The resolved version string, either from `SDK_VERSION` or a dev
 *          timestamp.
 */
export function resolveVersion(): string {
  const fromEnv = process.env.SDK_VERSION;

  if (fromEnv && fromEnv.trim().length > 0) {
    return fromEnv.trim().replace(/^v/, "");
  }

  const now = new Date();
  const stamp = now.toISOString().replace(/[-:]/g, "").split(".")[0];

  return `0.0.0-dev.${stamp}`;
}
