import React, { useState, useEffect } from "react";
import Item from "./Item.jsx";
import { getItems, getItemsByCategory } from "../../services/mockAPI.js";
import { useParams } from "react-router-dom";

export default function ItemList() {
  let [data, setData] = useState([]);
  const { cat } = useParams();

  useEffect(() => {
    if (cat === undefined) {
      getItems().then((respuesta) => setData(respuesta));
    } else {
      getItemsByCategory(cat).then((respuestaDatos) => setData(respuestaDatos)
      );
    }
  }, [cat]);

  return (
    <div className="d-flex flex-wrap main container">
      {data.map((item) => {
        return (
          <Item
            key={item.id}
            id={item.id}
			      category={item.category}
            title={item.title}
            image={item.imgURL}
            imagetitle={item.title}
            description={item.description}
            stock={item.id}
          />
        );
      })}
    </div>
  );
}
