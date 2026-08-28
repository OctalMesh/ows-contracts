# Auth Service API - TypeScript Client SDK

> Generated from `auth/openapi.yaml` in [OctalMesh/ows-contracts](https://github.com/OctalMesh/ows-contracts).
> Do not edit by hand - this package is regenerated and republished on every release.

Version: `0.1.0`
Source branch: `sdk/svc-auth/typescript-client`

## Install

```bash
npm config set @octalmesh:registry https://npm.pkg.github.com
npm install @octalmesh/web-shop-auth-client@0.1.0
```

(GitHub Packages requires an authenticated `.npmrc` with a token that has `read:packages`.)

## Usage

```ts
import { Configuration, DefaultApi } from "@octalmesh/web-shop-auth-client";

const api = new DefaultApi(
  new Configuration({ basePath: "https://octalmesh.com/api" }),
);

const result = await api.someOperation();
```

