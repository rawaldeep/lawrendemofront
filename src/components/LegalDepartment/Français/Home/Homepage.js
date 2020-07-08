import React from 'react';
import Navigation from '../Navigation/Nav';
import MobileHome from './MobileHome';
import Front from './Front';
import Partners from './Partners';
import Features from './Features';
import Clientquotes from './Clientquotes copy';
import Benefits from './Benefits';
import Benefitscalculator from './Benefitscalculator';
import Blog from './Blog';
import Footer from '../Footer/Footer';
import Team from './Team copy';
import Contactsection from './Contactsection';
import '../../../../App.css';


function Homepage() { 
  let width = window.innerWidth; 
  if(width > 768){
    return (
      <div className="App">
        <Navigation/>
        <Front/>
        <Partners/>
        <Features/>
        <Clientquotes/>
        <Benefits/>
        {/* <Benefitscalculator/> */}
        <Blog/>
        <Team/>
        <Contactsection/>
        <Footer/>
      </div>
    );
  }
  else{
    return <MobileHome/>
  }
  
}

export default Homepage;
