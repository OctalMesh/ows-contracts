# Payment Service API - Go Client SDK

> Generated from `payment/openapi.yaml` in [OctalMesh/ows-contracts](https://github.com/OctalMesh/ows-contracts).
> Do not edit by hand - this package is regenerated and republished on every release.

Version: `0.1.0`
Source branch: `sdk/svc-payment/go-client`

## Install

Go has no package registry, so this module is pulled directly from its
publishing branch:

```bash
go get github.com/octalmesh/ows-contracts@sdk/svc-payment/go-client
```

To pin an exact release instead of the branch head, use the matching tag:

```bash
go get github.com/octalmesh/ows-contracts@svc-payment-go-client-v<version>
```

## Usage

```go
import (
    "context"

    paymentclient "github.com/octalmesh/ows-contracts"
)

func main() {
    cfg := paymentclient.NewConfiguration()
    client := paymentclient.NewAPIClient(cfg)

    resp, _, err := client.DefaultAPI.SomeOperation(context.Background()).Execute()
    _ = resp
    _ = err
}
```

