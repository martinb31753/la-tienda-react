import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import arrayProductos from "./json/arrayProductos.json";

const ItemDetailContainer = () => {
    const[item,SetItem] = useState({});

    useEffect(() =>{
        const promesa = new Promise ()

    }, []);

    return(
        <h1>ItemDetail</h1>
    )
}

export default ItemDetailContainer;