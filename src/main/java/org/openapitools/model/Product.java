package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.UUID;
import org.openapitools.model.Money;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * Product
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-08-28T18:49:27.794066194Z[Etc/UTC]", comments = "Generator version: 7.25.0")
public class Product {

  private UUID id;

  private String name;

  private @Nullable String description;

  private Money price;

  /**
   * Gets or Sets inventoryStatus
   */
  public enum InventoryStatusEnum {
    IN_STOCK("in_stock"),
    
    LOW_STOCK("low_stock"),
    
    OUT_OF_STOCK("out_of_stock");

    private final String value;

    InventoryStatusEnum(String value) {
      this.value = value;
    }

    @JsonValue
    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    @JsonCreator
    public static InventoryStatusEnum fromValue(String value) {
      for (InventoryStatusEnum b : InventoryStatusEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  private InventoryStatusEnum inventoryStatus;

  public Product() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public Product(UUID id, String name, Money price, InventoryStatusEnum inventoryStatus) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.inventoryStatus = inventoryStatus;
  }

  public Product id(UUID id) {
    this.id = id;
    return this;
  }

  /**
   * Get id
   * @return id
   */
  @NotNull @Valid 
  @Schema(name = "id", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("id")
  public UUID getId() {
    return id;
  }

  @JsonProperty("id")
  public void setId(UUID id) {
    this.id = id;
  }

  public Product name(String name) {
    this.name = name;
    return this;
  }

  /**
   * Get name
   * @return name
   */
  @NotNull 
  @Schema(name = "name", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("name")
  public String getName() {
    return name;
  }

  @JsonProperty("name")
  public void setName(String name) {
    this.name = name;
  }

  public Product description(@Nullable String description) {
    this.description = description;
    return this;
  }

  /**
   * Get description
   * @return description
   */
  
  @Schema(name = "description", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("description")
  public @Nullable String getDescription() {
    return description;
  }

  @JsonProperty("description")
  public void setDescription(@Nullable String description) {
    this.description = description;
  }

  public Product price(Money price) {
    this.price = price;
    return this;
  }

  /**
   * Get price
   * @return price
   */
  @NotNull @Valid 
  @Schema(name = "price", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("price")
  public Money getPrice() {
    return price;
  }

  @JsonProperty("price")
  public void setPrice(Money price) {
    this.price = price;
  }

  public Product inventoryStatus(InventoryStatusEnum inventoryStatus) {
    this.inventoryStatus = inventoryStatus;
    return this;
  }

  /**
   * Get inventoryStatus
   * @return inventoryStatus
   */
  @NotNull 
  @Schema(name = "inventoryStatus", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("inventoryStatus")
  public InventoryStatusEnum getInventoryStatus() {
    return inventoryStatus;
  }

  @JsonProperty("inventoryStatus")
  public void setInventoryStatus(InventoryStatusEnum inventoryStatus) {
    this.inventoryStatus = inventoryStatus;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Product product = (Product) o;
    return Objects.equals(this.id, product.id) &&
        Objects.equals(this.name, product.name) &&
        Objects.equals(this.description, product.description) &&
        Objects.equals(this.price, product.price) &&
        Objects.equals(this.inventoryStatus, product.inventoryStatus);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, name, description, price, inventoryStatus);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Product {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    price: ").append(toIndentedString(price)).append("\n");
    sb.append("    inventoryStatus: ").append(toIndentedString(inventoryStatus)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(@Nullable Object o) {
    return o == null ? "null" : o.toString().replace("\n", "\n    ");
  }
}

