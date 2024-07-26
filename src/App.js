import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/Header';
import About from './Components/About';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import BookingForm from './Components/BookingForm';
import './Components/index.css'; 

function App() {
    return (
      <div className="App">
        <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/bookingform" element={<BookingForm />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
    </div>
  );
};
   
  
  export default App