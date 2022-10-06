import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import cartImg from "../../cart.png";
import { cartContext } from "../../context/CartContext";
import "./NavBar.css";

function CartWidget() {
	const { getTotalItems } = useContext(cartContext);

	return (
		<div className="d-flex flex-row justify-content-center align-items-center">
			<img className="cart" src={cartImg} alt="Carrito"></img>
			{getTotalItems() === 0 ?
				<span></span>
			:
			<div>
				<span>x</span>
				<span>{getTotalItems()}</span>
			</div>
			}
		</div>
	);
};

export default CartWidget;