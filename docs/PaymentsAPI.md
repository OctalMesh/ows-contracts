# \PaymentsAPI

All URIs are relative to */api/payment*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CreatePayment**](PaymentsAPI.md#CreatePayment) | **Post** /payments | Create a payment for an order



## CreatePayment

> Payment CreatePayment(ctx).IdempotencyKey(idempotencyKey).PaymentRequest(paymentRequest).Execute()

Create a payment for an order

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
	idempotencyKey := "idempotencyKey_example" // string | 
	paymentRequest := *openapiclient.NewPaymentRequest("OrderId_example", *openapiclient.NewMoney(int64(123), "Currency_example"), "PaymentMethodToken_example") // PaymentRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.PaymentsAPI.CreatePayment(context.Background()).IdempotencyKey(idempotencyKey).PaymentRequest(paymentRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `PaymentsAPI.CreatePayment``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `CreatePayment`: Payment
	fmt.Fprintf(os.Stdout, "Response from `PaymentsAPI.CreatePayment`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCreatePaymentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idempotencyKey** | **string** |  | 
 **paymentRequest** | [**PaymentRequest**](PaymentRequest.md) |  | 

### Return type

[**Payment**](Payment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

