import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = () => {
    const{cartTotal}= useContext(CartContext);
    return(
        <Link to={"/Cart"} className="btn btn-primary position-relative">
    <img src={"./imagenes/cart-plus.svg"} alt={"carrito"} width={20} />
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"> {cartTotal ()} 1</span>
   
  
</Link>


    )
}

export default CartWidget;