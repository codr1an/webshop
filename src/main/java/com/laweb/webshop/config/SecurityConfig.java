package com.laweb.webshop.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.intercept.AuthorizationFilter;

@Configuration
public class SecurityConfig {

  private JWTRequestFilter jwtRequestFilter;

  public SecurityConfig(JWTRequestFilter jwtRequestFilter) {
    this.jwtRequestFilter = jwtRequestFilter;
  }

  /**
   * Filter chain to configure security.
   * @param http The security object.
   * @return The chain built.
   * @throws Exception Thrown on error configuring.
   */
  @Bean
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    // TODO: remove in production
    http.csrf().disable().cors().disable();
    // We need to make sure our authentication filter is run before the http request filter is run.
    http.addFilterBefore(jwtRequestFilter, AuthorizationFilter.class);
    http.authorizeHttpRequests()
        // Specific exclusions or rules.
        .requestMatchers("/api/products", "/api/products/{id}", "/api/products/type/{type}","/api/users/register", "/api/users/login", "/swagger-ui" ,"/swagger-ui/**", "/v3/api-docs/**", "/v3/api-docs").permitAll()
        // Everything else should be authenticated.
        .anyRequest().authenticated();
    return http.build();
  }
}
