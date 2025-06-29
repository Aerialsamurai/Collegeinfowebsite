import React from "react";
import "./rank.css";
import nirfLogo from "../../assets/nirf-logo.png"; 
import QS from "../../assets/QS-Logo.jpg"; 
import indtod from "../../assets/indtod.png"

const rankings = [
  {
    title: "NIRF Ranking",
    sub: "Engineering",
    rank: "#3",
    image: nirfLogo
  },
  {
    title: "NIRF Ranking",
    sub: "Overall",
    rank: "#4",
    image: nirfLogo
  },
  {
    title: "QS Rankings",
    sub: "World University Ranking",
    rank: "#123",
    image: QS,
     className: "qs-logo"
  },
  {
    title: "India Today",
    sub: "Top Engineering Colleges",
    rank: "#2",
     image: indtod,
     className: "india-today-logo" 
  }
];
<h1>Rankings</h1>
const Ranking = () => {
  return (
    <div className="rn-wrapper">
      <h1 className="rn-heading">Rankings</h1>
    <div className="rn-container">
      {rankings.map((item, index) => (
        <div className="rn-box" key={index}>
          <img
  src={item.image}
  alt={`${item.title} logo`}
  className={`rank-logo ${item.className || ""}`}
/>



          <h3>{item.title}</h3>
          <p className="subheading">{item.sub}</p>
          <p className="rank-number">{item.rank}</p>
          <p className="rn-know-more">Know more</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Ranking;