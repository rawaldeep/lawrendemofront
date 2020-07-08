import React from 'react'
import { Link } from 'react-router-dom';

export default function Features() {
    return (
        <>
             <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 features p-5" id="Features">
            <div className="line pb-4">
              <h2 className="text-white">Features</h2>
            </div>
            <p className="lead text-white">Lawren.io consists of 3 main features that are designed to work seamlessly together. Yet, they can be used standalone according to your firm’s needs.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row featurecards p-3 pr-5 text-center">
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-header cardhead"><strong>Chatbot Assistant</strong></div>
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Automate customer intake and be prepared for a 1st meeting</strong>
                  </h6>
                  <p className="card-text text-justify">Our legal AI chatbots make your law firm available 24/7. It provides your client with basic 1st line upfront and lets them schedule a demo. This all for you to be prepared for your first meeting.</p>
                </div>
                <div className="card-footer">
                  <Link to="/lawyer/en/chatbotassistant" className="btn btn-primary">Read more</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-header cardhead"><strong>Contract chatbot</strong></div>
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Document generation which involves your client</strong></h6>
                  <p className="card-text text-justify">Our contract bot involves your client by asking questions regarding the agreement. It explains any possible unclarities and generates a contract based on the client’s preferences.</p>
                </div>
                <div className="card-footer">
                <Link to="/lawyer/en/contractbot" className="btn btn-primary">Read more</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-header cardhead"><strong>ML Legal search engine</strong></div>
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Legal search results immediately at your fingertips</strong></h6>
                  <p className="card-text text-justify">Our legal search engine provides you with search results  such as caselaw, legislation and internal sources based on your customer’s legal issue. You can use this as starting point for your legal research process. </p>
                </div>
                <div className="card-footer">
                <Link to="/lawyer/en/mlsearchengine" className="btn btn-primary">Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
