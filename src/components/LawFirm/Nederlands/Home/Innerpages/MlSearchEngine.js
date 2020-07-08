import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function MlSearchEngine() {
    return (
        <>
           <BlogNav/> 
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Slimme juridische zoekmachine</h1>
           {/* <img src={require("../../../images/website-chatbot-assiatant.png")}/> */}
           <div className="row">
               <div className="col-md-6">
               <p className="lead">Na de klantchat met de website chatbot</p>
               <h3>For the law firm</h3>
                   <ul>
                       <li>Ontvang een <strong>memo met belangrijke informatie</strong> over het probleem</li>
                       <li>onse <strong>AI-algoritme</strong> biedt u <strong>relevante juridische bronnen</strong>, zoals jurisprudentie en wetgeving</li>
                       <li><strong>Automatisch</strong> oproepen voor vergelijkbare <strong>interne documenten en cases</strong></li>
                       <li>Zoek als een professional: ons AI-algoritme is <strong>zelflerend</strong> , zodat uw resultaten steeds beter en beter worden</li>
                   </ul>
                <h3>Voor de klant</h3>
                <ul>
                    <li>De advocaat heeft uw memo ontvangen en is <strong>voorbereid op de eerste vergadering</strong></li>
                    <li>Korter en veel <strong>efficiënter eerste vergadering</strong></li>
                </ul>
                   <button className="btn btn-light">Een demo plannen</button>
               </div>
               <div className="col-md-6">
               <p className="lead">Gebruik Lawren.io als een interne zoekmachine</p>
               <h3>For the law firm</h3>
                   <ul>
                       <li>Alle <strong>documenten en scans</strong> van uw bedrijf binnen handbereik, <strong>geïndexeerd en doorzoekbaar</strong>.</li>
                       <li><strong>Vind</strong> oudere cases, documenten of klantbestanden eenvoudig</li>
                       <li>Vind <strong>gelijkende</strong> interne <strong>cases</strong> zonder moeite.</li>
                   </ul>
                   <p className="lead">Voeg deze resultaten toe aan het bestand van uw klant voordat u hem heeft leren kennen.</p>
                   <img alt="memo woth customer info" className="mlextraimage" src={require("../../../../../images/lens.png")}/>
               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="memo woth customer info" src={require("../../../../../images/website-interaction.png")}/></div> <br/>Memo met klantinformatie
                        </li>
                       <li>
                       <div className="text-center"><img alt="public sorces" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>Publieke bronnen
                       </li>
                       <li>
                       <div className="text-center"><img alt="internal sorces" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>Interne bronnen</li>
                       
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
