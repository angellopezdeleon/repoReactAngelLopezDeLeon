import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function ItemCount({stock = 0, initial = stock > 0 ? 1 : 0}) {
	const [counter, counterGo] = useState(initial);

	function countUp() {
		stock > counter ? counterGo(counter+1) : alert("Hay " + stock + " unidades disponibles en stock.");
	}

	function countDown() {
		counter > initial ? counterGo(counter-1) : alert("No puedes pedir menos de " + initial + " unidades.");
	}

	function onAdd() {
		if (counter > 0) {
			alert("Añadirá al carrito " + counter + " productos.");
			counterGo(counter-(counter-1));
		} else {
			alert("No hay stock disponible o se ha producido un error.");
		}
		console.log("nasa");
	}

	return (
		<div className="d-flex justify-content-center align-items-center">
			<button className="btn btn-sm btn-light" onClick={countDown}> - </button>
			<h4 className="m-2 text-light"> {counter} </h4>
			<button className="btn btn-sm btn-light" onClick={countUp}> + </button>
			<button className="btn btn-sm btn-light mt-2 ms-2 mb-2" onClick={onAdd}> Agregar al carrito </button>
		</div>
	)
}

export default ItemCount;