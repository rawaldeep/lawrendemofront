import React from 'react'
import { Link } from 'react-router-dom';

export default function Features() {
    return (
        <>
             <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 features p-5" id="Features">
            <div className="line pb-4">
              <h2 className="text-white">Funktionen</h2>
            </div>
            <p className="lead text-white">Lawren.io besteht aus 3 Hauptfunktionen, die so konzipiert sind, dass sie nahtlos zusammenarbeiten. Sie können jedoch auch einzeln verwendet werden, je nach den Bedürfnissen Ihres Unternehmens.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row featurecards p-3 pr-5 text-center">
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                {/* <img class="card-img-top" src="./images/7fd84e1d-134a-40e5-a071-45aab492e4b3.jpg" alt="Card image cap"> */}
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Chatbot-Assistent</strong>
                  </h6>
                  <p className="card-text text-justify">Unser intelligenter Chatbot hilft Ihnen, das rechtliche Problem Ihres Kunden zu klären und Ihre Arbeitsweise zu erläutern.</p>
                </div>
                <div className="card-footer">
                  <Link to="/lawyer/de/chatbotassistant" className="btn btn-primary">Mehr Erfahren</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Vertrags chatbot</strong></h6>
                  <p className="card-text text-justify">Lassen Sie Ihre Kunden mit unserem Vertragsbot interagieren. Lawren.io generiert Ihren Vertrag automatisch, so dass Sie sich auf die Überprüfung und die anwaltsspezifischen Änderungen konzentrieren können.</p>
                </div>
                <div className="card-footer">
                <Link to="/lawyer/de/contractbot" className="btn btn-primary">Mehr Erfahren</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>ML Juristische Suchmaschine</strong></h6>
                  <p className="card-text text-justify">Erhalten Sie automatisch rechtliche Ergebnisse (sowohl interne als auch externe Quellen), basierend auf dem rechtlichen Problem Ihres Kunden....</p>
                </div>
                <div className="card-footer">
                <Link to="/lawyer/de/mlsearchengine" className="btn btn-primary">Mehr Erfahren</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
