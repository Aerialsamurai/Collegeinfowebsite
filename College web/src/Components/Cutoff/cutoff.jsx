import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import '../Hero/Hero.css';
import '../Navbar/Navbar.css';
import './cutoff.css';

const Cutoff = () => {
  const [cutoffData, setCutoffData] = useState(null);
  const [selectedRound, setSelectedRound] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedQuota, setSelectedQuota] = useState('All');
  const categories = ['All', 'OPEN', 'OBC-NCL', 'SC', 'ST', 'GEN-EWS', 'OPEN-PwD'];
  const quotas = ['All', 'AI', 'HS', 'OS', 'GO'];

  useEffect(() => {
    axios.get('http://localhost:5000/cutoff/68793d48ce83467e32d05092')
      .then(res => setCutoffData(res.data))
      .catch(err => console.error(err));
  }, []);

  let filteredData = [];
  if (cutoffData && cutoffData.rounds) {
    const roundData = cutoffData.rounds.find(r => r.round === selectedRound);
    if (roundData) {
      filteredData = roundData.data.filter(item =>
        (selectedCategory === 'All' || item.category === selectedCategory) &&
        (selectedQuota === 'All' || item.quota === selectedQuota)
      );
    }
  }

  return (
    <div className="cutoff-container" id="cutoff">
      <Navbar />
      <Hero />
      <div className="cutoff-content">
        <h1>IIT Delhi JoSAA 2025 Cutoffs</h1>
        <div className="round-selector">
          {[1, 2, 3, 4, 5, 6].map(round => (
            <button
              key={round}
              className={`round-btn ${selectedRound === round ? 'active' : ''}`}
              onClick={() => setSelectedRound(round)}
            >
              Round {round}
            </button>
          ))}
        </div>
        <div className="filters">
          <div className="filter-group">
            <label>Category:</label>
            <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label>Quota:</label>
            <select value={selectedQuota} onChange={e => setSelectedQuota(e.target.value)}>
              {quotas.map(quota => (
                <option key={quota} value={quota}>{quota}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="cutoff-links-card">
          <h3>Official Cutoff PDFs</h3>
          <div className="cutoff-links">
            <a href="https://josaa.nic.in/documents/cutoff-2025.pdf" target="_blank" rel="noopener noreferrer" className="cutoff-link">Cutoff 2025</a>
            <a href="https://josaa.nic.in/documents/cutoff-2024.pdf" target="_blank" rel="noopener noreferrer" className="cutoff-link">Cutoff 2024</a>
            <a href="https://josaa.nic.in/documents/cutoff-2023.pdf" target="_blank" rel="noopener noreferrer" className="cutoff-link">Cutoff 2023</a>
            <a href="https://josaa.nic.in/documents/cutoff-2022.pdf" target="_blank" rel="noopener noreferrer" className="cutoff-link">Cutoff 2022</a>
          </div>
        </div>
        <div className="cutoff-table">
          {filteredData.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Branch</th>
                  <th>Category</th>
                  <th>Quota</th>
                  <th>Opening Rank</th>
                  <th>Closing Rank</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, idx) => (
                  <tr key={idx}>
                    <td>{item.branch}</td>
                    <td>{item.category}</td>
                    <td>{item.quota}</td>
                    <td>{item.openingRank}</td>
                    <td>{item.closingRank}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="no-data">
              <p>No cutoff data available for the selected filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cutoff;