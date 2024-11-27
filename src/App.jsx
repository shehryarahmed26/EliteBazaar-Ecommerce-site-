import React, { useEffect, useState } from "react";
import Products from "./Components/Products";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  ProductDetails  from "./Components/ProductDetails";
import Notice from "./Components/Notice";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Searchproducts from "./Components/Searchproducts";
import Login from "./Components/login";
import SignIn from "./Components/signin";
import Featured from "./Components/Featured";
import Features from "./Components/Features";
import AboutUs from "./Components/Aboutus";
import Checkout from "./Components/Checkout";

const App = () => {

  return (
    <div className="min-h-screen"><BrowserRouter>
    {/* <Notice/> */}
    <Header/>
    <Routes>
      <Route path="/" element={<Featured/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/Features" element={<Features/>}/>
      <Route path="/Aboutus" element={<AboutUs/>}/>
      <Route path="/Products/:id" element={<ProductDetails/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Search/:id" element={<Searchproducts/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignIn/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
    </Routes>
    <Footer/> 
    </BrowserRouter></div>
  );
};

export default App;
