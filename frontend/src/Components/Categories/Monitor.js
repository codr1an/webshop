import React, { useState, useEffect } from 'react';
import "../Home/Home.css";
import logo from '../Assets/test.png'; 
import { FaUser, FaShoppingCart} from "react-icons/fa";

const CategoriesBar = () => {
  return (
    <div className="categories-bar">
      <a href="phones" className="category">Phones</a>
      <a href="tablets" className="category">Tablets</a>
      <a href="laptops" className="category">Laptops</a>
      <a href="tvs" className="category">TVs</a>
      <a href="monitors" className="category">Monitors</a>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="menu-container">
        <div className="menu-bar">
          <div className="logo">
            <a href="/?page=1"> {/* Added anchor tag */}
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
          <div className="menu-buttons-container">
            <button className="menu-buttons"><FaUser /></button>
            <button className="menu-buttons"><FaShoppingCart/></button>
          </div>
        </div>
        <CategoriesBar />
      </div>
    </header>
  );
};

const Product = ({ product }) => {
  return (
    <div className="product">
      <a href={`/products/${product.name}`} className='product-link'>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        {product.imageUrl && <img src={require(`../../../../productImages/${product.imageUrl}`)} alt={product.name} />}  
      </a>
    </div>
  );
};

const MonitorPage = () => {
  const [monitorProducts, setMonitorProducts] = useState([]);

  useEffect(() => {
    const fetchMonitorProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products/type/monitor');
        const data = await response.json();
        setMonitorProducts(data);
      } catch (error) {
        console.error('Error fetching monitor products:', error);
      }
    };

    fetchMonitorProducts();
  }, []);

  return (
    <div className="front-page">
      <Header />
      <div className="product-grid">
        {monitorProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MonitorPage;