import React, { useState, useEffect } from 'react';
import defaultImageUrl from '../Images/defaultcar2.jpg';

const CarImage = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
       
        fetch('https://freetestapi.com/api/v1/cars/1')
            .then(response => response.json())
            .then(data => {
                
                setImageUrl(data.image);
                setLoading(false);
            })
            .catch(err => {
                // setImageUrl({defaultImageUrl});
                 setError(err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div className='services-section'>
            <h1>Gallery</h1>
            <img src={imageUrl} alt="Car" />
            {/* setImageUrl({defaultImageUrl}); */}
            {/* width='300px'height='400px' */}
            
        </div>
    );
};

export default CarImage;


// import React from 'react';

// const Gallery = () => {
//     return (
//         <section className="gallery-section">
//             <h1>Gallery</h1>
//             <div className="gallery">
//                 <div className="gallery-item">
//                     <img src="car1.jpg" alt="Car 1" />
//                     <p>Car 1 - Description</p>
//                 </div>
//                 <div className="gallery-item">
//                     <img src="car2.jpg" alt="Car 2" />
//                     <p>Car 2 - Description</p>
//                 </div>
//                 <div className="gallery-item">
//                     <img src="car2.jpg" alt="Car 2" />
//                     <p>Car 2 - Description</p>
//                 </div>
//                 <div className="gallery-item">
//                     <img src="car2.jpg" alt="Car 2" />
//                     <p>Car 2 - Description</p>
//                 </div>
//                 <div className="gallery-item">
//                     <img src="car2.jpg" alt="Car 2" />
//                     <p>Car 2 - Description</p>
//                 </div>
//                 <div className="gallery-item">
//                     <img src="car2.jpg" alt="Car 2" />
//                     <p>Car 2 - Description</p>
//                 </div>
//             </div>
//         </section>
//     );
// }

// export default Gallery;