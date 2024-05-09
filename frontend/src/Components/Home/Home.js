import React, { useState, useEffect } from 'react';
import "./Home.css";
import logo from '../Assets/test.png'; 
import { FaUser, FaShoppingCart} from "react-icons/fa";

const CategoriesBar = () => {
  return (
    <div className="categories-bar">
      <a href="/phones" className="category">Phones</a>
      <a href="/tablets" className="category">Tablets</a>
      <a href="/laptops" className="category">Laptops</a>
      <a href="/tvs" className="category">TVs</a>
      <a href="/monitors" className="category">Monitors</a>
    </div>
  );
};

const Header = () => {
  return (
    <header>
      <div className="menu-container">
        <div className="menu-bar">
          <div className="logo">
            <img src={logo} alt="Logo" />
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

const Home = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="front-page">
      <Header />
      <div className="product-grid">
        {currentProducts.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
    </div>
  );
};

const Pagination = ({ productsPerPage, totalProducts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href={'#' + number } className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Home;
