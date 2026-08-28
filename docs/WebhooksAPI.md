# \WebhooksAPI

All URIs are relative to */api/payment*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ReceivePaymentWebhook**](WebhooksAPI.md#ReceivePaymentWebhook) | **Post** /webhooks/provider | Receive a payment provider callback



## ReceivePaymentWebhook

> ReceivePaymentWebhook(ctx).WebhookEvent(webhookEvent).Execute()

Receive a payment provider callback

### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	webhookEvent := *openapiclient.NewWebhookEvent("EventId_example", "Type_example", "PaymentId_example") // WebhookEvent | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.WebhooksAPI.ReceivePaymentWebhook(context.Background()).WebhookEvent(webhookEvent).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `WebhooksAPI.ReceivePaymentWebhook``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiReceivePaymentWebhookRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **webhookEvent** | [**WebhookEvent**](WebhookEvent.md) |  | 

### Return type

 (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

