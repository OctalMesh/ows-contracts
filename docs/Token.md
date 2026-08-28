
# Token


## Properties

Name | Type
------------ | -------------
`accessToken` | string
`tokenType` | string
`expiresIn` | number

## Example

```typescript
import type { Token } from '@octalmesh/web-shop-auth-client'

// TODO: Update the object below with actual values
const example = {
  "accessToken": null,
  "tokenType": null,
  "expiresIn": null,
} satisfies Token

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Token
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


