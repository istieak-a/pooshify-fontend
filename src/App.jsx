import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import FooterBasic from "./Components/Footer/FooterBasic";
import ProductDetails from "./Components/ProductCard/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <FooterBasic />
    </BrowserRouter>
  );
};

export default App;
