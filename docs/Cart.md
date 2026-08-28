
# Cart


## Properties

Name | Type
------------ | -------------
`items` | [Array&lt;CartItem&gt;](CartItem.md)
`subtotal` | [Money](Money.md)

## Example

```typescript
import type { Cart } from '@octalmesh/web-shop-order-client'

// TODO: Update the object below with actual values
const example = {
  "items": null,
  "subtotal": null,
} satisfies Cart

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Cart
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


