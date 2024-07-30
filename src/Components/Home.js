import React from 'react';
import car1 from './Images/car1.jpg';
import car2 from './Images/car2.jpg';
import car3 from './Images/car3.jpg';
import car4 from './Images/car4.jpg';



const Home = () => {
    return (
        <div>
            <section className="hero-section">
                <h1>Welcome to Lacey Auto Detailing Services</h1>
                <p>We provide top-notch detailing services for your vehicles.</p>
                <a href="http://localhost:3000/bookingform" className="button">Book Now</a>
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
                <h2>Give Your Car A Great Experience</h2>
                <div className="gallery">
                    <div className="gallery-item">
                        <img src={car1} alt="Car 1" width='300px'height='400px'/>
                        <img src={car2} alt="Car 2" width='300px' height='400px'/>
                        <img src={car3} alt="Car 3" width='300px' height='400px' />
                        <img src={car4} alt="Car 4" width='300px' height='400px' />
                        
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;