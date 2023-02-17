import React from "react";
import logo from "./Images/logo-gmail.png";
import "./navigation.css";

function Pgno1() {
    return (
        <>
            <div className="box">
                <nav className="navbar navbar-expand-lg  bg-body-tertiary">
                    <div className="container-fluid">
                        <img className="icon" src={logo} alt="Hola!" />
                        <a className="navbar-brand" href="www.w3c.com">Gmail</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="www.w3c.com">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="www.w3c.com" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Dropdown
                                    </a>
                                </li>
                            </ul>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-primary" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default Pgno1;