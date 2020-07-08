import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function Chatbotassistant() {
    return (
        <>
           <BlogNav/>
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Website Chatbot Assistent</h1>
           {/* <img src={require("../../../images/website-chatbot-assiatant.png")}/> */}
           <div className="row">
               <div className="col-md-6">
               <img className="innerPageImage" alt="website chatbot assistant" src={require("../../../../../images/website-chatbot-assistant-1.png")}/>
               </div>
               <div className="col-md-6">
                   <h3>Voor de klant</h3>
                   <ul>
                       <li>De chatbot stelt uw klant een paar vragen en <strong>verduidelijkt zijn juridisch probleem</strong></li>
                       <li>Lawren.io <strong>markeert uw expertise en beschrijft uw werkwijze</strong></li>
                       <li>Uw klant kan meteen een afspraak maken met de advocaat die gespecialiseerd is in zijn juridische kwestie</li>
                   </ul>
                   <h3>Voor het advocatenkantoor</h3>
                   <ul>
                       <li>Kan op de website van uw advocatenkantoor worden geïnstalleerd</li>
                       <li>Gepersonaliseerd op basis van uw bedrijfsidentiteit</li>
                       <li>De advocaat die gespecialiseerd is in het probleem van de klant ontvangt een e-mail met een memo</li>
                   </ul>
                   <button className="btn btn-light demo">Een demo plannen</button>
               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="website interaction" src={require("../../../../../images/website-interaction.png")}/></div> <br/>
                           Website-interactie
                        </li>
                       <li>
                       <div className="text-center"><img alt="guide your customers" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>
                       Leid uw klant naar de juiste advocaat</li>
                       <li>
                       <div className="text-center"><img alt="highlight your expertise" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>
                       Markeer uw expertise</li>
                       <li>
                       <div className="text-center"><img alt="calender tool" src={require("../../../../../images/calendar-tool.png")}/></div> <br/>
                       Kalender tool</li>
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
