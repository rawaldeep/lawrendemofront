import React from 'react';
import { Link } from 'react-router-dom';

export default function Benefits() {
    return (
        <>
           <section className="container-fluid">
          <div className="row benefits"  id="benefits">
            <div className="col-md-8 p-5">
              <div className="line pb-4">
                <h2 className="text-white">Vorteile</h2>
              </div>
              <p className="lead text-white">Lawren.io gibt das Kerngeschäft an die Anwälte zurück.</p>
            </div>
            <div className="col-md-4">
              <div className="p-3 pr-5 text-center">
                <div className="p-1">
                  <img alt="generate extra revenue" src={require("../../../../images/generate-extra-revenue.png")} />
                </div>
                <p className="text-center text-white">Generierung von Zusatzerlösen</p>
                <Link to="/lawyer/en/#calculate" className="btn btn-light">Berechnen Sie Ihre Vorteile</Link>
              </div>
            </div>
          </div>
        </section>
        <section className="container-fluid pt-5">
          <div className="row p-3 mt-5 color">
            <div className="col">
              <div className="text-center p-3">
                <img alt="get more customers" src={require("../../../../images/get-more-customers.png")} />
              </div>
              <p className="text-center">Mehr Kunden ohne zusätzlichen Aufwand gewinnen</p>
            </div>
            <div className="col">
              <div className="text-center p-3">
                <img alt="simplify" src={require("../../../../images/simplify.png")} />
              </div>
              <p className="text-center">Vereinfachen Sie Ihre Kundenansprache und sparen Sie Zeit. 60 Stunden/Monat Durchschnitt</p>
            </div>
            <div className="col">
              <div className="text-center p-3">
                <img alt="automate daily tasks" src={require("../../../../images/automate-daily-tasks.png")} />
              </div>
              <p className="text-center">Automatisierung der täglichen Aufgaben und Erhöhung der Expertenzeit</p>
            </div>
          </div>
        </section> 
        </>
    )
}
