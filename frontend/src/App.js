import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import Home from "./Components/Home/Home";
import Test from "./Components/test";
import LaptopPage from "./Components/Categories/Laptop"
import PhonePage from "./Components/Categories/Phone"
import TabletPage from "./Components/Categories/Tablet"
import TvPage from "./Components/Categories/Tv"
import MonitorPage from "./Components/Categories/Monitor"


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
        <Route path="/laptops" element={<LaptopPage />} />
        <Route path="/monitors" element={<MonitorPage />} />
        <Route path="/phones" element={<PhonePage />} />
        <Route path="/tvs" element={<TvPage />} />
        <Route path="/tablets" element={<TabletPage />} />

      </Routes>
    </Router>
  );
};

export default App;
