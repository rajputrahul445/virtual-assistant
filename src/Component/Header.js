import React from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header className="mainHeader">
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container">
            <a className="navbar-brand p-0" href="/"><img src="images/logo.png" alt="" /></a>
            <button className="navbar-toggler">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <button className="hidden-xs mobile cross-toggler">
                    <i className="fas fa-times"></i>
                </button>
                <ul className="navbar-nav ms-auto">
                    <li className="mobile">
                        <img src="images/logo.png" alt="" />
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about-us">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">Contact Us</Link>
                    </li>
                </ul>
            </div>
            </div>
            </nav>
        </header>
    );
}
export default Header;