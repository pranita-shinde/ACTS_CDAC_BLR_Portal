import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h3>CDAC Bengaluru</h3>
                    <p>CDAC Bengaluru is committed to providing quality education and resources.</p>
                </div>
                <div className="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                    <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/placements">Placement</Link></li>
                <li><Link to="/facilities">Facilities</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@brandname.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom">
                &copy; 2024 CDAC Bengaluru | All Rights Reserved
            </div>
        </footer>
    );
};

export default Footer;
