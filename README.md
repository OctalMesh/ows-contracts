# Order Service API - Go Client SDK

> Generated from `order/openapi.yaml` in [OctalMesh/ows-contracts](https://github.com/OctalMesh/ows-contracts).
> Do not edit by hand - this package is regenerated and republished on every release.

Version: `0.1.0`
Source branch: `sdk/svc-order/go-client`

## Install

Go has no package registry, so this module is pulled directly from its
publishing branch:

```bash
go get github.com/octalmesh/ows-contracts@sdk/svc-order/go-client
```

To pin an exact release instead of the branch head, use the matching tag:

```bash
go get github.com/octalmesh/ows-contracts@svc-order-go-client-v<version>
```

## Usage

```go
import (
    "context"

    orderclient "github.com/octalmesh/ows-contracts"
)

func main() {
    cfg := orderclient.NewConfiguration()
    client := orderclient.NewAPIClient(cfg)

    resp, _, err := client.DefaultAPI.SomeOperation(context.Background()).Execute()
    _ = resp
    _ = err
}
```

