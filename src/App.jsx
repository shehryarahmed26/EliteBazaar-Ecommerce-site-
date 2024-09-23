import React, { useEffect, useState } from "react";
import Products from "./Components/Products";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  ProductDetails  from "./Components/ProductDetails";
import Notice from "./Components/Notice";

const App = () => {

  return (
    <BrowserRouter>
    <Notice/>
    <Header/>
    <Routes>
      <Route path="/" element={<Products/>}/>
      <Route path="/Products/:id" element={<ProductDetails/>}/>
    </Routes>
    </BrowserRouter>
  );
};

export default App;
