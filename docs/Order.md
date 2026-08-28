
# Order


## Properties

Name | Type
------------ | -------------
`id` | string
`status` | string
`items` | [Array&lt;CartItem&gt;](CartItem.md)
`total` | [Money](Money.md)
`createdAt` | Date

## Example

```typescript
import type { Order } from '@octalmesh/web-shop-order-client'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "status": null,
  "items": null,
  "total": null,
  "createdAt": null,
} satisfies Order

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Order
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


