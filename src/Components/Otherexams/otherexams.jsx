import React from "react";
import "./otherexams.css";
import ntaLogo from '../../assets/nta1.png';
import advanced from '../../assets/jeeadv.png';
import bitsat from '../../assets/bitsat.png';
import met from '../../assets/met.png';
import kcet from '../../assets/kcet.png';

const exams = [
  { name: "Joint Entrance Examination (Main)", img: ntaLogo },
  { name: "Joint Entrance Examination (Advanced)", img: advanced },
  { name: "BITS Admission Test", img: bitsat },
  { name: "Manipal Entrance Test", img: met },
  { name: "Karnataka College Entrance Test(KCET)", img: kcet },
];

const Otherexams = () => {
  return (
    <div className="other-exams-wrapper">
      <h2 className="other-exams-title">POPULAR EXAMS</h2>
      <ul className="exam-list">
        {exams.map((exam, index) => (
          <li className="exam-item" key={index}>
            <img src={exam.img} alt={exam.name} className="exam-logo" />
            <span className="exam-name">{exam.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Otherexams;

