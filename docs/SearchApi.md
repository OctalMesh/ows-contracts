# SearchApi

All URIs are relative to */api/search*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**searchProducts**](SearchApi.md#searchproducts) | **GET** /products | Search products with filters and sorting |



## searchProducts

> SearchResult searchProducts(q, page, limit, category, sort)

Search products with filters and sorting

### Example

```ts
import {
  Configuration,
  SearchApi,
} from '@octalmesh/web-shop-search-client';
import type { SearchProductsRequest } from '@octalmesh/web-shop-search-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-search-client SDK...");
  const api = new SearchApi();

  const body = {
    // string
    q: q_example,
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
    // string (optional)
    category: category_example,
    // 'relevance' | 'price_asc' | 'price_desc' | 'newest' (optional)
    sort: sort_example,
  } satisfies SearchProductsRequest;

  try {
    const data = await api.searchProducts(body);
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
| **q** | `string` |  | [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `1`] |
| **limit** | `number` |  | [Optional] [Defaults to `20`] |
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
| **sort** | `relevance`, `price_asc`, `price_desc`, `newest` |  | [Optional] [Defaults to `undefined`] [Enum: relevance, price_asc, price_desc, newest] |

### Return type

[**SearchResult**](SearchResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results |  -  |
| **400** | Request validation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

