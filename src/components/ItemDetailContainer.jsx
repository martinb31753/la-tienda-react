import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import arrayProductos from "./json/arrayProductos.json";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const[item,SetItem] = useState({});
    const{id} = useParams();


   /* useEffect(() => {
        const promesa = new Promise ((resolve) => {
            
            setTimeout(() => {
                
                resolve(arrayProductos.find(item => item.id === parseInt(id)));
            }, 2000);

        });

        promesa.then((data) =>{
            SetItem(data);
        })
        

    }, [id]);*/

    useEffect(() => {
        const db = getFirestore();
        const documento = doc(db, "items", id);
        getDoc(documento).then((snapShot) => {
            if (snapShot.exists()) {
                SetItem({id:snapShot.id, ...snapShot.data()});
            } 
        });
    }, []);

    return(
       <div className="container">

        <ItemDetail item={item}/>

       </div>
    )
}

export default ItemDetailContainer;