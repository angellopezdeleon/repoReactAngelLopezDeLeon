import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getSingleItem } from "../../services/firestore";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  let [data, setData] = useState({});
  const { itemid } = useParams();

  useEffect(() => {
    getSingleItem(itemid).then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div className="main container">
      <ItemDetail
        key={data.id}
        id={data.id}
        title={data.title}
        image={data.imgURL}
        imagetitle={data.title}
        description={data.description}
        stock={data.stock}
        price={data.price}
      />
    </div>
  );
}

export default ItemDetailContainer;
