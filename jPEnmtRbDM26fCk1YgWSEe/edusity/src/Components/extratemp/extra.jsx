import React from "react";
import "./extra.css";

const Extra = () => {
  return (
    <div className="extra-container">
      {/* Seat Matrix Box */}
      <div className="extra-box">
        <h3>SEAT MATRIX</h3>
        <table className="seat-matrix-table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Total Seats</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Computer Science and Engineering</td><td>104</td></tr>
            <tr><td>Electrical Engineering</td><td>120</td></tr>
            <tr><td>Mechanical Engineering</td><td>90</td></tr>
            <tr><td>Chemical Engineering</td><td>85</td></tr>
            <tr><td>Civil Engineering</td><td>95</td></tr>
            <tr><td>Engineering Physics</td><td>50</td></tr>
          </tbody>
        </table>
        <a className="know-more" href="#full-seat-matrix">Know more</a>
      </div>

      {/* Cutoffs Box */}
      <div className="extra-box">
        <h3>CUTOFFS</h3>
        <table className="seat-matrix-table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Closing Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Computer Science and Engineering</td><td>117</td></tr>
            <tr><td>Electrical Engineering</td><td>387</td></tr>
            <tr><td>Mechanical Engineering</td><td>890</td></tr>
            <tr><td>Chemical Engineering</td><td>1500</td></tr>
            <tr><td>Civil Engineering</td><td>2100</td></tr>
            <tr><td>Engineering Physics</td><td>1420</td></tr>
          </tbody>
        </table>
        <a className="know-more" href="#full-cutoff">Know more</a>
      </div>
    </div>
  );
};

export default Extra;
