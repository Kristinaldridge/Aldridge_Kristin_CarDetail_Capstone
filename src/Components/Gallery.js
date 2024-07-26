import React, { useState, useEffect } from 'react';

const DogImage = () => {
  const [dogImage, setDogImage] = useState('https://cdn2.thedogapi.com/images/mufxR-Px7.jpg'); 
  const apiKey = 'live_AjjJU2oCfHEmb1SAzT7JqmkD7p2t1PEse2HWJRG4hb0gru53rsD1q1rB1aLjxwkE'; 

  useEffect(() => {
   
    const fetchRandomDogImage = async () => {
      try {
        const response = await fetch('https://api.thedogapi.com/v1/images/r1ZfomsN7', {
          headers: {
            'x-api-key': apiKey
          }
        });

        if (!response.ok) {
          throw new Error('Network response error');
        }

        const data = await response.json();

        if (data.url) {
          setDogImage(data.url);
        } else {
          throw new Error('API Issue');
        }
      } catch (error) {
        console.error('Error fetching dog image:', error);
    
        setDogImage('https://cdn2.thedogapi.com/images/mufxR-Px7.jpg'); 
      }
    };

    fetchRandomDogImage();
  }, []); 

  return (
    <div>
      <h2>Image Test </h2>
      <img src={dogImage} alt="Random Dog" style={{ width: '300px', height: 'auto' }} />
    </div>
  );
};

export default DogImage;



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