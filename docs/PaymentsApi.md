# PaymentsApi

All URIs are relative to */api/payment*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createPayment**](PaymentsApi.md#createpayment) | **POST** /payments | Create a payment for an order |



## createPayment

> Payment createPayment(idempotencyKey, paymentRequest)

Create a payment for an order

### Example

```ts
import {
  Configuration,
  PaymentsApi,
} from '@octalmesh/web-shop-payment-client';
import type { CreatePaymentRequest } from '@octalmesh/web-shop-payment-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-payment-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new PaymentsApi(config);

  const body = {
    // string
    idempotencyKey: idempotencyKey_example,
    // PaymentRequest
    paymentRequest: ...,
  } satisfies CreatePaymentRequest;

  try {
    const data = await api.createPayment(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **idempotencyKey** | `string` |  | [Defaults to `undefined`] |
| **paymentRequest** | [PaymentRequest](PaymentRequest.md) |  | |

### Return type

[**Payment**](Payment.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Payment created |  -  |
| **400** | Request validation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

