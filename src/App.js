import React from "react";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App(){
return(
  <div className="contenedor">
    <NavBar/>
    <ItemListContainer/>
    <ItemDetailContainer/>
  </div>
);
}
export default App
