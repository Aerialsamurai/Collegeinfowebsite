
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import '../Hero/Hero.css';
import '../Navbar/Navbar.css';
import './cutoff2024.css';

const cutoffData2024 = [
  { branch: "B.Tech. in Computer Science and Engineering", round1: 116, lastRound: 116 },
  { branch: "B.Tech. in Mathematics and Computing", round1: 332, lastRound: 332 },
  { branch: "B.Tech. in Electrical Engineering", round1: 625, lastRound: 625 },
  { branch: "B.Tech. in Mechanical Engineering", round1: 1774, lastRound: 1782 },
  { branch: "B.Tech. in Chemical Engineering", round1: 2221, lastRound: 2221 },
  { branch: "B.Tech. in Civil Engineering", round1: 4169, lastRound: 4169 },
  { branch: "B.Tech. in Textile Technology", round1: 6102, lastRound: 6102 },
  { branch: "B.Tech. in Production and Industrial Engineering", round1: 3089, lastRound: 3089 },
  { branch: "B.Tech. in Engineering Physics", round1: 2560, lastRound: 2560 },
  { branch: "B.Tech. in Biochemical Engineering and Biotechnology", round1: 4849, lastRound: 4849 },
  { branch: "B.Tech. in Engineering and Computational Mechanics", round1: 1194, lastRound: 1194 },
  { branch: "B.Tech. in Materials Engineering", round1: 3797, lastRound: 3797 },
  { branch: "B.Tech. in Energy Engineering", round1: 2707, lastRound: 2707 },
  { branch: "B.Tech. in Electrical Engineering (Power and Automation)", round1: 810, lastRound: 810 },
  { branch: "Integrated B.Tech. + M.Tech. in Computer Science and Engineering", round1: 204, lastRound: 204 },
  { branch: "Integrated B.Tech. + M.Tech. in Mathematics and Computing", round1: 417, lastRound: 417 },
  { branch: "Integrated B.Tech. + M.Tech. in Chemical Engineering", round1: 3646, lastRound: 3646 }
];

const Cutoff2024 = () => {
  return (
    <div className="cutoff-container">
      <Navbar />
      <Hero />

      <div className="cutoff-content">
        <h1>IIT Delhi JoSAA 2024 Cutoffs</h1>
        <div className="cutoff-table">
          <table>
            <thead>
              <tr>
                <th>Course</th>
                <th>Round 1 (Closing Rank)</th>
                <th>Last Round (Closing Rank)</th>
              </tr>
            </thead>
            <tbody>
              {cutoffData2024.map((item, idx) => (
                <tr key={idx}>
                  <td>{item.branch}</td>
                  <td>{item.round1}</td>
                  <td>{item.lastRound}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cutoff2024;
