import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemListContainer/ItemCount";
import { cartContext } from "../../context/CartContext";

function ItemDetail(item) {
  let [statusCount, countToCart] = useState(true);

  const { addItem } = useContext(cartContext);

  function handleAddToCart(counter) {
    countToCart((statusCount) => !statusCount);
    addItem(item, counter);
  }

  return (
    <div className="d-flex justify-content-center align-items-center flex-column m-5 p-3 mw-100 border border-white">
      <h2 className="mb-2 text-light">{item.title}</h2>
      <img
        className="img-thumbnail w-25 img-fluid"
        src={item.image}
        alt={item.imagetitle}
      />
      <p className="m-3 text-light"> {item.description} </p>
      <h4 className="m-3 text-light"> ${item.price} </h4>
      {statusCount === true ? (
        <ItemCount stock={item.stock} onAddToCart={handleAddToCart} />
      ) : (
        <div>
          <Link to="/cart">
            <button className="btn btn-sm btn-light mt-2 ms-2 mb-2">
              Terminar mi compra
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-sm btn-light mt-2 ms-2 mb-2">
              Volver a la tienda
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
