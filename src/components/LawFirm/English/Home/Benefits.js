import React from 'react';
import { Link } from 'react-router-dom';

export default function Benefits() {
    return (
        <>
           <section className="container-fluid">
          <div className="row benefits"  id="benefits">
            <div className="col-md-8 p-5">
              <div className="line pb-4">
                <h2 className="text-white">Benefits</h2>
              </div>
              <p className="lead text-white">Lawren.io Business brings a lot more efficiency to your legal department.</p>
            </div>
            <div className="col-md-4">
              <div className="p-3 pr-5 text-center">
                <div className="p-1">
                  <img alt="generate extra revenue" src={require("../../../../images/generate-extra-revenue.png")} />
                </div>
                <p className="text-center text-white">Generating additional revenue</p>
                <Link to="/lawyer/en/#calculate" className="btn btn-light">Calculate your benefits</Link>
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
              <p className="text-center">Get more customers without extra effort</p>
            </div>
            <div className="col">
              <div className="text-center p-3">
                <img alt="simplify" src={require("../../../../images/simplify.png")} />
              </div>
              <p className="text-center">Simplify your customer intake and save time. 60 hours/month average</p>
            </div>
            <div className="col">
              <div className="text-center p-3">
                <img alt="automate daily tasks" src={require("../../../../images/automate-daily-tasks.png")} />
              </div>
              <p className="text-center">Automate daily tasks and increase expert time</p>
            </div>
          </div>
        </section> 
        </>
    )
}
