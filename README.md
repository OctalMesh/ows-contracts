# Search Service API - Go Server Stubs

> Generated from `search/openapi.yaml` in [OctalMesh/ows-contracts](https://github.com/OctalMesh/ows-contracts).
> Do not edit by hand - this package is regenerated and republished on every release.

Version: `0.1.0`
Source branch: `sdk/svc-search/go-server`

## Install

```bash
go get github.com/octalmesh/ows-contracts@sdk/svc-search/go-server
```

## Usage

Implement the generated `searchserver.*ApiServicer` interfaces and
wire them into the generated router:

```go
router := searchserver.NewRouter(
    searchserver.NewSomeApiController(yourServiceImpl),
)
```

