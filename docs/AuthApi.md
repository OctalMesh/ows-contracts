# AuthApi

All URIs are relative to */api/auth*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getCurrentUser**](AuthApi.md#getcurrentuser) | **GET** /me | Get the authenticated user profile |
| [**login**](AuthApi.md#loginoperation) | **POST** /login | Authenticate user and issue tokens |
| [**registerUser**](AuthApi.md#registeruser) | **POST** /register | Register a new user |



## getCurrentUser

> User getCurrentUser()

Get the authenticated user profile

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@octalmesh/web-shop-auth-client';
import type { GetCurrentUserRequest } from '@octalmesh/web-shop-auth-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-auth-client SDK...");
  const config = new Configuration({ 
    // Configure HTTP bearer authorization: BearerAuth
    accessToken: "YOUR BEARER TOKEN",
  });
  const api = new AuthApi(config);

  try {
    const data = await api.getCurrentUser();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

[BearerAuth](../README.md#BearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current user |  -  |
| **401** | Missing or invalid credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## login

> Token login(loginRequest)

Authenticate user and issue tokens

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@octalmesh/web-shop-auth-client';
import type { LoginOperationRequest } from '@octalmesh/web-shop-auth-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-auth-client SDK...");
  const api = new AuthApi();

  const body = {
    // LoginRequest
    loginRequest: ...,
  } satisfies LoginOperationRequest;

  try {
    const data = await api.login(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **loginRequest** | [LoginRequest](LoginRequest.md) |  | |

### Return type

[**Token**](Token.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Successful authentication |  -  |
| **401** | Missing or invalid credentials |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## registerUser

> User registerUser(registerRequest)

Register a new user

### Example

```ts
import {
  Configuration,
  AuthApi,
} from '@octalmesh/web-shop-auth-client';
import type { RegisterUserRequest } from '@octalmesh/web-shop-auth-client';

async function example() {
  console.log("🚀 Testing @octalmesh/web-shop-auth-client SDK...");
  const api = new AuthApi();

  const body = {
    // RegisterRequest
    registerRequest: ...,
  } satisfies RegisterUserRequest;

  try {
    const data = await api.registerUser(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **registerRequest** | [RegisterRequest](RegisterRequest.md) |  | |

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | User registered |  -  |
| **409** | Resource conflict |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

