# PaymentRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OrderId** | **string** |  | 
**Amount** | [**Money**](Money.md) |  | 
**PaymentMethodToken** | **string** |  | 

## Methods

### NewPaymentRequest

`func NewPaymentRequest(orderId string, amount Money, paymentMethodToken string, ) *PaymentRequest`

NewPaymentRequest instantiates a new PaymentRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPaymentRequestWithDefaults

`func NewPaymentRequestWithDefaults() *PaymentRequest`

NewPaymentRequestWithDefaults instantiates a new PaymentRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOrderId

`func (o *PaymentRequest) GetOrderId() string`

GetOrderId returns the OrderId field if non-nil, zero value otherwise.

### GetOrderIdOk

`func (o *PaymentRequest) GetOrderIdOk() (*string, bool)`

GetOrderIdOk returns a tuple with the OrderId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderId

`func (o *PaymentRequest) SetOrderId(v string)`

SetOrderId sets OrderId field to given value.


### GetAmount

`func (o *PaymentRequest) GetAmount() Money`

GetAmount returns the Amount field if non-nil, zero value otherwise.

### GetAmountOk

`func (o *PaymentRequest) GetAmountOk() (*Money, bool)`

GetAmountOk returns a tuple with the Amount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmount

`func (o *PaymentRequest) SetAmount(v Money)`

SetAmount sets Amount field to given value.


### GetPaymentMethodToken

`func (o *PaymentRequest) GetPaymentMethodToken() string`

GetPaymentMethodToken returns the PaymentMethodToken field if non-nil, zero value otherwise.

### GetPaymentMethodTokenOk

`func (o *PaymentRequest) GetPaymentMethodTokenOk() (*string, bool)`

GetPaymentMethodTokenOk returns a tuple with the PaymentMethodToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPaymentMethodToken

`func (o *PaymentRequest) SetPaymentMethodToken(v string)`

SetPaymentMethodToken sets PaymentMethodToken field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


