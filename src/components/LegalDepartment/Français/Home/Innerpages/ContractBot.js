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
                       <li>Garantir l'uniformité et la conformité des contrats dans votre entreprise.</li>
                       <li>Réduire le temps nécessaire à la rédaction des contrats.</li>
                       <li>Augmenter l'efficacité</li>
                       <li>Le chatbot déclare automatiquement le contrat à l'entreprise ou au client.</li>
                   </ul>
                   <p className="lead">Votre service juridique a-t-il déjà reçu des modifications de contrat douteuses de la partde votre service spécialisé ? Souvent, "Business" négocie des conditions contractuellesspécifiques qui ne sont pas toujours conformes.</p>
                   <p>Le chatbot du contrat lawren.io veille à ce que la conformité soit garantie à tout moment. Un service juridique peut définir les règles de base, tandis que les services spécialisés peuvent adapter le contrat dans des limites prédéfinies. Prenez en main la gestion des risques.</p>
                   <p className="lead">Votre service juridique est-il surchargé de questions juridiques récurrentes, qu'elles émanent d'employés internes ou de fournisseurs ou clients externes ?</p>
                   <p>Voici Lawren.io, un chatbot AI qui peut répondre à des questions juridiques récurrentes.Et ne vous inquiétez pas, si le chatbot légal ne connaît pas la réponse, nous avons unesolution !</p>
                   <button className="btn btn-light">Planifier une démo</button>
               </div>
               <div className="col-md-6">
                   <div className="text-center lead">Renforcez les contrats propres de votre cabinet</div>
                   <img className="innerPageImage" alt="contractbot" src={require("../../../../../images/Conversation-copy-sent-straight-to-lawyer.png")}/>
               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="involve your customer" src={require("../../../../../images/website-interaction.png")}/></div> <br/>Impliquez vos clients
                        </li>
                       <li>
                       <div className="text-center"><img alt="explain legal clauses" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>Explication des clauses légales
                       </li>
                       <li>
                       <div className="text-center"><img alt="automatic contract outcome" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>Résultat automatique du contrat</li>
                       
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
