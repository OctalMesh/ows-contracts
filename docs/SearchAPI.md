# \SearchAPI

All URIs are relative to */api/search*

Method | HTTP request | Description
------------- | ------------- | -------------
[**SearchProducts**](SearchAPI.md#SearchProducts) | **Get** /products | Search products with filters and sorting



## SearchProducts

> SearchResult SearchProducts(ctx).Q(q).Page(page).Limit(limit).Category(category).Sort(sort).Execute()

Search products with filters and sorting

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
	q := "q_example" // string | 
	page := int32(56) // int32 |  (optional) (default to 1)
	limit := int32(56) // int32 |  (optional) (default to 20)
	category := "category_example" // string |  (optional)
	sort := "sort_example" // string |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.SearchAPI.SearchProducts(context.Background()).Q(q).Page(page).Limit(limit).Category(category).Sort(sort).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `SearchAPI.SearchProducts``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `SearchProducts`: SearchResult
	fmt.Fprintf(os.Stdout, "Response from `SearchAPI.SearchProducts`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSearchProductsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **string** |  | 
 **page** | **int32** |  | [default to 1]
 **limit** | **int32** |  | [default to 20]
 **category** | **string** |  | 
 **sort** | **string** |  | 

### Return type

[**SearchResult**](SearchResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

