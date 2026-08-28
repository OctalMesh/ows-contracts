package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * Token
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-08-28T18:49:17.749917078Z[Etc/UTC]", comments = "Generator version: 7.25.0")
public class Token {

  private String accessToken;

  /**
   * Gets or Sets tokenType
   */
  public enum TokenTypeEnum {
    BEARER("Bearer");

    private final String value;

    TokenTypeEnum(String value) {
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
    public static TokenTypeEnum fromValue(String value) {
      for (TokenTypeEnum b : TokenTypeEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }
  }

  private TokenTypeEnum tokenType;

  private Integer expiresIn;

  public Token() {
    super();
  }

  /**
   * Constructor with only required parameters
   */
  public Token(String accessToken, TokenTypeEnum tokenType, Integer expiresIn) {
    this.accessToken = accessToken;
    this.tokenType = tokenType;
    this.expiresIn = expiresIn;
  }

  public Token accessToken(String accessToken) {
    this.accessToken = accessToken;
    return this;
  }

  /**
   * Get accessToken
   * @return accessToken
   */
  @NotNull 
  @Schema(name = "accessToken", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("accessToken")
  public String getAccessToken() {
    return accessToken;
  }

  @JsonProperty("accessToken")
  public void setAccessToken(String accessToken) {
    this.accessToken = accessToken;
  }

  public Token tokenType(TokenTypeEnum tokenType) {
    this.tokenType = tokenType;
    return this;
  }

  /**
   * Get tokenType
   * @return tokenType
   */
  @NotNull 
  @Schema(name = "tokenType", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("tokenType")
  public TokenTypeEnum getTokenType() {
    return tokenType;
  }

  @JsonProperty("tokenType")
  public void setTokenType(TokenTypeEnum tokenType) {
    this.tokenType = tokenType;
  }

  public Token expiresIn(Integer expiresIn) {
    this.expiresIn = expiresIn;
    return this;
  }

  /**
   * Get expiresIn
   * minimum: 1
   * @return expiresIn
   */
  @NotNull @Min(value = 1) 
  @Schema(name = "expiresIn", requiredMode = Schema.RequiredMode.REQUIRED)
  @JsonProperty("expiresIn")
  public Integer getExpiresIn() {
    return expiresIn;
  }

  @JsonProperty("expiresIn")
  public void setExpiresIn(Integer expiresIn) {
    this.expiresIn = expiresIn;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Token token = (Token) o;
    return Objects.equals(this.accessToken, token.accessToken) &&
        Objects.equals(this.tokenType, token.tokenType) &&
        Objects.equals(this.expiresIn, token.expiresIn);
  }

  @Override
  public int hashCode() {
    return Objects.hash(accessToken, tokenType, expiresIn);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Token {\n");
    sb.append("    accessToken: ").append(toIndentedString(accessToken)).append("\n");
    sb.append("    tokenType: ").append(toIndentedString(tokenType)).append("\n");
    sb.append("    expiresIn: ").append(toIndentedString(expiresIn)).append("\n");
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

