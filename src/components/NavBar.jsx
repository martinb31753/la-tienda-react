import React from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {

    return (
        <div className="row">
            <div className="col-md-6">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src={"imagenes/icono1.jpg"} alt={"icono"} width={80}/></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" aria-current="page" href="#">Remeras</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/camisas">Camisas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/pantalones">Bermudas</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Tablas">Tablas</a>
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