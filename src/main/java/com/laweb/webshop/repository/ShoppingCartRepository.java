package com.laweb.webshop.repository;

import com.laweb.webshop.model.ShoppingCart;
import com.laweb.webshop.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShoppingCartRepository extends JpaRepository<ShoppingCart, Long> {
    Optional<ShoppingCart> findByUser(User user);
}
