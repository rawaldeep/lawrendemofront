import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function Chatbotassistant() {
    return (
        <>
           <BlogNav/>
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Web Chatbot Assistant</h1>
           {/* <img src={require("../../../images/website-chatbot-assiatant.png")}/> */}
           <div className="row">
               <div className="col-md-6">
               <img className="innerPageImage" alt="website chatbot assistant" src={require("../../../../../images/website-chatbot-assistant-1.png")}/>
               </div>
               <div className="col-md-6">
                   <h3>Pour le client</h3>
                   <ul>
                       <li>Le chatbot pose quelques questions à votre client et clarifie son problème juridique.</li>
                       <li>Lawren souligne votre expertise et décrit votre façon de travailler.</li>
                       <li>Votre client peut immédiatement prendre rendez-vous avec l'avocat spécialisé dans sonaffaire juridique.</li>
                   </ul>
                   <h3>Pour le cabinet d'avocats</h3>
                   <ul>
                       <li>Peut être installé sur le site web de votre cabinet d'avocats.</li>
                       <li>Personnalisé selon vos souhaits.</li>
                       <li>L'avocat qui se spécialise dans le problème du client reçoit un courriel avec une note de service.</li>
                   </ul>
                   <button className="btn btn-light demo">Planifier une démo</button>
               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="website interaction" src={require("../../../../../images/website-interaction.png")}/></div> <br/>
                           Interaction avec le site Web
                        </li>
                       <li>
                       <div className="text-center"><img alt="guide your customers" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>
                       Guidez vos clients vers le bon avocat</li>
                       <li>
                       <div className="text-center"><img alt="highlight your expertise" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>
                       Mettez en valeur vos compétences</li>
                       <li>
                       <div className="text-center"><img alt="calender tool" src={require("../../../../../images/calendar-tool.png")}/></div> <br/>
                       outil calendrier</li>
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
