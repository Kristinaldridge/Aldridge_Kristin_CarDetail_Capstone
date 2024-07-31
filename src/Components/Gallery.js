import React, { useState, useEffect } from 'react';
import defaultImageUrl from '../Images/defaultcar2.jpg';
import defaultImageUrl2 from '../Images/defaultcar.jpg';
import car3 from '../Images/car3.jpg';


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
            <img src={defaultImageUrl} alt="Car" width='400px' height='400px'/>
    
            <img src={defaultImageUrl2} alt="Car" width='400px' height='400px'/>
            <img src={car3} alt="Car" width='400px' height='400px'/>
            {/* this image did not have a jpg file associated with the api call. it is added to demonstrate, use of fetch function. */}
            <img src={imageUrl} alt="Car" width='400px' height='400px'/>
        </div>
    );
};

export default CarImage;

