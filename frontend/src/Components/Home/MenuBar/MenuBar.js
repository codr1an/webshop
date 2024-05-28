import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { message } from "react-message-popup";
import "./MenuBar.css";

const MenuBar = () => {
  const navigate = useNavigate();
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleUserMenu = () => {
    setUserMenuOpen(!isUserMenuOpen);
  };

  const handleUserOption = (option) => {
    if (option === "profile") {
      navigate("/profile");
    } else if (option === "login") {
      navigate("/login");
    } else if (option === "register") {
      navigate("/register");
    } else if (option === "logout") {
      message.success("You have been logged out", 1500);
      localStorage.removeItem("token");
      setToken(null);
      navigate("/home");
    }
    setUserMenuOpen(false);
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <header>
      <div className="menu-container">
        <div className="menu-bar">
          <div class="logo-container">
            <a href="/home" class="logo-link">
              <img src={logo} alt="Logo" class="logo-img" />
            </a>
            <a href="/home" class="logo-text-link">
              <h2 class="logo-text">LA-Shop</h2>
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="menu-buttons-container">
            <button className="menu-buttons" onClick={handleUserMenu}>
              <FaUser />
            </button>
            {isUserMenuOpen && (
              <div className="dropdown-menu">
                {token !== null ? (
                  <>
                    <button onClick={() => handleUserOption("profile")}>
                      Profile
                    </button>
                    <button onClick={() => handleUserOption("logout")}>
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleUserOption("login")}>
                      Login
                    </button>
                    <button onClick={() => handleUserOption("register")}>
                      Register
                    </button>
                  </>
                )}
              </div>
            )}
            <button className="menu-buttons" onClick={handleCart}>
              <FaShoppingCart />
            </button>
          </div>
          <div className="categories-bar">
            <a href="/phones" className="category">
              Phones
            </a>
            <a href="/tablets" className="category">
              Tablets
            </a>
            <a href="/laptops" className="category">
              Laptops
            </a>
            <a href="/tvs" className="category">
              TVs
            </a>
            <a href="/monitors" className="category">
              Monitors
            </a>
          </div>{" "}
        </div>
      </div>
    </header>
  );
};

export default MenuBar;
