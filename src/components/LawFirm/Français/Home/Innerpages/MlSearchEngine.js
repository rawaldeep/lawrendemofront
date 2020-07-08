import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function MlSearchEngine() {
    return (
        <>
           <BlogNav/> 
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Moteur de recherche juridique intelligent</h1>
           {/* <img src={require("../../../images/website-chatbot-assiatant.png")}/> */}
           <div className="row">
               <div className="col-md-6">
               <p className="lead">Après le chat client avec le chatbot du site web</p>
               <h3>Pour le cabinet d'avocats</h3>
                   <ul>
                       <li>Obtenez un menu avec des informations importantes sur le sujet en cours.</li>
                       <li>Notre algorithme d'IA vous offre des sources juridiques pertinentes telles que la jurisprudence et la législation.</li>
                       <li>Récupération automatique de documents et d'affaires internes similaires</li>
                       <li>Rechercher comme un pro : Notre algorithme d'IA est autoapprentissage et assure que vos résultats s'améliorent avec le temps.</li>
                   </ul>
                <h3>Pour le client</h3>
                <ul>
                    <li>L'avocat a reçu votre note de service et est prêt pour la première rencontre.</li>
                    <li>Rencontre initiale plus courte et beaucoup plus efficace</li>
                </ul>
                   <button className="btn btn-light">Planifier une démo</button>
               </div>
               <div className="col-md-6">
               <p className="lead">Utiliser Lawren.io comme moteur de recherche interne</p>
               <h3>Pour le cabinet d'avocats</h3>
                   <ul>
                       <li>Tous les documents et scans de votre entreprise sont à votre disposition, indexés et consultables.</li>
                       <li>Retrouvez facilement les dossiers passés, les documents ou les dossiers des clients.</li>
                       <li>Augmenter l'efficacité</li>
                       <li>Trouvez des cas internes similaires sans effort..</li>
                   </ul>
                   <p className="lead">Ajoutez ces résultats au dossier de votre client avant de le rencontrer.</p>

               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="memo woth customer info" src={require("../../../../../images/website-interaction.png")}/></div> <br/>Mémo avec informations client
                        </li>
                       <li>
                       <div className="text-center"><img alt="public sorces" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>Expressions publiques
                       </li>
                       <li>
                       <div className="text-center"><img alt="internal sorces" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>Sources internes</li>
                       
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
