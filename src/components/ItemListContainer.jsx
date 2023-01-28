import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
//import arrayProductos from "./json/arrayProductos.json";
import{collection,getDocs,getFirestore, query, where, } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { id } = useParams();

    /*useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? arrayProductos.filter(item => item.categoria === id) : arrayProductos);
            }, 2000)
        });

        promesa.then((data) => {

            setItems(data);
        }
        )

    }, [id]);*/
    
    useEffect(() => {
        const db = getFirestore();
        const productos = collection(db, "items");
        const q = id ? query(productos, where("categoria", "==", id)) : productos;
        getDocs(q).then((snapShot) => {
            setItems(snapShot.docs.map((doc) => ({id:doc.id, ...doc.data()})));
        });
    }, [id]);

    return (
        <div className="container py-5">
            <ItemList items={items} />
        </div>

    )
}

export default ItemListContainer;
