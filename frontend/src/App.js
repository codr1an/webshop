import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import Home from "./Components/Home/Home";
import CategoryPage from "./Components/Home/CategoryPage"
import ProductPage  from "./Components/Home/ProductPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/laptops" element={<CategoryPage type="laptop" />} />
        <Route path="/monitors" element={<CategoryPage type="monitor" />} />
        <Route path="/phones" element={<CategoryPage type="phone" />} />
        <Route path="/tvs" element={<CategoryPage type="tv" />} />
        <Route path="/tablets" element={<CategoryPage type="tablet" />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};

export default App;
