import React from "react";
import "./popularcolleges.css";
import iitm from '../../assets/iitm.png';
import iitb from '../../assets/iitb.png';
import bits from '../../assets/bitsat.png';
import iitk from '../../assets/iitk.png';
import iitind from '../../assets/iitind.png';

const clgs = [
  { name: "IIT Madras", img: iitm },
  { name: "IIT Bombay", img: iitb },
  { name: "BITS Pilani", img: bits },
  { name: "IIT Kharagpur", img: iitk },
  { name: "IIT Indore", img: iitind },
];

const Popularcolleges = () => {
  return (
    <div className="popular-clg-wrapper">
      <h2 className="popular-clg-title">POPULAR COLLEGES</h2>
      <ul className="clg-list">
        {clgs.map((clg, index) => (
          <li className="clg-item" key={index}>
            <img src={clg.img} alt={clg.name} className="clg-logo" />
            <span className="clg-name">{clg.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Popularcolleges;
