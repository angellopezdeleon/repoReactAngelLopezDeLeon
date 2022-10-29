import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getSingleItem } from "../../services/firestore";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  let [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getSingleItem(id)
      .then((respuestaDatos) => setData(respuestaDatos))
      .catch((errormsg) => {
        setError(errormsg.message);
      })
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return (
      <>
        {error ? (
          <div>
            <h2 style={{ color: "#aa0033" }}>Error obteniendo los datos</h2>
            <p>{error}</p>
          </div>
        ) : (
          <h3>Cargando . . .</h3>
        )}
      </>
    );
  }

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
