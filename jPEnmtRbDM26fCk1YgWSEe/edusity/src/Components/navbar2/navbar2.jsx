// import React from "react";
// import "./navbar2.css";

// const Navbar2 = () => {
//   const navItems = ["Location", "Ranking", "Admission", "Placement", "Fees", "Reviews"];

//   return (
//     <nav className="custom-navbar">
//       {navItems.map((item, index) => (
//         <React.Fragment key={item}>
//           <div className="nav-item">
//             {item}
//           </div>
//           {index !== navItems.length - 1 && <div className="divider" />}
//         </React.Fragment>
//       ))}
//     </nav>
//   );
// };

// export default Navbar2;
// Navbar2.jsx

import React from "react";
import "./navbar2.css";

const Navbar2 = () => {
  const navItems = ["Overview","Location", "Ranking", "Admission", "Placement", "Fees", "Reviews"];

  return (
    <nav className="custom-navbar">
      {navItems.map((item, index) => (
        <div key={item} className="nav-item-wrapper">
          <div className="nav-item">{item}</div>
          {/* {index !== navItems.length - 1 && <div className="divider" />} */}
        </div>
      ))}
    </nav>
  );
};

export default Navbar2;
