import logo from "../Assets/test.png";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import CategoryBar from "./CategoryBar";
import "./MenuBar.css";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  const handleUserMenu = () => {
    navigate("/login");
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
            <button className="menu-buttons">
              <FaShoppingCart />
            </button>
          </div>
        </div>
        <CategoryBar />
      </div>
    </header>
  );
};

export default MenuBar;
