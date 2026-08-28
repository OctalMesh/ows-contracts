package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.openapitools.model.Pagination;
import org.openapitools.model.Product;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * ProductPage
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-08-28T18:49:27.794066194Z[Etc/UTC]", comments = "Generator version: 7.25.0")
public class ProductPage {

  private List<@Valid Product> items = new ArrayList<>();

  private Pagination pagination;

  public ProductPage() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public ProductPage(List<@Valid Product> items, Pagination pagination) {
    this.items = items;
    this.pagination = pagination;
  }

  public ProductPage items(List<@Valid Product> items) {
    this.items = items;
    return this;
  }

  public ProductPage addItemsItem(Product itemsItem) {
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
  public List<@Valid Product> getItems() {
    return items;
  }

  @JsonProperty("items")
  public void setItems(List<@Valid Product> items) {
    this.items = items;
  }

  public ProductPage pagination(Pagination pagination) {
    this.pagination = pagination;
    return this;
  }

  /**
   * Get pagination
   * @return pagination
   */
  @NotNull @Valid 
  @Schema(name = "pagination", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("pagination")
  public Pagination getPagination() {
    return pagination;
  }

  @JsonProperty("pagination")
  public void setPagination(Pagination pagination) {
    this.pagination = pagination;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductPage productPage = (ProductPage) o;
    return Objects.equals(this.items, productPage.items) &&
        Objects.equals(this.pagination, productPage.pagination);
  }

  @Override
  public int hashCode() {
    return Objects.hash(items, pagination);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductPage {\n");
    sb.append("    items: ").append(toIndentedString(items)).append("\n");
    sb.append("    pagination: ").append(toIndentedString(pagination)).append("\n");
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

