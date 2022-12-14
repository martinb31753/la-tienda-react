import React from "react";
import { useState } from "react";

const ItemCount = ({ stockItems }) => {
    const [contador, setContador] = useState(1);
    const [stock, setStock] = useState(stockItems);

    const sumarStock = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }

    }

    const restarStock = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }

    }

    const onAdd = () => {
        if (contador <= stock) {
            setStock(stock - contador);
            setContador(0)
            console.log("Agregaste:" + contador + " Productos al carrito ")

        }

    }

    return (
        <div className="container text-center">
            <div className="row mb-3">
                <div className="col-md-12">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={restarStock}>-</button>
                        <button type="button" className="btn btn-outline-primary">{contador}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={sumarStock}>+</button>
                    </div>

                </div>

            </div>
            <div className="row">
                <div className="col-md-12">
                    <button type="button" className="btn btn-outline-primary" onClick={onAdd}>Agregar al carrito</button>

                </div>
            </div>

        </div>

    )
}

export default ItemCount;