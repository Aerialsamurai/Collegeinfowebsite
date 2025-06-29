import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import Extra from './Components/extratemp/extra';
import Navbar2 from './Components/navbar2/navbar2';
import Location from './Components/Locationtemp/location';
import Overview from './Components/Overview/overview';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import Seatmatrix from './Components/Seatmatrix/seatmatrix';
import Cutoff from './Components/Cutoff/cutoff';
import Ranking from './Components/Rankings/rank';
import Placement from './Components/placement/placement'; // now embedded in home

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Navbar />
            <Hero />
            <Navbar2 />
            <Extra />
            <Overview />
            <Location />
            <Ranking />
            <div id="placement">
              <Placement />
            </div>
            <Title subTitle="Gallery" title="Campus Photos" />
            <Campus />
            <About setPlayState={setPlayState} />
            <Title subTitle="Our PROGRAM" title="What We Offer" />
            <Programs />
            <Title subTitle="TESTIMONIALS" title="What Student Says" />
            <Testimonials />
            <Title subTitle="Contact Us" title="Get in Touch" />
            <Contact />
            <Footer />
            <VideoPlayer playState={playState} setPlayState={setPlayState} />
          </div>
        }
      />
      <Route path="/Seatmatrix" element={<Seatmatrix />} />
      <Route path="/Cutoff" element={<Cutoff />} />
    </Routes>
  );
};

export default App;
