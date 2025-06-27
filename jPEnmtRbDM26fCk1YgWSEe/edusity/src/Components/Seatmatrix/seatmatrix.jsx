import React from 'react';
import Navbar from '../Navbar/Navbar'; // import navbar from existing folder
import Hero from '../Hero/Hero';
import '../Hero/Hero.css';
import '../Navbar/Navbar.css'; // import its CSS if needed
import './seatmatrix.css'

const Seatmatrix = () => {
  return (
    <div>
      <Navbar /> 
      <Hero/>{/* Reused Navbar */}
      <h1>Seat Matrix</h1>
      <p>Details about seat matrix...</p>
    </div>
  );
};

export default Seatmatrix;