import React from 'react';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="booking.html">Booking</a></li>
                    <li><a href="about.html" className="active">About Us</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;