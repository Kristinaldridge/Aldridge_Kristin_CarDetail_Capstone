import React from 'react';

const Gallery = () => {
    return (
        <section className="gallery-section">
            <h1>Gallery</h1>
            <div className="gallery">
                <div className="gallery-item">
                    <img src="car1.jpg" alt="Car 1" />
                    <p>Car 1 - Description</p>
                </div>
                <div className="gallery-item">
                    <img src="car2.jpg" alt="Car 2" />
                    <p>Car 2 - Description</p>
                </div>
                <div className="gallery-item">
                    <img src="car2.jpg" alt="Car 2" />
                    <p>Car 2 - Description</p>
                </div>
                <div className="gallery-item">
                    <img src="car2.jpg" alt="Car 2" />
                    <p>Car 2 - Description</p>
                </div>
                <div className="gallery-item">
                    <img src="car2.jpg" alt="Car 2" />
                    <p>Car 2 - Description</p>
                </div>
                <div className="gallery-item">
                    <img src="car2.jpg" alt="Car 2" />
                    <p>Car 2 - Description</p>
                </div>
            </div>
        </section>
    );
}

export default Gallery;