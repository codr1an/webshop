import React, { useState, useEffect } from "react";
import logo from "../Assets/test.png";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import CategoryBar from "./CategoryBar";
import "./MenuBar.css";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    fetchCartItemCount();
  }, []);

  const fetchCartItemCount = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const response = await fetch("http://localhost:8080/api/cart", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch cart");

      const data = await response.json();
      const itemCount = data.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartItemCount(itemCount);
    } catch (error) {
      console.error("Error fetching cart items:", error);
    }
  };

  const handleUserMenu = () => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/profile");
    } else {
      navigate("/login");
    }
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <header>
      <div className="menu-container">
        <div className="menu-bar">
          <div className="logo">
            <a href="/home">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="menu-buttons-container">
            <button className="menu-buttons" onClick={handleUserMenu}>
              <FaUser />
            </button>
            <button className="menu-buttons" onClick={handleCart}>
              <FaShoppingCart />
              {cartItemCount > 0 && (
                <span className="cart-item-count">{cartItemCount}</span>
              )}
            </button>
          </div>
        </div>
        <CategoryBar />
      </div>
    </header>
  );
};

export default MenuBar;
