import React, { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemListContainer/ItemCount";

function ItemDetail({ title, image, imageTittle, description, stock }) {
  // Guardar un estado con el valor de count del itemcount
  let [statusCount, countToCart] = useState(true);
  let [cartCount, cartCountGo] = useState(0);

  function handleAddToCart(counter) {
    cartCountGo((cartCount) => counter);
    countToCart((statusCount) => !statusCount);
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column m-5 p-3 w-75 mw-100 border border-white">
      <h2 className="mb-2 text-light">{title}</h2>
      <img className="img-fluid" src={image} alt={imageTittle} />
      <p className="m-3 text-light"> {description} </p>
      {statusCount === true ? (
        <ItemCount stock={stock} onAddToCart={handleAddToCart} />
      ) : (
        <Link to="/cart">
          <button className="btn btn-sm btn-light mt-2 ms-2 mb-2">
            Ha pedido {cartCount} productos
            <br />
            Terminar mi compra
          </button>
        </Link>
      )}
    </div>
  );
}

export default ItemDetail;
