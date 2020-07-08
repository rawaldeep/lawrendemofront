import React from 'react'
import { Link } from 'react-router-dom';

export default function Features() {
    return (
        <>
             <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 features p-5" id="Features">
            <div className="line pb-4">
              <h2 className="text-white">Kenmerken</h2>
            </div>
            <p className="lead text-white">Lawren.io bestaat uit 3 hoofdfuncties die zijn ontworpen om naadloos samen te werken. Toch kunnen ze stand-alone worden gebruikt volgens de behoeften van uw bedrijf.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row featurecards p-3 pr-5 text-center">
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-header cardhead"><strong>Website Chatbot-assistent</strong></div>
                {/* <img class="card-img-top" src="./images/7fd84e1d-134a-40e5-a071-45aab492e4b3.jpg" alt="Card image cap"> */}
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Automatiseer de intake van klanten en bereid u voor op een 1ste bijeenkomst.</strong>
                  </h6>
                  <p className="card-text text-justify">Onze slimme chatbot helpt verduidelijken het juridische probleem van uw client   en werpt licht op uw werkwijze.</p>
                </div>
                <div className="card-footer">
                  <Link to="/lawyer/nl/chatbotassistant" className="btn btn-primary">Lees meer</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-header cardhead"><strong>Intelligent Contract Bot</strong></div>
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Documentgeneratie waarbij uw klant betrokken is</strong></h6>
                  <p className="card-text text-justify">Laat uw klant communiceren met onze intelligente contractbot.   Lawren.io genereert automatisch uw contract , zodat u zich kunt concentreren op de beoordeling en specifieke wijzigingen van de advocaat.</p>
                </div>
                <div className="card-footer">
                <Link to="/lawyer/nl/contractbot" className="btn btn-primary">Lees meer</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-header cardhead"><strong>ML Legal Search Engine</strong></div>
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Wettelijke zoekresultaten onmiddellijk binnen handbereik</strong></h6>
                  <p className="card-text text-justify">Ontvang juridische resultaten automatisch (zowel interne als externe bronnen) op basis van het juridische probleem van uw klant. </p>
                </div>
                <div className="card-footer">
                <Link to="/lawyer/nl/mlsearchengine" className="btn btn-primary">Lees meer</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
