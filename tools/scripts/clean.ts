/**
 * Cleans the distribution directory by removing all files and subdirectories
 * within it.
 *
 * Usage: `tsx scripts/clean`
 */
import { rm } from "node:fs/promises";

import { config } from "@root/contracts.config";

await rm(config.distDir, { recursive: true, force: true });

console.log(`Cleaned ${config.distDir}`);
