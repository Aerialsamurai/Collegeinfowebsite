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

const Ranking = () => {
  return (
    <div className="rn-wrapper">
      <h1 className="rn-heading">Rankings</h1>
    <div className="rn-container">
      <div className="rn-contbox">
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
    </div>
  );
};

export default Ranking;
// import React, { useRef } from "react";
// import "./rank.css";
// import nirfLogo from "../../assets/nirf-logo.png"; 
// import QS from "../../assets/QS-Logo.jpg"; 
// import indtod from "../../assets/indtod.png";
// import next_icon from "../../assets/next-icon.png";
// import back_icon from "../../assets/back-icon.png";

// const rankings = [
//   {
//     title: "NIRF Ranking",
//     sub: "Engineering",
//     rank: "#3",
//     image: nirfLogo
//   },
//   {
//     title: "NIRF Ranking",
//     sub: "Overall",
//     rank: "#4",
//     image: nirfLogo
//   },
//   {
//     title: "QS Rankings",
//     sub: "World University Ranking",
//     rank: "#123",
//     image: QS,
//     className: "qs-logo"
//   },
//   {
//     title: "India Today",
//     sub: "Top Engineering Colleges",
//     rank: "#2",
//     image: indtod,
//     className: "india-today-logo"
//   }
// ];

// const Ranking = () => {
//   const slider = useRef();
//      let tx = 0;
 
//  const slideForward = ()=>{
//      if(tx > -75){
//          tx -= 25;
//      }
//      slider.current.style.transform = `translateX(${tx}%)`;
//  }
//  const slideBackward = ()=>{
//      if(tx < 0){
//          tx += 25;
//      }
//      slider.current.style.transform = `translateX(${tx}%)`;
//  }

//   return (
//     <div className="rn-wrapper">
//       <h1 className="rn-heading">Rankings</h1>

//       <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
//       <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />

//       <div className="rn-slider">
//         <ul className="rn-slider-track" ref={slider}>
//           {rankings.map((item, index) => (
//             <li key={index}>
//               <div className="rn-box">
//                 <img
//                   src={item.image}
//                   alt={`${item.title} logo`}
//                   className={`rank-logo ${item.className || ""}`}
//                 />
//                 <h3>{item.title}</h3>
//                 <p className="subheading">{item.sub}</p>
//                 <p className="rank-number">{item.rank}</p>
//                 <p className="rn-know-more">Know more</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Ranking;
