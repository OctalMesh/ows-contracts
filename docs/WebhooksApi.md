# WebhooksApi

All URIs are relative to */api/payment*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**receivePaymentWebhook**](WebhooksApi.md#receivepaymentwebhook) | **POST** /webhooks/provider | Receive a payment provider callback |



## receivePaymentWebhook

> receivePaymentWebhook(webhookEvent)

Receive a payment provider callback

### Example

```ts
import {
  Configuration,
  WebhooksApi,
} from '@octalmesh/web-shop-payment-client';
import type { ReceivePaymentWebhookRequest } from '@octalmesh/web-shop-payment-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-payment-client SDK...");
  const api = new WebhooksApi();

  const body = {
    // WebhookEvent
    webhookEvent: ...,
  } satisfies ReceivePaymentWebhookRequest;

  try {
    const data = await api.receivePaymentWebhook(body);
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
| **webhookEvent** | [WebhookEvent](WebhookEvent.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **204** | Webhook accepted |  -  |
| **400** | Request validation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

