import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Tienda de productos de coña" />
    </div>
  );
}