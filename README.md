# Car Detailing React App

The Lacey Detailing website is designed to offer a professional online presence for the auto detailing service. It provides potential customers with information about the services offered, a gallery of previous work, booking options, and background information about the company.

This React application showcases various features, including a dynamic gallery of car images and a booking system for auto detailing services. The app uses React for building the user interface and integrates with MongoDB for handling bookings, and Express for API handling. 

### Setup 
#### `npm start` or `npm run build`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.



## Main Features 
React Router Integration: For client-side routing between Home, Services, Gallery, Booking, and About Us.
Booking Management: Users can create, edit, and delete booking appointments.
Dynamic Image Gallery: Fetches and displays car images from an external API.
State Management: Uses useReducer and useState for managing state.
API Integration: Communicates with backend services for bookings and external APIs for car images.

## File Structure

FRONT END:
 src/

    components/
        Header.js – Navigation header component.
        BookingForm.js – Component for managing booking forms and lists.
        App.js – Main application component with route definitions.
        index.js – Entry point of the React application.
        footer.js - Main footer component 
        Gallery.js -Images of cars 
        Home.js- Entry page to app
        Services.js - Displays services offered
        booking-form.css – Styles specific to the booking form.
        index.css – General styles for the application.
        flip-card.css - Styles specific to the Services.js 


public/
index.html – HTML template for the application.

BACKEND: 
server/

    models/
        bookingModel.js- The Booking model is defined using Mongoose and represents the schema for bookings in the auto detailing service application
    routes/
        booking.mjs- This Express.js API provides endpoints for managing bookings in an auto detailing service application. It allows for creating, retrieving, updating, and deleting bookings. 
    server.mjs- Connection to Express.js API and  MongoDB for data storage.


Contributing
If you'd like to contribute to this project, please follow these steps:

Fork the repository.

Create a new branch for your feature or fix:

bash
Copy code
git checkout -b feature/your-feature
Make your changes and commit them:

bash
Copy code
git add .
git commit -m "Describe your changes here"
Push your changes to your forked repository:

bash
Copy code
git push origin feature/your-feature
Open a pull request on GitHub.