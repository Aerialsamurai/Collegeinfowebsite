import React from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import Navbar from '../Navbar/Navbar';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Indian Institute of Technology, Delhi</h1>
        <p>     </p>
        <button className='btn'>
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
     
    </div>
  );
};

export default Hero;
