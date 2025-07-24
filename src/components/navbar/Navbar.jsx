import React from 'react';
import {Link} from "react-router-dom";


function Navbar() {
    return (
        <nav className="navbar navbar-expand-md  py-4 fixed-top overflow-hidden" style={{backgroundColor: "#2c3e50" , width: "100vw"}}>
        <div className="container">
            <Link className="navbar-brand text-white fw-bolder" to="">START FRAMEWORK</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 px-5 ">
                    <li className="nav-item">
                        <Link className="nav-link text-white fw-bold" to="about">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white fw-bold" to="portfolio">PORTFOLIO</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white fw-bold" to="contact">CONTACT</Link>
                    </li>


                </ul>
            </div>
        </div>
    </nav>);
}

export default Navbar;