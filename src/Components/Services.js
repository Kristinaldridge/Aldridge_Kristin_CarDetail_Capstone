import React, { useState } from 'react';
import './flip-card.css';


const Services = () => {
    
    const [flippedCards, setFlippedCards] = useState([]);

   
    const toggleFlipped = (index) => {
        const newFlippedCards = [...flippedCards];
        if (newFlippedCards.includes(index)) {
            newFlippedCards.splice(newFlippedCards.indexOf(index), 1);
        } else {
            newFlippedCards.push(index);
        }
        setFlippedCards(newFlippedCards);
    };

    return (
        <section className="services-section">
            <h1>Our Services</h1>
            <ul className="service-cards">
                <li className={`service-card ${flippedCards.includes(0) ? 'flipped' : ''}`} onClick={() => toggleFlipped(0)}>
                    <div className="front">
                        <h2>Exterior Detailing-Standard</h2>
                    </div>
                    <div className="back">
                        <ul>
                            <li>$80</li>
                            <li>Full vacuum, interior wipe down, window cleaning, door jambs cleaning</li>
                            <li>Exterior Foam wash, towel dry, wheels deep cleaned, air freshener</li>
                        </ul>
                    </div>
                </li>
                <li className={`service-card ${flippedCards.includes(1) ? 'flipped' : ''}`} onClick={() => toggleFlipped(1)}>
                    <div className="front">
                        <h2>Interior Detailing</h2>
                    </div>
                    <div className="back">
                        <ul>
                            <li>$140</li>
                            <li>Vacuuming and deep cleaning of carpets and upholstery. Leather cleaning. </li>
                            <li>Dashboard and console cleaning and polishing.</li>
                            <li>Interior glass cleaning and odor elimination.</li>
                        </ul>
                    </div>
                </li>
                <li className={`service-card ${flippedCards.includes(2) ? 'flipped' : ''}`} onClick={() => toggleFlipped(2)}>
                    <div className="front">
                        <h2>Exterior Detailing-Premium</h2>
                    </div>
                    <div className="back">
                        <ul>
                            <li>$200</li>
                            <li>Standard Detail +</li>
                            <li>Bug removal, clay bar treatment, hand wax</li>
                            <li>Conditioning leather seats</li>
                            <li>Polymer sealants to protect against UV rays and environmental contaminants.</li>
                        </ul>
                    </div>
                </li>
                <li className={`service-card ${flippedCards.includes(3) ? 'flipped' : ''}`} onClick={() => toggleFlipped(3)}>
                    <div className="front">
                        <h2>Window Tinting</h2>
                    </div>
                    <div className="back">
                        <ul>
                            <li>Please call for QUOTE</li>
                            <li>Clean and prepare windows thoroughly.</li>
                            <li>Precisely apply tint film without creases or bubbles.</li>
                            <li>Trim excess film and ensure a flawless finish.</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default Services;