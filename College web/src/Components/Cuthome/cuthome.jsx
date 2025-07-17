import React from "react";
import "./cuthome.css";
import { Link } from 'react-router-dom';

const Cuthom = () => {
  return (
    <div className="cuthom-container">
      
     <h3 className="cuthom-head">Cutoffs</h3>
      <div className="cuthom-box">
        
         <p>
  <Link to="/Cutoff" className="cuthom-know-more">Cutoff 2025</Link></p>
  <p classname="cuthom-know-more">Cutoff 2024</p>
  <p classname="cuthom-know-more">Cutoff 2023</p>
  <p classname="cuthom-know-more">Cutoff 2022</p>

      </div>
    </div>
  );
};

export default Cuthom;