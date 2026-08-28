# Catalog Service API - Go Server Stubs

> Generated from `catalog/openapi.yaml` in [OctalMesh/ows-contracts](https://github.com/OctalMesh/ows-contracts).
> Do not edit by hand - this package is regenerated and republished on every release.

Version: `0.1.0`
Source branch: `sdk/svc-catalog/go-server`

## Install

```bash
go get github.com/octalmesh/ows-contracts@sdk/svc-catalog/go-server
```

## Usage

Implement the generated `catalogserver.*ApiServicer` interfaces and
wire them into the generated router:

```go
router := catalogserver.NewRouter(
    catalogserver.NewSomeApiController(yourServiceImpl),
)
```

