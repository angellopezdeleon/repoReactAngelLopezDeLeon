import React, { useState, useEffect } from "react";
import Item from "./Item.jsx";
import { getItems } from "../../services/mockAPI.js";

export default function ItemList() {

let [data, setData] = useState([]);

useEffect(
	() => {
	getItems().then( respuesta => setData(respuesta));
	}
)

  return (
    <div className="d-flex flex-wrap main container">
		{
			data.map( (item) => {
				console.log(item);
				return <Item
					key={item.id}
					title={item.tittle}
					image={item.imgURL} 
					imageTittle={item.tittle} 
					description={item.description} 
					stock={item.id}
				/>
			})
		}
    </div>
  );
}

// id: 96,
// tittle: "Twin Peaks: Fire Walk with Me",
// imgURL: "http://dummyimage.com/224x100.png/dddddd/000000",
// description: "Etiam vel augue.",
// price: "$0.69",
