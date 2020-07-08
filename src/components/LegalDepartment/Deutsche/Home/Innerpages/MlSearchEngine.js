import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function MlSearchEngine() {
    return (
        <>
           <BlogNav/> 
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Intelligente juristische Suchmaschine</h1>
           {/* <img src={require("../../../images/website-chatbot-assiatant.png")}/> */}
           <div className="row">
               <div className="col-md-6">
               <p className="lead">Nach dem Kunden-Chat mit dem Website-Chatbot</p>
               <h3>Für die Anwaltskanzlei</h3>
                   <ul>
                       <li>Erhalten Sie ein Menü mit wichtigen Informationen zum aktuellen Thema.</li>
                       <li>Unser KI-Algorithmus bietet Ihnen relevante Rechtsquellen wie Fallrecht und Gesetzgebung.</li>
                       <li>Automatischer Aufruf ähnlicher interner Dokumente und Fälle</li>
                       <li>Suchen wie ein Profi: Unser KI-Algorithmus ist selbstlernend und sorgt dafür, dassIhre Ergebnisse mit der Zeit immer besser werden.</li>
                   </ul>
                <h3>Für den Kunden</h3>
                <ul>
                    <li>Der Anwalt hat Ihr Memo erhalten und ist auf das erste Treffen vorbereitet.</li>
                    <li>Kürzere und wesentlich effizientere Erstbesprechung</li>
                </ul>
                   <button className="btn btn-light">Eine Demo vereinbaren</button>
               </div>
               <div className="col-md-6">
               <p className="lead">Lawren.io als interne Suchmaschine verwenden</p>
               <h3>Für die Anwaltskanzlei</h3>
                   <ul>
                       <li>Alle Dokumente und Scans Ihres Unternehmens stehen Ihnen zur Verfügung, indexiert und durchsuchbar.</li>
                       <li>Finden Sie mühelos vergangene Fälle, Dokumente oder Kundenakten.</li>
                       <li>Effizienzsteigerung</li>
                       <li>Finden Sie ähnliche interne Fälle ohne Aufwand.</li>
                   </ul>
                   <p className="lead">Fügen Sie diese Ergebnisse in die Datei Ihres Kunden ein, noch bevor Sie ihn getroffen haben.</p>

               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="memo woth customer info" src={require("../../../../../images/website-interaction.png")}/></div> <br/>Memo mit Kundeninformationen
                        </li>
                       <li>
                       <div className="text-center"><img alt="public sorces" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>Öffentliche Quellen
                       </li>
                       <li>
                       <div className="text-center"><img alt="internal sorces" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>Interne Quellen</li>
                       
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
