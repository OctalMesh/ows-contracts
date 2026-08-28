package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
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
 * PaymentRequest
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-08-28T18:49:47.803481906Z[Etc/UTC]", comments = "Generator version: 7.25.0")
public class PaymentRequest {

  private UUID orderId;

  private Money amount;

  private String paymentMethodToken;

  public PaymentRequest() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public PaymentRequest(UUID orderId, Money amount, String paymentMethodToken) {
    this.orderId = orderId;
    this.amount = amount;
    this.paymentMethodToken = paymentMethodToken;
  }

  public PaymentRequest orderId(UUID orderId) {
    this.orderId = orderId;
    return this;
  }

  /**
   * Get orderId
   * @return orderId
   */
  @NotNull @Valid 
  @Schema(name = "orderId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("orderId")
  public UUID getOrderId() {
    return orderId;
  }

  @JsonProperty("orderId")
  public void setOrderId(UUID orderId) {
    this.orderId = orderId;
  }

  public PaymentRequest amount(Money amount) {
    this.amount = amount;
    return this;
  }

  /**
   * Get amount
   * @return amount
   */
  @NotNull @Valid 
  @Schema(name = "amount", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("amount")
  public Money getAmount() {
    return amount;
  }

  @JsonProperty("amount")
  public void setAmount(Money amount) {
    this.amount = amount;
  }

  public PaymentRequest paymentMethodToken(String paymentMethodToken) {
    this.paymentMethodToken = paymentMethodToken;
    return this;
  }

  /**
   * Get paymentMethodToken
   * @return paymentMethodToken
   */
  @NotNull 
  @Schema(name = "paymentMethodToken", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("paymentMethodToken")
  public String getPaymentMethodToken() {
    return paymentMethodToken;
  }

  @JsonProperty("paymentMethodToken")
  public void setPaymentMethodToken(String paymentMethodToken) {
    this.paymentMethodToken = paymentMethodToken;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PaymentRequest paymentRequest = (PaymentRequest) o;
    return Objects.equals(this.orderId, paymentRequest.orderId) &&
        Objects.equals(this.amount, paymentRequest.amount) &&
        Objects.equals(this.paymentMethodToken, paymentRequest.paymentMethodToken);
  }

  @Override
  public int hashCode() {
    return Objects.hash(orderId, amount, paymentMethodToken);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PaymentRequest {\n");
    sb.append("    orderId: ").append(toIndentedString(orderId)).append("\n");
    sb.append("    amount: ").append(toIndentedString(amount)).append("\n");
    sb.append("    paymentMethodToken: ").append(toIndentedString(paymentMethodToken)).append("\n");
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

