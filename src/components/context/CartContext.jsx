import React,{createContext} from "react";
import { useState } from "react";

export const CartContext = createContext();

const CartContextProvaider = ({children}) => {

    const [Cart, setCart]= useState([]);

    const addItem= (item,quantity) => {
        if (isInCart(item.id)){
            let pos = Cart.findIndex(x => x.id === item.id);
            Cart[pos].quantity += quantity;
            setCart([...Cart]);

        } else{
            setCart([...Cart, {...item, quantity:quantity}])

        }

    }

    const removeItem =(id) =>{
       const productos = Cart.filter(x =>x.id !== id);
       setCart(productos);

    }

    const clear = () =>{
        setCart([]);
    }

    const isInCart = (id) =>{
        return Cart.some(x => x.id === id)
    }

    const cartTotal = () => {
        return Cart.reduce((total, item) => total += item.quantity, 0);
    }
    
    const sumTotal = () => {
        return Cart.reduce((total, item) => total += item.quantity * item.precio, 0);
    }    
    return(
        <CartContext.Provider value ={{Cart,sumTotal,cartTotal, addItem,removeItem,clear}}>
           {children}
        </CartContext.Provider>
    )
}

export default CartContextProvaider;