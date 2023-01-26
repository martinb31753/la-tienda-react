
import React from "react";
import { useState} from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const[stockItem, setStoxkItem]= useState(0);
    const onAdd = (quantity) =>{
        setStoxkItem(quantity);
    }

    return(
        <div className="row my-5">
            <div className="col md-6 offset-md-3 text-center">
                <img src={item.imagen} className="img-fluid" alt={item.nombre} />
                <h1>{item.nombre}</h1>
                <p>{item.descripcion}</p>
                <p><b>{item.precio}</b></p>
                <ItemCount stock={item.stock} onAdd={onAdd}/>
            </div>
            
        </div>
    )
}

export default ItemDetail;