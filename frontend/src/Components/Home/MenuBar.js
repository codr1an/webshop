import React, { useState, useEffect } from "react";
import logo from "../Assets/test.png";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import CategoryBar from "./CategoryBar";
import "./MenuBar.css";
import { useNavigate } from "react-router-dom";
import { fetchCartItemCount } from "../ShoppingCart/CartUtils";

const MenuBar = () => {
  const navigate = useNavigate();
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    const getCartItemCount = async () => {
      const itemCount = await fetchCartItemCount();
      setCartItemCount(itemCount);
    };
    getCartItemCount();
  }, []);

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
