import React from 'react';
import { Link } from 'react-router-dom';

export default function Benefits() {
    return (
        <>
           <section className="container-fluid">
          <div className="row benefits"  id="benefits">
            <div className="col-md-8 p-5">
              <div className="line pb-4">
                <h2 className="text-white">Pourqoi Lawren.io?</h2>
              </div>
              <p className="lead text-white">Lawren.io redonne le cœur du métier aux avocats.</p>
            </div>
            <div className="col-md-4">
              <div className="p-3 pr-5 text-center">
                <div className="p-1">
                  <img alt="generate extra revenue" src={require("../../../../images/generate-extra-revenue.png")} />
                </div>
                <p className="text-center text-white">Générez des revenus supplémentaires</p>
                {/* <Link to="/lawyer/fr/#calculate" className="btn btn-light">Calculez vos avantages</Link> */}
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
              <p className="text-center">Attendez plus de clients sans effort supplémentaire</p>
            </div>
            <div className="col">
              <div className="text-center p-3">
                <img alt="simplify" src={require("../../../../images/simplify.png")} />
              </div>
              <p className="text-center">Simplifiez l’admission/orientation de nouveaux clients et gagnez du temps Avg. 60 hours/month</p>
            </div>
            <div className="col">
              <div className="text-center p-3">
                <img alt="automate daily tasks" src={require("../../../../images/automate-daily-tasks.png")} />
              </div>
              <p className="text-center">Automatisez des travaux quotidiens et augmentez le temps d’expertise</p>
            </div>
          </div>
        </section> 
        </>
    )
}
