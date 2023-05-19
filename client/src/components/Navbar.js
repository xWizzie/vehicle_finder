import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    const handleBrandClick = () => {
        // window.location.reload();
    };

    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/" onClick={handleBrandClick}>CarMatch</Link>

            <div className="navbarNav" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about"  >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cars">Cars</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
