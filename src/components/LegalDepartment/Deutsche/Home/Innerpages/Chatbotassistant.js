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
                   <h3>Für den Kunden</h3>
                   <ul>
                       <li>Der Chatbot stellt Ihrem Kunden ein paar Fragen und klärt sein rechtliches Problem.</li>
                       <li>Lawren hebt Ihre Expertise hervor und beschreibt Ihre Arbeitsweise.</li>
                       <li>Ihr Kunde kann sofort einen Termin mit dem auf seine Rechtsangelegenheit spezialisierten Anwalt vereinbaren.</li>
                   </ul>
                   <h3>Für die Anwaltskanzlei</h3>
                   <ul>
                       <li>Kann auf der Website Ihrer Kanzlei installiert werden.</li>
                       <li>Personalisiert nach Ihren Wünschen</li>
                       <li>Der auf das Problem des Kunden spezialisierte Anwalt erhält eine E-Mail mit einem Memo.</li>
                   </ul>
                   <button className="btn btn-light demo">Eine Demo vereinbaren</button>
               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="website interaction" src={require("../../../../../images/website-interaction.png")}/></div> <br/>
                           Interaktion mit der Website
                        </li>
                       <li>
                       <div className="text-center"><img alt="guide your customers" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>
                       Führen Sie Ihren Kunden zum richtigen Anwalt</li>
                       <li>
                       <div className="text-center"><img alt="highlight your expertise" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>
                       Heben Sie Ihre Kompetenz hervor</li>
                       <li>
                       <div className="text-center"><img alt="calender tool" src={require("../../../../../images/calendar-tool.png")}/></div> <br/>
                       Kalender-Tool</li>
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
