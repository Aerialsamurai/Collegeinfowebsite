import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from "react-scroll";
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Title from './Components/Title/Title'
import Navbar2 from './Components/navbar2/navbar2'
import Location from './Components/Locationtemp/location'
import Overview from './Components/Overview/overview'
import Review from './Components/Review/review'
import Sehom from './Components/Seathome/seathome'
import Cuthom from'./Components/Cuthome/cuthome'
import Footer from './Components/Footer/Footer'
import Seatmatrix from './Components/Seatmatrix/seatmatrix'
import Cutoff from './Components/Cutoff/cutoff'
import Ranking from './Components/Rankings/rank'
import Fees from './Components/Fees/fees'
import Admission from'./Components/Admission/admission'
import Placement from './Components/Placement/placement'
import Mainlayout from './Components/Mainlayout/mainlayout'

const App = () => {

  

  return (
      
      <Routes>
        {/*  Route for homepage */}
        <Route path="/" element={
    <div>
     <Navbar/>
     <Hero/>
     <Navbar2/>
    
     <Mainlayout>
     <Element name="Overview"><Overview/></Element>

     <Element name="Location"><Location/></Element>
     

     <Element name="Fees"><Fees/></Element>

     <Element name="Ranking"><Ranking/></Element>
     <Element name="Seat Matrix"><Sehom/></Element>
     <Element name="Cutoffs"><Cuthom/></Element>
     

     <Element name="Admission"><Admission/></Element>
     <Element name="Placement"><Placement/></Element>
     </Mainlayout>
     
     <div className="container">
       <Title subTitle='REVIEWS' title='What Student Says'/>
       
     </div>
      <Element name="Reviews"><Review/></Element>
        
       
        <Footer/>
   
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