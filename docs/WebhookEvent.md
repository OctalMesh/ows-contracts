
# WebhookEvent


## Properties

Name | Type
------------ | -------------
`eventId` | string
`type` | string
`paymentId` | string

## Example

```typescript
import type { WebhookEvent } from '@octalmesh/web-shop-payment-client'

// TODO: Update the object below with actual values
const example = {
  "eventId": null,
  "type": null,
  "paymentId": null,
} satisfies WebhookEvent

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as WebhookEvent
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


