import React from "react";
import { BrowserRouter,Routes, Route } from "react-router-dom";
import Error404 from "./components/Error404";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import CartContextProvaider from "./components/context/CartContext";
import Cart from "./components/Cart";

function App(){
return(
  <CartContextProvaider>
  <div>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route  path={"/"} element={ <ItemListContainer/>}/>
      <Route  path={"/category/:id"} element={ <ItemListContainer/>}/>
      <Route  path={"/item/:id"} element={ <ItemDetailContainer/>}/>
      <Route  path={"/Cart"} element={ <Cart/>}/>
      <Route  path={"*"} element={ <Error404/>}/>
    </Routes>
   
   
    </BrowserRouter>
    
  </div>
  </CartContextProvaider>
);
}
export default App;
