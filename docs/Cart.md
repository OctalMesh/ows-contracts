# Cart

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]CartItem**](CartItem.md) |  | 
**Subtotal** | [**Money**](Money.md) |  | 

## Methods

### NewCart

`func NewCart(items []CartItem, subtotal Money, ) *Cart`

NewCart instantiates a new Cart object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCartWithDefaults

`func NewCartWithDefaults() *Cart`

NewCartWithDefaults instantiates a new Cart object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *Cart) GetItems() []CartItem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Cart) GetItemsOk() (*[]CartItem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Cart) SetItems(v []CartItem)`

SetItems sets Items field to given value.


### GetSubtotal

`func (o *Cart) GetSubtotal() Money`

GetSubtotal returns the Subtotal field if non-nil, zero value otherwise.

### GetSubtotalOk

`func (o *Cart) GetSubtotalOk() (*Money, bool)`

GetSubtotalOk returns a tuple with the Subtotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtotal

`func (o *Cart) SetSubtotal(v Money)`

SetSubtotal sets Subtotal field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


