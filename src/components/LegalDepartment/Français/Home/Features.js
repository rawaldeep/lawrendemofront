import React from 'react'
import { Link } from 'react-router-dom';

export default function Features() {
    return (
        <>
             <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 features p-5" id="Features">
            <div className="line pb-4">
              <h2 className="text-white">Caractéristiques</h2>
            </div>
            <p className="lead text-white">Lawren.io se compose de 3 fonctions principales conçues pour travailler ensemble de manière transparente. Cependant, ils peuvent aussi être utilisés individuellement, selonles besoins de votre entreprise.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row featurecards p-3 pr-5 text-center">
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                {/* <img class="card-img-top" src="./images/7fd84e1d-134a-40e5-a071-45aab492e4b3.jpg" alt="Card image cap"> */}
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Assistant Chatbot</strong>
                  </h6>
                  <p className="card-text text-justify">Notre Chatbot intelligent vous aide à clarifier le problème juridique de votre client et à expliquer votre méthode de travail.</p>
                </div>
                <div className="card-footer">
                  <Link to="/lawyer/fr/chatbotassistant" className="btn btn-primary">En savoir plus</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Contrat chatbot</strong></h6>
                  <p className="card-text text-justify">Laissez vos clients interagir avec notre offre de contrat. Lawren.io génère automatiquement votre contrat afin que vous puissiez vous concentrer sur l'examen et l'apport de modifications spécifiques aux avocats.</p>
                </div>
                <div className="card-footer">
                <Link to="/lawyer/fr/contractbot" className="btn btn-primary">En savoir plus</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Moteur de recherche juridique ML</strong></h6>
                  <p className="card-text text-justify">Obtenez automatiquement des résultats juridiques (sources internes et externes) en fonction du problème juridique de votre client......</p>
                </div>
                <div className="card-footer">
                <Link to="/lawyer/fr/mlsearchengine" className="btn btn-primary">En savoir plus</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
