
import React from 'react';
import Navbar from '../Navbar/Navbar';
import Hero from '../Hero/Hero';
import '../Hero/Hero.css';
import '../Navbar/Navbar.css';
import './cutoff2023.css';

const cutoffData2023 = [
  { branch: "B.Tech. in Computer Science and Engineering", round1: 115, lastRound: 118 },
  { branch: "B.Tech. in Mathematics and Computing", round1: 80, lastRound: 332 },
  { branch: "B.Tech. in Electrical Engineering", round1: 150, lastRound: 161 },
  { branch: "B.Tech. in Mechanical Engineering", round1: 374, lastRound: 384 },
  { branch: "B.Tech. in Chemical Engineering", round1: 509, lastRound: 509 },
  { branch: "B.Tech. in Civil Engineering", round1: 898, lastRound: 898 },
  { branch: "B.Tech. in Textile Technology", round1: 1358, lastRound: 1358 },
  { branch: "B.Tech. in Production and Industrial Engineering", round1: 769, lastRound: 769 },
  { branch: "B.Tech. in Engineering Physics", round1: 906, lastRound: 906 },
  { branch: "B.Tech. in Biochemical Engineering and Biotechnology", round1: 1038, lastRound: 1038 },
  { branch: "B.Tech. in Engineering and Computational Mechanics", round1: 275, lastRound: 275 },
  { branch: "B.Tech. in Materials Engineering", round1: 925, lastRound: 925 },
  { branch: "B.Tech. in Energy Engineering", round1: 560, lastRound: 560 },
  { branch: "B.Tech. in Electrical Engineering (Power and Automation)", round1: 195, lastRound: 195 },
  { branch: "Integrated B.Tech. + M.Tech. in Computer Science and Engineering", round1: 65, lastRound: 65 },
  { branch: "Integrated B.Tech. + M.Tech. in Mathematics and Computing", round1: 99, lastRound: 99 },
  { branch: "Integrated B.Tech. + M.Tech. in Chemical Engineering", round1: 709, lastRound: 709 }
];

const Cutoff2023 = () => {
  return (
    <div className="cutoff-container">
      <Navbar />
      <Hero />

      <div className="cutoff-content">
        <h1>IIT Delhi JoSAA 2023 Cutoffs</h1>
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
              {cutoffData2023.map((item, idx) => (
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

export default Cutoff2023;
