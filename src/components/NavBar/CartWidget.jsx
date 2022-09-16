import "bootstrap/dist/css/bootstrap.min.css";
import cart from "../../cart.png";
import "./NavBar.css";


function CartWidget() {

	return (
		<img className="cart" src={cart} alt="Carrito"></img>
	);
};

export default CartWidget;