import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Views/Home";
import ProductPage from "./Views/ProductPage";
import Cart from "./Views/Cart";


function App() {
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Cart" element={<Cart />} />

      </Routes>
    </Router>
  );
}

export default App;
