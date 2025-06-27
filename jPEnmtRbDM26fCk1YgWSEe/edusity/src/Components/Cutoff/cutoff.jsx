import React from 'react';
import Navbar from '../Navbar/Navbar'; // import navbar from existing folder
import Hero from '../Hero/Hero';
import '../Hero/Hero.css';
import '../Navbar/Navbar.css'; // import its CSS if needed
import './cutoff.css'

const Cutoff = () => {
  return (
    <div>
      <Navbar /> 
      <Hero/>{/* Reused Navbar */}
      <h1>Cutoffs</h1>
      <p>Details about seat matrix...</p>
    </div>
  );
};

export default Cutoff;