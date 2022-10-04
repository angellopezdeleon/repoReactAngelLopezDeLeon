import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import cartImg from "../../cart.png";
import { cartContext } from "../../context/CartContext";
import "./NavBar.css";

function CartWidget() {
	const { getTotalItems } = useContext(cartContext);

	return (
		<div>
			<img className="cart" src={cartImg} alt="Carrito"></img>
			<span>x</span>
			<span>{getTotalItems()}</span>
		</div>
	);
};

export default CartWidget;