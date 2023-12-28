import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import FooterBasic from "./Components/Footer/FooterBasic";
import ProductDetails from "./Components/ProductCard/ProductDetails";
import { SignedOut, SignedIn } from "@clerk/clerk-react"
import SignInPage from "./Components/Auth/SigninPage";
import SignUpPage from "./Components/Auth/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignInPage/>} />
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/products/:productid" element={<ProductDetails />} />
      </Routes>
      <FooterBasic />
    </BrowserRouter>
  );
};

export default App;
