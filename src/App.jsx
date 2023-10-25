import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import ProductPage from "./Views/ProductPage";
import Cart from "./Views/Cart";
import MarketPlace from "./Views/MarketPlace";
import Login from "./Views/Login";
import Signup from "./Views/Signup";

function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/MarketPlace" element={<MarketPlace />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}

export default App;
