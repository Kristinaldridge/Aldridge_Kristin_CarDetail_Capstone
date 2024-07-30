import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/" end>Home</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/gallery">Gallery</NavLink></li>
                    <li><NavLink to="/BookingForm">Booking</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;