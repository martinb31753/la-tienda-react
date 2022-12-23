import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import arrayProductos from "./json/arrayProductos.json";

const ItemListContainer = () => {
    const[items, setItems] = useState ([]);
    const{id} = useParams ();

    useEffect(()  => {
        const promesa = new Promise ((resolve) => {
            setTimeout(() =>{
                resolve(id ? arrayProductos.filter (item => item.categoria === id) : arrayProductos );
            },2000)
        });
        
        promesa.then((data) =>{
            
            setItems(data);
        }
        )

    }, [id]);


    return (
        <div className="container py-5">
                <ItemList items={items}/>
                <ItemCount stockItems={10}/>
            </div>
       
            )
}

export default ItemListContainer;
