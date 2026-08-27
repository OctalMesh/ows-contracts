import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname);

export interface TypeScriptClientConfig {
  packageName: string;
}

export interface GoClientConfig {
  packageName: string;
  modulePath: string;
  repository: string;
}

export interface JavaServerConfig {
  additionalProperties: string;
}

export interface GoServerConfig {
  packageName: string;
  modulePath: string;
  repository: string;
}

export interface ServiceConfig {
  name: string;
  title: string;
  entrypoint: string;

  clients: {
    typescript: {
      directory: string;
      packageName: string;
      additionalProperties: string;
    };
    go: {
      directory: string;
      packageName: string;
      modulePath: string;
      repository: string;
      additionalProperties: string;
    };
  };

  servers: {
    java: {
      directory: string;
      additionalProperties: string;
    };
    go: {
      directory: string;
      packageName: string;
      modulePath: string;
      repository: string;
      additionalProperties: string;
    };
  };
}

export interface ContractsConfig {
  rootDir: string;

  distDir: string;
  specsDir: string;
  docsDir: string;

  services: ServiceConfig[];
}

const services = [
  {
    name: "auth",
    title: "Auth Service API",
  },
  {
    name: "catalog",
    title: "Catalog Service API",
  },
  {
    name: "order",
    title: "Order Service API",
  },
  {
    name: "payment",
    title: "Payment Service API",
  },
  {
    name: "search",
    title: "Search Service API",
  },
] as const;

export const config: ContractsConfig = {
  rootDir: ROOT_DIR,

  distDir: path.join(ROOT_DIR, "dist"),
  specsDir: path.join(ROOT_DIR, "dist/specs"),
  docsDir: path.join(ROOT_DIR, "dist/docs"),

  services: services.map(({ name, title }) => ({
    name,
    title,

    entrypoint: path.join(ROOT_DIR, "specs", name, "openapi.yaml"),

    clients: {
      typescript: {
        directory: path.join(ROOT_DIR, "clients/ts", `${name}-client`),
        packageName: `@octalmesh/${name}-client`,
        additionalProperties: [
          `npmName=@octalmesh/${name}-client`,
          "supportsES6=true",
        ].join(","),
      },

      go: {
        directory: path.join(ROOT_DIR, "clients/go", `${name}client`),
        packageName: `${name}client`,
        modulePath: `github.com/octalmesh/contracts/clients/go/${name}client`,
        repository: `contracts/clients/go/${name}client`,
        additionalProperties: [
          `packageName=${name}client`,
          "gitUserId=octalmesh",
          `gitRepoId=contracts/clients/go/${name}client`,
        ].join(","),
      },
    },

    servers: {
      java: {
        directory: path.join(ROOT_DIR, "servers/java", `${name}-server`),
        additionalProperties: [
          "interfaceOnly=true",
          "skipDefaultInterface=true",
          "useSpringBoot3=true",
        ].join(","),
      },

      go: {
        directory: path.join(ROOT_DIR, "servers/go", `${name}-server`),
        packageName: `${name}server`,
        modulePath: `github.com/octalmesh/contracts/servers/go/${name}-server`,
        repository: `contracts/servers/go/${name}-server`,
        additionalProperties: [
          `packageName=${name}server`,
          "gitUserId=octalmesh",
          `gitRepoId=contracts/servers/go/${name}-server`,
        ].join(","),
      },
    },
  })),
};
