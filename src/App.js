import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemCount from "./components/ItemCount/ItemCount";


function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="Tienda de productos de coña"/>
    </div>
  );
}


export default App;
