import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { getSingleItem } from "../../services/mockAPI";

function ItemDetailContainer() {

	let [data, setData] = useState({});

	useEffect(
		() => {
				getSingleItem().then( 
					respuesta => setData(respuesta)
					);
			}, 
		[]
	)

return (
	<div className="main container">
			<ItemDetail
				key={data.id}
				title={data.tittle}
				image={data.imgURL} 
				imageTittle={data.tittle} 
				description={data.description} 
				stock={data.id}
			/>
	</div>
)}

export default ItemDetailContainer