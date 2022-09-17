import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemCount.css"

function ItemCount({stock, initial}) {
	const [counter, counterGo] = useState(initial);

	function countUp() {
		stock > counter ? counterGo(counter+1) : alert("Solo hay " + stock + " unidades disponibles en stock.");
	}

	function countDown() {
		counter > initial ? counterGo(counter-1) : alert("No puedes pedir menos de " + initial + " unidades.");
	}

	function onAdd(){
		alert("Añadirá al carrito " + counter + " productos.");
		counterGo(counter-(counter-1));
	}

	return (
		<div className="d-flex justify-content-center align-items-center">
			<button className="btn btn-light" onClick={countDown}> - </button>
			<h1 className="m-3"> {counter} </h1>
			<button className="btn btn-light" onClick={countUp}> + </button>
			<button className="btn btn-light m-4" onClick={onAdd}> Agregar al carrito </button>
		</div>
	)
}

export default ItemCount;