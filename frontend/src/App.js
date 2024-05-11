import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import Home from "./Components/Home/Home";
import Test from "./Components/test";
import ProductPage from "./Components/Home/CategoryPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/laptops" element={<ProductPage type="laptop" />} />
        <Route path="/monitors" element={<ProductPage type="monitor" />} />
        <Route path="/phones" element={<ProductPage type="phone" />} />
        <Route path="/tvs" element={<ProductPage type="tv" />} />
        <Route path="/tablets" element={<ProductPage type="tablet" />} />
      </Routes>
    </Router>
  );
};

export default App;
