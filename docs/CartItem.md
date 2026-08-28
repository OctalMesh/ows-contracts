
# CartItem


## Properties

Name | Type
------------ | -------------
`productId` | string
`quantity` | number
`unitPrice` | [Money](Money.md)

## Example

```typescript
import type { CartItem } from '@octalmesh/web-shop-order-client'

// TODO: Update the object below with actual values
const example = {
  "productId": null,
  "quantity": null,
  "unitPrice": null,
} satisfies CartItem

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CartItem
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


