import React from 'react';
import Frontmobile from './FrontMobile';
import Partners from './Partners';
import Features from './Features';
import Clientquotes from './Clientquotes copy';
import Benefits from './Benefits';
import Benefitscalculator from './Benefitscalculator';
import Blog from './Blog';
import Footer from '../Footer/Footer';
import Team from './Team copy';
import Contactsection from './Contactsection';
import '../../App.css';
import MobileNav from '../Navigation/MobileNav';

export default function MobileHome() {
    return (
        <div className="App">
        <div id="outer-container">
        <MobileNav />
        <main id="page-wrap">
        <Frontmobile/>
        <Partners/>
        <Features/>
        <Clientquotes/>
        <Benefits/>
        <Benefitscalculator/>
        <Blog/>
        <Team/>
        <Contactsection/>
        <Footer/>
        </main>
        </div>
      </div>
    )
}
