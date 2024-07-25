import React from 'react';
import Header from './Components/Header';
// import About from './Components/About';
import Footer from './Components/Footer';
// import Main from './Components/Main';
// import Gallery from './Components/Gallery';
// import Home from './Components/Home';
// import Services from './Components/Services';
import './Components/index.css'; 
import BookingForm from './Components/BookingForm';

function App() {
    return (
      <div className="App">
        <Header />
        <BookingForm />
        <Footer />
        </div>
    );
  }
  
  export default App;