import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function ContractBot() {
    return (
        <>
           <BlogNav/> 
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Intelligente Contract Bot</h1>
           <div className="row">
               <div className="col-md-6">
               <h3>Voor de klant</h3>
                   <ul>
                       <li>Beantwoord de eenvoudige vragen van Lawren.io thuis op je bank & 24/7</li>
                       <li>Vraag Lawren.io om uitleg als een juridische term onduidelijk is</li>
                       <li>Na de chat wordt het contract opgesteld</li>
                   </ul>
                   <h3>Voor de advocaat</h3>
                   <ul>
                       <li>Automatiseer terugkerende contract vragen</li>
                       <li>Ontvang het contract met alle klantinvoer direct geïntegreerd</li>
                       <li>Bespaar tijd en geld</li>
                   </ul>
                   <p className="lead">Het contract zal voor 80% worden afgerond, zodat de advocaat zich kan concentreren op werk waar hij echt waarde toevoegt</p>
                   <button className="btn btn-light">Schedule a demo</button>
               </div>
               <div className="col-md-6">
                   <div className="text-center lead">Versterk de overeenkomsten van uw eigen advocatenkantoor</div>
                   <img className="innerPageImage" alt="contractbot" src={require("../../../../../images/Conversation-copy-sent-straight-to-lawyer.png")}/>
               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="involve your customer" src={require("../../../../../images/website-interaction.png")}/></div> <br/>Betrek uw klant
                        </li>
                       <li>
                       <div className="text-center"><img alt="explain legal clauses" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>Leg de juridische bepalingen uit
                       </li>
                       <li>
                       <div className="text-center"><img alt="automatic contract outcome" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>Automatische contractresultaten</li>
                       
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
