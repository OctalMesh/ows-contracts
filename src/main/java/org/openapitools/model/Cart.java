package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.openapitools.model.CartItem;
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
 * Cart
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-08-28T18:49:37.862663304Z[Etc/UTC]", comments = "Generator version: 7.25.0")
public class Cart {

  private List<@Valid CartItem> items = new ArrayList<>();

  private Money subtotal;

  public Cart() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public Cart(List<@Valid CartItem> items, Money subtotal) {
    this.items = items;
    this.subtotal = subtotal;
  }

  public Cart items(List<@Valid CartItem> items) {
    this.items = items;
    return this;
  }

  public Cart addItemsItem(CartItem itemsItem) {
    if (this.items == null) {
      this.items = new ArrayList<>();
    }
    this.items.add(itemsItem);
    return this;
  }

  /**
   * Get items
   * @return items
   */
  @NotNull @Valid 
  @Schema(name = "items", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("items")
  public List<@Valid CartItem> getItems() {
    return items;
  }

  @JsonProperty("items")
  public void setItems(List<@Valid CartItem> items) {
    this.items = items;
  }

  public Cart subtotal(Money subtotal) {
    this.subtotal = subtotal;
    return this;
  }

  /**
   * Get subtotal
   * @return subtotal
   */
  @NotNull @Valid 
  @Schema(name = "subtotal", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("subtotal")
  public Money getSubtotal() {
    return subtotal;
  }

  @JsonProperty("subtotal")
  public void setSubtotal(Money subtotal) {
    this.subtotal = subtotal;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Cart cart = (Cart) o;
    return Objects.equals(this.items, cart.items) &&
        Objects.equals(this.subtotal, cart.subtotal);
  }

  @Override
  public int hashCode() {
    return Objects.hash(items, subtotal);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Cart {\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("    subtotal: ").append(toIndentedString(subtotal)).append("\n");
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

