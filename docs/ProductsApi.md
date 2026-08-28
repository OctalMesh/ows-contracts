# ProductsApi

All URIs are relative to */api/catalog*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**listProducts**](ProductsApi.md#listproducts) | **GET** /products | List products |



## listProducts

> ProductPage listProducts(page, limit)

List products

### Example

```ts
import {
  Configuration,
  ProductsApi,
} from '@octalmesh/web-shop-catalog-client';
import type { ListProductsRequest } from '@octalmesh/web-shop-catalog-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-catalog-client SDK...");
  const api = new ProductsApi();

  const body = {
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
  } satisfies ListProductsRequest;

  try {
    const data = await api.listProducts(body);
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

[**ProductPage**](ProductPage.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Product page |  -  |
| **400** | Request validation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

