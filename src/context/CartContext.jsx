import React, { useState, createContext} from 'react';

const cartContext = createContext();

export default function CartContextProvider({children}) {
	const [cart, setCart] = useState([]);

	function addItem(item, counter){
		if (isInCart(item.id)) {
			let newCart = cart.map((itemMapeo) => {
				if (itemMapeo.id === item.id) {
					itemMapeo.counter += counter;
					return itemMapeo;
				} else return itemMapeo;
			});
			setCart(newCart);
		} else {
			let newCart = cart.map((item) => item);
			newCart.push( {...item, counter: counter});
			setCart(newCart);
		}
	}

	function getTotalItems() {
		let totalItems = 0;
		let i = 0;
		if (cart[0]) {
			console.log(totalItems);
			console.log(cart[0].counter);
			cart.forEach(() => totalItems += cart[i++].counter);
			console.log(totalItems);
			return totalItems;
		} else {
			return totalItems;
		}
	}

	function isInCart(id) {
		let found = cart.some((item) => item.id === id);
		return found
	}

  return (
	<cartContext.Provider className="Provider" value={{ cart, addItem, getTotalItems }}>
		{children}
	</cartContext.Provider>
  )
}

export { cartContext };