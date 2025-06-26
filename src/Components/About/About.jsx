import React from 'react'
import './About.css'
import delhipic from '../../assets/delhipic.jpeg'


const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={delhipic} alt="" className='about-img'/>
        
      </div>
      <div className="about-right">
        <h3>ABOUT</h3>
        <h2>IIT DELHI</h2>
        <p>Embark on an inspiring academic journey at IIT Delhi, one of India’s premier institutions for science, engineering, and technology. Our world-class programs are crafted to equip students with the critical thinking, research capabilities, and innovation mindset essential for global impact.</p>
        <p>With a strong emphasis on interdisciplinary learning, hands-on projects, and faculty mentorship, IIT Delhi empowers students to become leaders in academia, industry, and entrepreneurship.</p>
        <p>Whether you're aiming to be a researcher, technologist, policymaker, or startup founder, IIT Delhi’s diverse academic ecosystem offers the perfect foundation to achieve your ambitions and contribute to transformative change.</p>
      </div>
    </div>
  )
}

export default About
