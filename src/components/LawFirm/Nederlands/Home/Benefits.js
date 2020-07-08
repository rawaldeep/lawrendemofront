import React from 'react';
import { Link } from 'react-router-dom';

export default function Benefits() {
    return (
        <>
           <section className="container-fluid">
          <div className="row benefits"  id="benefits">
            <div className="col-md-8 p-5">
              <div className="line pb-4">
                <h2 className="text-white">Voordelen</h2>
              </div>
              <p className="lead text-white">Lawren.io geeft de core business terug aan de advocaten.</p>
            </div>
            <div className="col-md-4">
              <div className="p-3 pr-5 text-center">
                <div className="p-1">
                  <img alt="generate extra revenue" src={require("../../../../images/generate-extra-revenue.png")} />
                </div>
                <p className="text-center text-white">Extra inkomsten genereren</p>
                <Link to="/lawyer/nl/#calculate" className="btn btn-light">Bereken uw Voordelen</Link>
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
              <p className="text-center">Krijg meer klanten zonder extra moeite</p>
            </div>
            <div className="col">
              <div className="text-center p-3">
                <img alt="simplify" src={require("../../../../images/simplify.png")} />
              </div>
              <p className="text-center">Vereenvoudig uw klanten-inname en bespaar tijd Gem. 60 uur/maand</p>
            </div>
            <div className="col">
              <div className="text-center p-3">
                <img alt="automate daily tasks" src={require("../../../../images/automate-daily-tasks.png")} />
              </div>
              <p className="text-center">Automatiseer dagelijkse taken en verhoog de tijd van experts</p>
            </div>
          </div>
        </section> 
        </>
    )
}
