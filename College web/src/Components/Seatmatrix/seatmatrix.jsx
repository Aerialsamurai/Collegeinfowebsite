import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import './seatmatrix.css';

const Seatmatrix = () => {
  const categories = [
    'OPEN', 'OPEN-PwD', 'GEN-EWS', 'GEN-EWS-PwD',
    'OBC-NCL', 'OBC-NCL-PwD', 'SC', 'SC-PwD', 'ST', 'ST-PwD'
  ];
  const genderPools = ['Gender-Neutral', 'Female-only'];

  const [seatData, setSeatData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('OPEN');
  const [selectedGender, setSelectedGender] = useState('Gender-Neutral');
  const [filteredData, setFilteredData] = useState([]);
  const [links, setLinks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/seatmatrix/68793bd0ce83467e32d0508c')
      .then(res => {
        setSeatData(res.data.branches || []);
        setLinks(res.data.officialSeatMatrixLinks || []);
      })
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    const filtered = seatData.filter(
      (item) =>
        item.category === selectedCategory &&
        item.gender === selectedGender
    );
    setFilteredData(filtered);
  }, [selectedCategory, selectedGender, seatData]);

  return (
    <div id="seatmatrix">
      <div className="seatmatrix-links-card">
        <h3>Official Seat Matrix PDFs</h3>
        <div className="seatmatrix-links">
          {links.map((link, idx) => (
            <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="seatmatrix-link">Seat Matrix {link.year}</a>
          ))}
        </div>
      </div>
      <Navbar />
      <Hero />
      <div className="seat-matrix-section">
        <h2>Seat Matrix - IIT Delhi 2024</h2>
        <div className="filters">
          <div>
            <label>Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Seat Pool:</label>
            <select
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
            >
              {genderPools.map((pool) => (
                <option key={pool} value={pool}>{pool}</option>
              ))}
            </select>
          </div>
        </div>
        <table className="seat-table">
          <thead>
            <tr>
              <th>Branch</th>
              <th>Seats</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length ? (
              filteredData.map((item, index) => (
                <tr key={index}>
                  <td>{item.branch}</td>
                  <td>{item.seats}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="no-data">No data available for selected filters.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Seatmatrix;