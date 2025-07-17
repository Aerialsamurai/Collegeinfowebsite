import React from "react";
import "./navbar2.css";
import { Link } from 'react-scroll';

const navLinks = [
  { label: 'Home', to: 'hero' },
  { label: 'Overview', to: 'overview' },
  { label: 'Location', to: 'location' },
  { label: 'Seat Matrix', to: 'seatmatrix' },
  { label: 'Cutoff', to: 'cutoff' },
  { label: 'Rankings', to: 'rankings' },
  { label: 'Fees', to: 'fees' },
  { label: 'Placement', to: 'placement' },
  { label: 'Past Recruiters', to: 'past-recruiters' },
  { label: 'Review', to: 'review' },
];

const Navbar2 = () => {
  return (
    <nav className="custom-navbar">
      {navLinks.map((item) => (
        <div key={item.to} className="nav2-item-wrapper">
          <Link
            to={item.to}
            smooth={true}
            offset={-160}
            duration={500}
            className="nav2-item"
            activeClass="active-nav2-item"
            spy={true}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Navbar2;
