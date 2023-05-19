import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = ({ handleRouteClick }) => {

    return (
        <nav className="navbar">
            <Link className="navbar-brand" to="/" onClick={() => handleRouteClick('Form')}>CarMatch</Link>

            <div className="navbarNav" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" onClick={() => handleRouteClick('About')} >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cars" onClick={() => handleRouteClick('Cars')}>Cars</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact" onClick={() => handleRouteClick('Contact')}>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
