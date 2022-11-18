import React from "react";
import { Link } from "react-router-dom";

function Checkout() {
    const orderSerial = window.location.pathname.replace("/checkout/", " ");

    return (
        <div>
            <h1 className="mt5">¡Gracias por tu compra!</h1>
            <p className="text-light">
                Apunte el código de su pedido:{orderSerial}
            </p>
            <Link to="/">
                <button className="btn btn-sm btn-light mt-2 ms-2 mb-2">
                    Volver a la tienda
                </button>
            </Link>
        </div>
    );
}

export default Checkout;
