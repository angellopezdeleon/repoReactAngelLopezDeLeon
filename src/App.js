import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element= {
            <ItemListContainer greeting="Tienda de productos de cine" />
          }/>
          <Route path="/category/:cat" element= {
            <ItemListContainer greeting="Tienda de productos de CINE" />
          }/>
          <Route path="/item/:itemid" element= {
            <ItemDetailContainer />
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}