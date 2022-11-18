import React, { useState, useEffect } from "react";
import Item from "./Item.jsx";
import { getItems, getItemsByCategory } from "../../services/firestore";
import { useParams } from "react-router-dom";

export default function ItemList() {
    let [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { cat } = useParams();

    useEffect(() => {
        if (cat === undefined) {
            getItems()
                .then((respuesta) => setData(respuesta))
                .finally(() => setIsLoading(false));
        } else {
            getItemsByCategory(cat)
                .then((respuestaDatos) => setData(respuestaDatos))
                .finally(() => setIsLoading(false));
        }
    }, [cat]);
    return (
        <div>
            {isLoading ? (
                <h1 className="m-5">Cargando los productos. Por favor, espere...</h1>
            ) : (
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
                                price={item.price}
                            />
                        );
                    })}
                </div>
            )}
        </div>
    );
}
