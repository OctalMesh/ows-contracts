# ProductPage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Product**](Product.md) |  | 
**Pagination** | [**Pagination**](Pagination.md) |  | 

## Methods

### NewProductPage

`func NewProductPage(items []Product, pagination Pagination, ) *ProductPage`

NewProductPage instantiates a new ProductPage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProductPageWithDefaults

`func NewProductPageWithDefaults() *ProductPage`

NewProductPageWithDefaults instantiates a new ProductPage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *ProductPage) GetItems() []Product`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *ProductPage) GetItemsOk() (*[]Product, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *ProductPage) SetItems(v []Product)`

SetItems sets Items field to given value.


### GetPagination

`func (o *ProductPage) GetPagination() Pagination`

GetPagination returns the Pagination field if non-nil, zero value otherwise.

### GetPaginationOk

`func (o *ProductPage) GetPaginationOk() (*Pagination, bool)`

GetPaginationOk returns a tuple with the Pagination field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPagination

`func (o *ProductPage) SetPagination(v Pagination)`

SetPagination sets Pagination field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


