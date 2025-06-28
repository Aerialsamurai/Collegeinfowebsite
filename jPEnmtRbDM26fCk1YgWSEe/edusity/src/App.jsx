import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import Extra from './Components/extratemp/extra'
import Navbar2 from './Components/navbar2/navbar2'
import Location from './Components/Locationtemp/location'
import Overview from './Components/Overview/overview'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import Seatmatrix from './Components/Seatmatrix/seatmatrix'
import Cutoff from './Components/Cutoff/cutoff'
import Ranking from './Components/Rankings/rank'
import Admission from './Components/Admission/Admission'
const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <Routes>
        {/*  Route for homepage */}
        <Route path="/" element={
    <div>
     <Navbar/>
      <Hero/>
          <Extra/>
        
        <Overview/>
        <Title subTitle='Gallery' title='Campus Photos'/>
        <Campus/>
        <About setPlayState={setPlayState}/>
        <Location/>
        <Title subTitle='Ranking' title='Recognized by NIRF, QS, and more'/>
        <Ranking/>
      <div className="container">
        <Admission/>
        <Title subTitle='Our PROGRAM' title='What We Offer'/>
          <Programs/>
          
          <Title subTitle='TESTIMONIALS' title='What Student Says'/>
          <Testimonials/>
          <Title subTitle='Contact Us' title='Get in Touch'/>
          <Contact/>
          <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
    }/>
    {/*  Route for SeatMatrix page */}
        <Route path="/Seatmatrix" element={<Seatmatrix />} />

        {/*  Route for Cutoffs page */}
        <Route path="/Cutoff" element={<Cutoff />} />
      </Routes>
  )
}

export default App
