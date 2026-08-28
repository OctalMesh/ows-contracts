import type {
  SdkTargetConfig,
  ServiceConfig,
} from "@root/contracts.config.mts";
import { config } from "@root/contracts.config.mts";

interface RenderArgs {
  service: ServiceConfig;
  target: SdkTargetConfig;
  version: string;
}

/**
 * Render a root-level 'README.md' file for a generated SDK package, based on
 * the configuration.
 *
 * @param service - The service config for the specific SDK.
 * @param target  - The SDK target config for the specific SDK.
 * @param version - The version of the SDK package.
 * @returns A string containing the rendered README content.
 */
export function renderReadme({ service, target, version }: RenderArgs): string {
  const header = `# ${service.title} - ${label(target)}

> Generated from \`${service.name}/openapi.yaml\` in [${config.github.owner}/${config.github.repo}](https://github.com/${config.github.owner}/${config.github.repo}).
> Do not edit by hand - this package is regenerated and republished on every release.

Version: \`${version}\`
Source branch: \`${target.branch}\`
`;

  return `${header}\n${body(service, target, version)}\n`;
}

//<editor-fold desc="README Template Helpers" defaultstate="collapsed">

/**
 * Generate a human-readable label for the SDK target, combining the language
 * and kind.
 *
 * @param target - The SDK target configuration.
 * @returns A string label for the SDK target.
 */
function label(target: SdkTargetConfig): string {
  const lang = { typescript: "TypeScript", go: "Go", java: "Java" }[
    target.lang
  ];
  const kind = target.kind === "client" ? "Client SDK" : "Server Stubs";

  return `${lang} ${kind}`;
}

/**
 * Generate the body content of the README based on the SDK target configuration.
 *
 * @param service - The service config for the specific SDK.
 * @param target  - The SDK target config for the specific SDK.
 * @param version - The version of the SDK package.
 * @returns A string containing the body content of the README.
 */
function body(
  service: ServiceConfig,
  target: SdkTargetConfig,
  version: string,
): string {
  switch (`${target.lang}-${target.kind}`) {
    case "typescript-client":
      return tsClient(target, version);
    case "go-client":
      return goClient(service, target);
    case "java-server":
      return javaServer(target, version);
    case "go-server":
      return goServer(service, target, version);
    default:
      return "";
  }
}

//</editor-fold>

//<editor-fold desc="README Body Templates" defaultstate="collapsed">

function tsClient(target: SdkTargetConfig, version: string): string {
  return `## Install

\`\`\`bash
npm config set @octalmesh:registry https://npm.pkg.github.com
npm install ${target.npmPackageName}@${version}
\`\`\`

(GitHub Packages requires an authenticated \`.npmrc\` with a token that has \`read:packages\`.)

## Usage

\`\`\`ts
import { Configuration, DefaultApi } from "${target.npmPackageName}";

const api = new DefaultApi(
  new Configuration({ basePath: "https://octalmesh.com/api" }),
);

const result = await api.someOperation();
\`\`\`
`;
}

function goClient(service: ServiceConfig, target: SdkTargetConfig): string {
  return `## Install

Go has no package registry, so this module is pulled directly from its
publishing branch:

\`\`\`bash
go get ${target.goModulePath}@sdk/svc-${service.name}/go-client
\`\`\`

To pin an exact release instead of the branch head, use the matching tag:

\`\`\`bash
go get ${target.goModulePath}@${target.tagPrefix}-v<version>
\`\`\`

## Usage

\`\`\`go
import (
    "context"

    ${target.goPackageName} "${target.goModulePath}"
)

func main() {
    cfg := ${target.goPackageName}.NewConfiguration()
    client := ${target.goPackageName}.NewAPIClient(cfg)

    resp, _, err := client.DefaultAPI.SomeOperation(context.Background()).Execute()
    _ = resp
    _ = err
}
\`\`\`
`;
}

function javaServer(target: SdkTargetConfig, version: string): string {
  return `## Install (Maven, GitHub Packages)

\`\`\`xml
<dependency>
  <groupId>${target.mavenGroupId}</groupId>
  <artifactId>${target.mavenArtifactId}</artifactId>
  <version>${version}</version>
</dependency>
\`\`\`

Add the repository to your \`settings.xml\` (or \`pom.xml\`) with a token that
has \`read:packages\`:

\`\`\`xml
<repository>
  <id>github</id>
  <url>https://maven.pkg.github.com/${target.mavenGroupId?.split(".")[0]}</url>
</repository>
\`\`\`

## Usage

This artifact only contains the generated Spring \`@RestController\` interfaces
(\`interfaceOnly=true\`) - implement them in your service:

\`\`\`java
@RestController
public class SomeController implements SomeApi {
    // interface methods generated from the OpenAPI contract
}
\`\`\`
`;
}

function goServer(
  service: ServiceConfig,
  target: SdkTargetConfig,
  _version: string,
): string {
  return `## Install

\`\`\`bash
go get ${target.goModulePath}@sdk/svc-${service.name}/go-server
\`\`\`

## Usage

Implement the generated \`${target.goPackageName}.*ApiServicer\` interfaces and
wire them into the generated router:

\`\`\`go
router := ${target.goPackageName}.NewRouter(
    ${target.goPackageName}.NewSomeApiController(yourServiceImpl),
)
\`\`\`
`;
}

//</editor-fold>
