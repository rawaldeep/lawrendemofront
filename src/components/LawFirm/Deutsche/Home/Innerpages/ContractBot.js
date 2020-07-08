import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function ContractBot() {
    return (
        <>
           <BlogNav/> 
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Contract Chatbot</h1>
           <div className="row">
               <div className="col-md-6">
                   <ul>
                       <li>Sicherstellung einheitlicher, konformer Verträge in Ihrem Unternehmen</li>
                       <li>Reduzieren Sie die Zeit für die Vertragsgestaltung.</li>
                       <li>Effizienzsteigerung</li>
                       <li>Der Chatbot erklärt den Vertrag automatisch dem Unternehmen oder den Kunden.</li>
                   </ul>
                   <p className="lead">Hat Ihre Rechtsabteilung jemals fragwürdige Vertragsänderungen von Ihrer Fachabteilung erhalten? Häufig verhandelt "Business" spezifische Vertragsbedingungen, die nicht immer konform sind.</p>
                   <p>Der lawren.io Vertrags-Chatbot stellt sicher, dass die Compliance jederzeit gewährleistet ist. Eine Rechtsabteilung kann die Grundregeln festlegen, während die Fachabteilungen den Vertrag innerhalb vorgegebener Grenzen anpassen können. Nehmen Sie das Risikomanagement in Ihre Hände.</p>
                   <p className="lead">Ist Ihre Rechtsabteilung mit immer wiederkehrenden Rechtsfragen überfordert, sei es von internen Mitarbeitern oder von externen Lieferanten oder Kunden?</p>
                   <p>Treffen Sie Lawren.io, einen KI-Chatbot, der wiederkehrende Rechtsfragen beantworten kann. Und keine Sorge, wenn der juristischer Chatbot die Antwort nicht kennt, wir haben eine Lösung dafür!</p>
                   <button className="btn btn-light">Eine Demo vereinbaren</button>
               </div>
               <div className="col-md-6">
                   <div className="text-center lead">Stärkung der Vereinbarungen Ihrer eigenen Anwaltskanzlei</div>
               <img className="innerPageImage" alt="contractbot" src={require("../../../../../images/Conversation-copy-sent-straight-to-lawyer.png")}/>
               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="involve your customer" src={require("../../../../../images/website-interaction.png")}/></div> <br/>Binden Sie Ihre Kunden ein
                        </li>
                       <li>
                       <div className="text-center"><img alt="explain legal clauses" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>Erläuterung der Rechtsklauseln
                       </li>
                       <li>
                       <div className="text-center"><img alt="automatic contract outcome" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>automatisches Vertragsergebnis</li>
                       
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
