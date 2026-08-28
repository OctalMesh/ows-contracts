# OrdersApi

All URIs are relative to */api/order*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**checkoutCart**](OrdersApi.md#checkoutcart) | **POST** /cart | Convert the current cart into an order |
| [**getCart**](OrdersApi.md#getcart) | **GET** /cart | Get the current shopping cart |
| [**listOrders**](OrdersApi.md#listorders) | **GET** /orders | List orders for the current user |



## checkoutCart

> Order checkoutCart(idempotencyKey)

Convert the current cart into an order

### Example

```ts
import {
  Configuration,
  OrdersApi,
} from '@octalmesh/web-shop-order-client';
import type { CheckoutCartRequest } from '@octalmesh/web-shop-order-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-order-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrdersApi(config);

  const body = {
    // string
    idempotencyKey: idempotencyKey_example,
  } satisfies CheckoutCartRequest;

  try {
    const data = await api.checkoutCart(body);
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

### Return type

[**Order**](Order.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Created order |  -  |
| **409** | Resource conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getCart

> Cart getCart()

Get the current shopping cart

### Example

```ts
import {
  Configuration,
  OrdersApi,
} from '@octalmesh/web-shop-order-client';
import type { GetCartRequest } from '@octalmesh/web-shop-order-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-order-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrdersApi(config);

  try {
    const data = await api.getCart();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Cart**](Cart.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current cart |  -  |
| **401** | Missing or invalid credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## listOrders

> OrderPage listOrders(page, limit)

List orders for the current user

### Example

```ts
import {
  Configuration,
  OrdersApi,
} from '@octalmesh/web-shop-order-client';
import type { ListOrdersRequest } from '@octalmesh/web-shop-order-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-order-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new OrdersApi(config);

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
  } satisfies ListOrdersRequest;

  try {
    const data = await api.listOrders(body);
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
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |

### Return type

[**OrderPage**](OrderPage.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Order page |  -  |
| **401** | Missing or invalid credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

