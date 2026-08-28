# Order Service API - Java Server Stubs

> Generated from `order/openapi.yaml` in [OctalMesh/ows-contracts](https://github.com/OctalMesh/ows-contracts).
> Do not edit by hand - this package is regenerated and republished on every release.

Version: `0.1.0`
Source branch: `sdk/svc-order/java-server`

## Install (Maven, GitHub Packages)

```xml
<dependency>
  <groupId>com.octalmesh.web.shop.order</groupId>
  <artifactId>order-server</artifactId>
  <version>0.1.0</version>
</dependency>
```

Add the repository to your `settings.xml` (or `pom.xml`) with a token that
has `read:packages`:

```xml
<repository>
  <id>github</id>
  <url>https://maven.pkg.github.com/com</url>
</repository>
```

## Usage

This artifact only contains the generated Spring `@RestController` interfaces
(`interfaceOnly=true`) - implement them in your service:

```java
@RestController
public class SomeController implements SomeApi {
    // interface methods generated from the OpenAPI contract
}
```

