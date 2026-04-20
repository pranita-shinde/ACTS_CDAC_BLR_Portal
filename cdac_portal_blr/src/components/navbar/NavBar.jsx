import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import logo from '../assets/image.png';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="brand-name">
                <img src={logo} alt="Brand Logo" className="brand-logo" />
            </div>
            <div className="hamburger" onClick={toggleMenu}>
                &#9776;
            </div>
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/placements">Placement</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
