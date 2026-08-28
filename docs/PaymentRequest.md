
# PaymentRequest


## Properties

Name | Type
------------ | -------------
`orderId` | string
`amount` | [Money](Money.md)
`paymentMethodToken` | string

## Example

```typescript
import type { PaymentRequest } from '@octalmesh/web-shop-payment-client'

// TODO: Update the object below with actual values
const example = {
  "orderId": null,
  "amount": null,
  "paymentMethodToken": null,
} satisfies PaymentRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PaymentRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


