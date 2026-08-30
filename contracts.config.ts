import path from "node:path";
import { fileURLToPath } from "node:url";

const ORG = "octalmesh";
const PLATFORM = "web";
const MODULE = "shop";
const REPO = "ows-contracts";
const GITHUB_OWNER = "OctalMesh";

const DOCS_SERVER_HOST = "localhost";
const DOCS_SERVER_PORT = 8080;
const DOCS_SERVER_TITLE = "OWS - API Reference";
const DOCS_SERVER_DESCRIPTION =
  "API documentation for the OctalMesh Web Shop, including Auth, Catalog, Order, Payment, and Search services.";
const DOCS_SERVER_FAVICON = "https://octalmesh.com/favicon.ico";
const DOCS_SERVER_BASE_URL = "https://octalmesh.com";

const SERVICE_DEFS = [
  { name: "auth", title: "Auth Service API" },
  { name: "catalog", title: "Catalog Service API" },
  { name: "order", title: "Order Service API" },
  { name: "payment", title: "Payment Service API" },
  { name: "search", title: "Search Service API" },
] as const;

//<editor-fold desc="Paths" defaultstate="collapsed">

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname);

const distDir = path.join(ROOT_DIR, "dist");
const specsDir = path.join(distDir, "specs");
const docsDir = path.join(distDir, "docs");
const sdkDir = path.join(distDir, "sdk");

//</editor-fold>

//<editor-fold desc="Types and Interfaces" defaultstate="collapsed">

export type SdkLang = "typescript" | "go" | "java";
export type SdkKind = "client" | "server";
export type SdkTool = "openapi-generator" | "openapi-typescript";

export interface SdkTargetConfig {
  lang: SdkLang;
  kind: SdkKind;
  tool: SdkTool;
  generator: string;
  outputDir: string;
  branch: string;
  tagPrefix: string;
  additionalProperties: string;

  npmPackageName?: string;
  goModulePath?: string;
  goPackageName?: string;
  mavenGroupId?: string;
  mavenArtifactId?: string;
}

export interface ServiceConfig {
  name: string;
  title: string;
  entrypoint: string;
  sdk: {
    typescriptClient: SdkTargetConfig;
    typescriptServer: SdkTargetConfig;
    goClient: SdkTargetConfig;
    goServer: SdkTargetConfig;
    javaClient: SdkTargetConfig;
    javaServer: SdkTargetConfig;
  };
}

export interface ContractsConfig {
  rootDir: string;
  distDir: string;
  specsDir: string;
  docsDir: string;
  sdkDir: string;
  github: {
    owner: string;
    repo: string;
  };
  services: ServiceConfig[];
  docsServer: {
    host: string;
    port: number;
    title: string;
    description: string;
    favicon: string;
    baseServerUrl: string;
  };
}

//</editor-fold>

//<editor-fold desc="SDK Config Builders" defaultstate="collapsed">

/**
 * Builds the SDK config for a given service name.
 *
 * @param name - The name of the service.
 * @returns The SDK configuration for the specified service.
 */
function buildServiceSdk(name: string): ServiceConfig["sdk"] {
  return {
    // TypeScript client -> npm (GitHub Packages)
    typescriptClient: {
      lang: "typescript",
      kind: "client",
      tool: "openapi-generator",
      generator: "typescript-fetch",
      outputDir: path.join(sdkDir, name, "typescript-client"),
      branch: `sdk/svc-${name}/typescript-client`,
      tagPrefix: `svc-${name}-typescript-client`,
      npmPackageName: `@${ORG}/${PLATFORM}-${MODULE}-${name}-client`,
      additionalProperties: [
        `npmName=@${ORG}/${PLATFORM}-${MODULE}-${name}-client`,
        "supportsES6=true",
        "typescriptThreePlus=true",
        "withInterfaces=true",
      ].join(","),
    },

    // TypeScript "server" -> npm (GitHub Packages), types only.
    typescriptServer: {
      lang: "typescript",
      kind: "server",
      tool: "openapi-typescript",
      generator: "openapi-typescript",
      outputDir: path.join(sdkDir, name, "typescript-server"),
      branch: `sdk/svc-${name}/typescript-server`,
      tagPrefix: `svc-${name}-typescript-server`,
      npmPackageName: `@${ORG}/${PLATFORM}-${MODULE}-${name}-server`,
      additionalProperties: "",
    },

    // Go client -> git branch/tag only
    goClient: {
      lang: "go",
      kind: "client",
      tool: "openapi-generator",
      generator: "go",
      outputDir: path.join(sdkDir, name, "go-client"),
      branch: `sdk/svc-${name}/go-client`,
      tagPrefix: `svc-${name}-go-client`,
      goModulePath: `github.com/${ORG}/${REPO}`,
      goPackageName: `${name}client`,
      additionalProperties: [
        `packageName=${name}client`,
        "withGoMod=true",
        "enumClassPrefix=true",
        "generateInterfaces=true",
      ].join(","),
    },

    // Go server -> git branch/tag only
    goServer: {
      lang: "go",
      kind: "server",
      tool: "openapi-generator",
      generator: "go-server",
      outputDir: path.join(sdkDir, name, "go-server"),
      branch: `sdk/svc-${name}/go-server`,
      tagPrefix: `svc-${name}-go-server`,
      goModulePath: `github.com/${ORG}/${REPO}`,
      goPackageName: `${name}server`,
      additionalProperties: [`packageName=${name}server`].join(","),
    },

    // Java client -> Maven (GitHub Packages)
    javaClient: {
      lang: "java",
      kind: "client",
      tool: "openapi-generator",
      generator: "java",
      outputDir: path.join(sdkDir, name, "java-client"),
      branch: `sdk/svc-${name}/java-client`,
      tagPrefix: `svc-${name}-java-client`,
      mavenGroupId: `com.${ORG}.${PLATFORM}.${MODULE}.${name}`,
      mavenArtifactId: `${name}-client`,
      additionalProperties: [
        "library=restclient",
        "useJakartaEe=true",
        "useTags=true",
        `groupId=com.${ORG}.${PLATFORM}.${MODULE}.${name}`,
        `artifactId=${name}-client`,
      ].join(","),
    },

    // Java server stubs (Spring interfaces) -> Maven (GitHub Packages)
    javaServer: {
      lang: "java",
      kind: "server",
      tool: "openapi-generator",
      generator: "spring",
      outputDir: path.join(sdkDir, name, "java-server"),
      branch: `sdk/svc-${name}/java-server`,
      tagPrefix: `svc-${name}-java-server`,
      mavenGroupId: `com.${ORG}.${PLATFORM}.${MODULE}.${name}`,
      mavenArtifactId: `${name}-server`,
      additionalProperties: [
        "interfaceOnly=true",
        "skipDefaultInterface=true",
        "useSpringBoot4=true",
        "useTags=true",
        `groupId=com.${ORG}.${PLATFORM}.${MODULE}.${name}`,
        `artifactId=${name}-server`,
      ].join(","),
    },
  };
}

//</editor-fold>

//<editor-fold desc="Exports" defaultstate="collapsed">

/**
 * The canonical configuration for the contracts repo - used by all scripts.
 */
export const config: ContractsConfig = {
  rootDir: ROOT_DIR,
  distDir,
  specsDir,
  docsDir,
  sdkDir,
  github: { owner: GITHUB_OWNER, repo: REPO },
  services: SERVICE_DEFS.map(({ name, title }) => ({
    name,
    title,
    entrypoint: path.join(ROOT_DIR, "specs", name, "openapi.yaml"),
    sdk: buildServiceSdk(name),
  })),
  docsServer: {
    host: DOCS_SERVER_HOST,
    port: DOCS_SERVER_PORT,
    title: DOCS_SERVER_TITLE,
    description: DOCS_SERVER_DESCRIPTION,
    favicon: DOCS_SERVER_FAVICON,
    baseServerUrl: DOCS_SERVER_BASE_URL,
  },
};

/**
 * Flat list of every service and SDK target pair, for iteration in scripts.
 * Each entry contains the service config and the specific SDK target config.
 */
export const allSdkTargets: {
  service: ServiceConfig;
  target: SdkTargetConfig;
}[] = config.services.flatMap((service) => [
  { service, target: service.sdk.typescriptClient },
  { service, target: service.sdk.typescriptServer },
  { service, target: service.sdk.goClient },
  { service, target: service.sdk.goServer },
  { service, target: service.sdk.javaClient },
  { service, target: service.sdk.javaServer },
]);

//</editor-fold>
