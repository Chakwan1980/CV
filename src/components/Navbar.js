// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.webp';
import '../App.css';


function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-content">
                <div className="navbar-logo"><img className='navbar-logo' src={logo} width={50}/></div>
                <ul className="navbar-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/LandingPage">LandingPage</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;