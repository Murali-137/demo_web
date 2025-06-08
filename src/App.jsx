import { Fragment, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route,Routes } from "react-router-dom";
import CartList from "./pages/CartList";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/cartlist" element={<CartList/>}/>
        <Route path="/" element={<ProductList/>}/>
        <Route path="/productdetails/:id" element={<ProductDetails/>}/>
      </Routes>
    </Fragment>
  );
}

export default App;
