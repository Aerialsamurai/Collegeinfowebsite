import React from "react";
import "./seathome.css";
import { Link } from 'react-router-dom';

const Sehom = () => {
  return (
    <div className="sehom-container">
        <h3 className="sehom-head">Seat Matrix</h3>
      <div className="sehom-box">
        
        <p>
  <Link to="/Seatmatrix" className="sehom-know-more">seatmatrix 2024</Link>
</p>



      </div>

      
    </div>
  );
};

export default Sehom;