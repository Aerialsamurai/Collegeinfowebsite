import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Element } from "react-scroll";

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Title from './Components/Title/Title';
import Navbar2 from './Components/navbar2/navbar2';
import Location from './Components/Locationtemp/location';
import Overview from './Components/Overview/overview';
import Review from './Components/Review/review';
import Sehom from './Components/Seathome/seathome';
import Cuthom from './Components/Cuthome/cuthome';
import Footer from './Components/Footer/Footer';
import Seatmatrix from './Components/Seatmatrix/seatmatrix';
import Cutoff from './Components/Cutoff/cutoff';
import Ranking from './Components/Rankings/rank';
import Fees from './Components/Fees/fees';
import Admission from './Components/Admission/admission';
import Placement from './Components/Placement/placement';
import Mainlayout from './Components/Mainlayout/mainlayout';
import Cutoff2024 from './Components/Cutoff2024/cutoff2024';
import Cutoff2023 from './Components/Cutoff2023/cutoff2023';

const App = () => {
  return (
    <Routes>
      {/* Homepage route */}
      <Route path="/" element={
        <div>
          <Navbar />
          <Hero />
          <Navbar2 />

          <Mainlayout>
            <Element name="Overview"><Overview /></Element>
            <Element name="Location"><Location /></Element>
            <Element name="Fees"><Fees /></Element>
            <Element name="Ranking"><Ranking /></Element>
            <Element name="Seat Matrix"><Sehom /></Element>
            <Element name="Cutoffs"><Cuthom /></Element>
            <Element name="Admission"><Admission /></Element>
            <Element name="Placement"><Placement /></Element>
          </Mainlayout>

          <div className="container">
            <Title subTitle='REVIEWS' title='What Student Says' />
          </div>
          <Element name="Reviews"><Review /></Element>
          <Footer />
        </div>
      } />

      {/* Seat Matrix page */}
      <Route path="/Seatmatrix" element={<Seatmatrix />} />

      {/* Cutoff pages */}
      <Route path="/Cutoff" element={<Cutoff />} />
      <Route path="/cutoff2024" element={<Cutoff2024 />} />
      <Route path="/cutoff2023" element={<Cutoff2023 />} />
    </Routes>
  );
};

export default App;
