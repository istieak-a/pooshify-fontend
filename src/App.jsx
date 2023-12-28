import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import FooterBasic from "./Components/Footer/FooterBasic";
import ProductDetails from "./Components/ProductCard/ProductDetails";
import SignIn from "./Components/Auth/SignIn";
import { SignedOut, SignedIn } from "@clerk/clerk-react"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/products/:productid" element={<ProductDetails />} />
      </Routes>
      <FooterBasic />
    </BrowserRouter>
  );
};

export default App;
