import React from "react";
import "./ItemListContainer.css"
import ItemList from "./ItemList";

export default function ItemListContainer({greeting}) {
	return (
		<div>
			<h1>{greeting}</h1>
			<ItemList />
		</div>
	)
}