import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, onAdd }) => {
    const [contador, setContador] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [vendido, setVendido] = useState (false)

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

    const addToCart = (quantity) => {
        setItemStock(itemStock - quantity);
        setContador(1);
        setVendido(true);
        onAdd(quantity);
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
                    {vendido ? <Link to={"/cart"} className="btn btn-outline-primary"> Terminar mi compra </Link>: <button type="button" className="btn btn-outline-primary" onClick={() => {addToCart (contador)}}>Agregar al carrito</button>}

                </div>
            </div>

        </div>

    )

    }
export default ItemCount;