import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartView from "./components/CartView/CartView"
import CartContextProvider from "./context/CartContext";

export default function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element= {
              <ItemListContainer greeting="Tienda de productos random" />
            }/>
            <Route path="/category/:cat" element= {
              <ItemListContainer greeting="Tienda de productos random" />
            }/>
            <Route path="/item/:itemid" element= {
              <ItemDetailContainer />
            }/>
            <Route path="/cart" element= {
              <CartView />
            }/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}