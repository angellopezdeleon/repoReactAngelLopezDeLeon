import React from "react";
import "./ItemListContainer.css"
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer({greeting}) {
	return (
		<div>
			<h1>{greeting}</h1>
			<ItemCount stock={4} initial={1} />
		</div>
	)
}

export default ItemListContainer;