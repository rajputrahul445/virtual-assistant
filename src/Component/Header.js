import React from "react";

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
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact Us</a>
                    </li>
                </ul>
            </div>
            </div>
            </nav>
        </header>
    );
}
export default Header;