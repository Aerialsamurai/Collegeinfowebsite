
import React from "react";
import "./navbar2.css";
import { Link } from 'react-scroll';

const Navbar2 = () => {
  const navItems = ["Overview","Location", "Ranking", "Admission", "Placement", "Fees", "Reviews","Seat Matrix","Cutoffs"];

  return (
    <nav className="custom-navbar">
      {navItems.map((item, index) => (
        <div key={item} className="nav2-item-wrapper">
          {/* <div className="nav2-item">{item}</div> */}
           <Link
            to={item}                // must match the target section's "name" or "id"
            smooth={true}
            offset={-160}           // adjust this to your navbar height
            duration={500}
            className="nav2-item"
          >
            {item}
            </Link>
       
        </div>
      ))}
    </nav>
  );
};

export default Navbar2;
