import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
import RegisterForm from "./Components/RegisterForm/RegisterForm";
import Home from "./Components/Home";
import Test from "./Components/test";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
};

export default App;
