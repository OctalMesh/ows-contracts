
# Pagination


## Properties

Name | Type
------------ | -------------
`page` | number
`limit` | number
`total` | number

## Example

```typescript
import type { Pagination } from '@octalmesh/web-shop-order-client'

// TODO: Update the object below with actual values
const example = {
  "page": null,
  "limit": null,
  "total": null,
} satisfies Pagination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Pagination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


