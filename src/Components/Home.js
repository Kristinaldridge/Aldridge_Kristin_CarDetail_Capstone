import React from 'react';

const Home = () => {
    return (
        <div>
            <section className="hero-section">
                <h1>Welcome to Lacey Auto Detailing Services</h1>
                <p>We provide top-notch detailing services for your vehicles.</p>
                <a href="booking.html" className="button">Book Now</a>
            </section>
            <section className="services-section">
                <h2>Our Services</h2>
                <ul>
                    <li>Exterior Detailing</li>
                    <li>Interior Detailing</li>
                    <li>Window Tinting</li>
                </ul>
            </section>
            <section className="gallery-section">
                <h2>Gallery</h2>
                <div className="gallery">
                    <div className="gallery-item">
                        <img src="car1.jpg" alt="Car 1" />
                        <p>Car 1 - Description</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;