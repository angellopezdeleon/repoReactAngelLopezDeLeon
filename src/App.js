import React from "react";
import ReactDOM from 'react-dom/client';

import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Tienda de productos de coña"/>
    </div>
  );
}

export default App;
