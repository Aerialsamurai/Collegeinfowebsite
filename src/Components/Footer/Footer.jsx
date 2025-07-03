import React from 'react'
import './Footer.css'
import log from '../../assets/pravesh.png'


import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h4>COLLEGE</h4>
          <ul>
            <li>Statewise Colleges</li>
            <li>Explore All IITs</li>
            <li>Explore All NITs</li>
            <li>Explore All IIITs</li>
            <li>Explore All IISERs</li>
            <li>Colleges in Delhi NCR</li>
            <li>Colleges in Maharashtra</li>
            <li>Colleges in Karnataka</li>
            <li>Colleges in Uttar Pradesh</li>
            <li>Colleges in Andhra Pradesh</li>
            <li>Colleges in Telangana</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>EXAM</h4>
          <ul>
            <li>JEE (Main)</li>
            <li>JEE (Advanced)</li>
            <li>BITSAT</li>
            <li>MHT-CET</li>
            <li>UPSEE</li>
            <li>WBJEE</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>TOOLS</h4>
          <ul>
            <li>College Finder</li>
            <li>JEE (Main) Rank Predictor</li>
            <li>JEE (Main) College Predictor</li>
            <li>JEE (Advanced) College Predictor</li>
            <li>BITSAT College Predictor</li>
            <li>JAC Delhi College Predictor</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>COMPANY</h4>
          <ul>
            <li>About Us</li>
            <li>Media Kit</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
            <li>Support Us</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <img src={log} alt="" className="footer-logo" />
        <div className="footer-socials">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
        </div>
        <p className="footer-copy">College Pravesh © Copyright 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
