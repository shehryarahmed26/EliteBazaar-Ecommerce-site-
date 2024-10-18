import React, { useEffect, useState } from "react";
import Products from "./Components/Products";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  ProductDetails  from "./Components/ProductDetails";
import Notice from "./Components/Notice";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart";
import Searchproducts from "./Components/Searchproducts";

const App = () => {

  return (
    <div className="min-h-screen"><BrowserRouter>
    {/* <Notice/> */}
    <Header/>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/Products/:id" element={<ProductDetails/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Search/:id" element={<Searchproducts/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter></div>
  );
};

export default App;
