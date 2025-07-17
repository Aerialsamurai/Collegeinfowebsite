import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container' id='hero'>
      <div className="hero-text">
        <h1>INDIAN INSTITUTE OF TECHNOLOGY DELHI</h1>
        <p>Hauz Khas, New Delhi - 110016, India</p>
        {/* <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button> */}
      </div>
    </div>
  )
}

export default Hero
