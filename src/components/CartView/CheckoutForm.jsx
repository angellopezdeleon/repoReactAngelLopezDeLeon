import React, { useState, useContext } from "react";
import { cartContext } from "../../context/CartContext";
import { createBuyOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";

function CheckoutForm() {
  const [dataForm, setDataForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const context = useContext(cartContext);
  const { cart, getTotalPrice, clearCart } = context;
  const navigate = useNavigate();

  function handleCheckout(event) {
    event.preventDefault();
    const orderData = {
      buyer: dataForm,
      items: cart,
      date: new Date(),
      total: getTotalPrice(),
    };
    createBuyOrder(orderData).then((orderid) => {
      navigate(`/checkout/${orderid}`);
      clearCart();
    });
  }

  function inputChangeHandler(event) {
    let inputName = event.target.name;
    let value = event.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  return (
    <div className="form-container">
      <form onSubmit={handleCheckout}>
        <div className="form-item">
          <label htmlFor="name"></label>
          <input
            value={dataForm.name}
            onChange={inputChangeHandler}
            name="name"
            type="text"
            placeholder=" Nombre "
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="telefono"></label>
          <input
            value={dataForm.phone}
            onChange={inputChangeHandler}
            name="phone"
            type="text"
            placeholder=" Telefono "
            required
          />
        </div>
        <div className="form-item">
          <label htmlFor="email"></label>
          <input
            value={dataForm.email}
            onChange={inputChangeHandler}
            name="email"
            type="text"
            placeholder=" Correo "
            required
          />
        </div>
        <button className="btn btn-sm btn-light mt-2 ms-2 mb-2" type="submit">
          Finalizar Compra
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;