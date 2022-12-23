import React from "react";
import {Link, NavLink} from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
        <div className="row">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={"/"}><img src={"/imagenes/icono1.jpg"} alt={"icono"} width={80}/></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" to="/category/Remeras">Remeras</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/Camisas">Camisas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/Bermudas">Bermudas</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/category/Tablas">Tablas</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                </div>
                <div className="col-md-6 justify-content-end d-flex align-items-center">
                <CartWidget/>
                </div>
                </div>
        

    )
}

export default NavBar;