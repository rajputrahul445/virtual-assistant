import React, {useState} from "react";
import { Link } from 'react-router-dom';

const Header = () => {
    const [activeClass, setActiveClass] = useState(false);
    const openToggle = () => setActiveClass(!activeClass);
    
    return(
        <header className="mainHeader">
            <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container">
                    <a className="navbar-brand p-0" href="/"><img src="images/logo.png" alt="" /></a>
                    <button className="navbar-toggler" onClick={openToggle}>
                        <img src="images/toggle.png" alt="" />
                    </button>
                    <div className={activeClass ? "collapse navbar-collapse active" : "collapse navbar-collapse"} id="navbarSupportedContent">
                        <button className="hidden-xs mobile cross-toggler" onClick={openToggle}>
                            <img src="images/close.png" alt="" />
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