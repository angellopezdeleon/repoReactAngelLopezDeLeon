import React from "react";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

export default function CartView() {
  const context = useContext(cartContext);
  const { cart, clearCart, clearCartElement, getTotalPrice } = context;

  if (!cart[0]) {
    return (
      <div>
        <h1>Su carrito está vacio...</h1>
        <Link to="/">
          <button className="btn btn-sm btn-light mt-2 ms-2 mb-2">
            Volver a la tienda
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center align-items-center flex-column m-2 p-1">
      {cart.map((item) => (
        <div className="d-flex justify-content-center align-items-center flex-column m-2 p-1 w-50 mw-50 border border-white">
          <h3 className="mb-2 text-light">{item.title}</h3>
          <div className="d-flex justify-content-center align-items-center flex-row">
            <p className="m-2 text-light">Cantidad: {item.counter}</p>
            <p className="m-2 text-light">Precio unidad: ${item.price}</p>
            <p className="m-2 text-light">
              Total: ${(item.price * item.counter).toFixed(2)}
            </p>
            <button
              className="btn btn-sm btn-light mt-2 ms-2 mb-2"
              onClick={() => clearCartElement(item.id)}
            >
              Eliminar de la lista
            </button>
          </div>
        </div>
      ))}
      <div className="d-flex justify-content-center align-items-center flex-row m-2 p-1">
        <h4 className="m-2 text-light">
          Precio total ${getTotalPrice().toFixed(2)}
        </h4>
        <button
          className="btn btn-sm btn-light mt-2 ms-2 mb-2"
          onClick={() => clearCart()}
        >
          Eliminar todos los productos
        </button>
      </div>
      <CheckoutForm />
    </div>
  );
}
