import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getSingleItem } from "../../services/mockAPI";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  let [data, setData] = useState({});

//   const params = useParams(itemid);
//   const itemid = params.id;

  const { itemid } = useParams();

  useEffect(() => {
    getSingleItem(itemid).then((respuestaDatos) => setData(respuestaDatos));
  }, []);

  return (
    <div className="main container">
      <ItemDetail
        key={data.id}
        title={data.tittle}
        image={data.imgURL}
        imageTittle={data.tittle}
        description={data.description}
        stock={data.stock}
      />
    </div>
  );
}

export default ItemDetailContainer;
