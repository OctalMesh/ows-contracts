package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import java.util.UUID;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * WebhookEvent
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-08-28T18:49:47.803481906Z[Etc/UTC]", comments = "Generator version: 7.25.0")
public class WebhookEvent {

  private String eventId;

  /**
   * Gets or Sets type
   */
  public enum TypeEnum {
    PAYMENT_AUTHORIZED("payment.authorized"),
    
    PAYMENT_CAPTURED("payment.captured"),
    
    PAYMENT_FAILED("payment.failed");

    private final String value;

    TypeEnum(String value) {
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
    public static TypeEnum fromValue(String value) {
      for (TypeEnum b : TypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  private TypeEnum type;

  private UUID paymentId;

  public WebhookEvent() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public WebhookEvent(String eventId, TypeEnum type, UUID paymentId) {
    this.eventId = eventId;
    this.type = type;
    this.paymentId = paymentId;
  }

  public WebhookEvent eventId(String eventId) {
    this.eventId = eventId;
    return this;
  }

  /**
   * Get eventId
   * @return eventId
   */
  @NotNull 
  @Schema(name = "eventId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("eventId")
  public String getEventId() {
    return eventId;
  }

  @JsonProperty("eventId")
  public void setEventId(String eventId) {
    this.eventId = eventId;
  }

  public WebhookEvent type(TypeEnum type) {
    this.type = type;
    return this;
  }

  /**
   * Get type
   * @return type
   */
  @NotNull 
  @Schema(name = "type", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("type")
  public TypeEnum getType() {
    return type;
  }

  @JsonProperty("type")
  public void setType(TypeEnum type) {
    this.type = type;
  }

  public WebhookEvent paymentId(UUID paymentId) {
    this.paymentId = paymentId;
    return this;
  }

  /**
   * Get paymentId
   * @return paymentId
   */
  @NotNull @Valid 
  @Schema(name = "paymentId", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("paymentId")
  public UUID getPaymentId() {
    return paymentId;
  }

  @JsonProperty("paymentId")
  public void setPaymentId(UUID paymentId) {
    this.paymentId = paymentId;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    WebhookEvent webhookEvent = (WebhookEvent) o;
    return Objects.equals(this.eventId, webhookEvent.eventId) &&
        Objects.equals(this.type, webhookEvent.type) &&
        Objects.equals(this.paymentId, webhookEvent.paymentId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(eventId, type, paymentId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class WebhookEvent {\n");
    sb.append("    eventId: ").append(toIndentedString(eventId)).append("\n");
    sb.append("    type: ").append(toIndentedString(type)).append("\n");
    sb.append("    paymentId: ").append(toIndentedString(paymentId)).append("\n");
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

