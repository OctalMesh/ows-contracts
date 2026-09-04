# {title} - TypeScript Client

> Generated from `specs/{service}/openapi.yaml` in [{github.owner}/{github.repo}](https://github.com/{github.owner}/{github.repo}).
> Do not edit by hand - this package is regenerated and republished on every release.

Version: `{version}`
Source branch: `{artifact.branch}`

## Install

```bash
npm config set @{vars.org}:registry https://npm.pkg.github.com
npm install {artifact.package}@{version}
```

(Internal GitHub Packages requires an authenticated `.npmrc` with a token
that has `read:packages`.)

## Usage

```ts
import { Configuration, DefaultApi } from "{artifact.package}";

const api = new DefaultApi(
  new Configuration({ basePath: "https://{vars.domain}/api" }),
);

const result = await api.someOperation();
```

## Support

Questions about the `{service}` contract go to `#{service}-api` on Slack, or
open an issue in [{github.owner}/{github.repo}](https://github.com/{github.owner}/{github.repo}/issues).
