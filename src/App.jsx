'use strict'
import React, { useEffect, useState } from "react";
import Products from "./Components/Products";
import Header from "./Components/Header";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ProductDetails from "./Components/ProductDetails";
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
    <BrowserRouter>
      <Routes>

        {/* auth */}
      <Route path="/auth" element={<Outlet/>}>
        <Route path="/auth/signup" element={<SignIn />} />
        <Route path="/auth/login" element={<Login />} />
      </Route>

      {/* user */}
        <Route
          element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Featured />} />
          <Route path="/products" element={<Products />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Products/:id" element={<ProductDetails />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Search/:id" element={<Searchproducts />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Route>

        {/* admin */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
