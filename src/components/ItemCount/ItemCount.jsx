import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ItemCount.css"

function ItemCount({stock, initial, OnAdd}) {
	const [counter, counterGo] = useState(initial);

	function countUp() {
		if (stock > counter) {
			counterGo(counter+1);
		} else {
			alert("Solo hay " + stock + " unidades disponibles en stock.");
		}
	}

	function countDown() {
		if (counter > 0){
			counterGo(counter-1);
		}
	}

	return (
		<div className="d-flex justify-content-center align-items-center">
			<button className="btn btn-light" onClick={countDown}> - </button>
			<h1 className="m-3"> {counter} </h1>
			<button className="btn btn-light" onClick={countUp}> + </button>
		</div>
	)
}

export default ItemCount;