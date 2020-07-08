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
            <p className="lead text-white">Lawren.io consists of 3 main features that are designed to work seamlessly together. Yet, they can be used standalone according to your company’s needs.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row featurecards p-3 pr-5 text-center">
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-header cardhead"><strong>Internal AI chatbot</strong></div>
                {/* <img class="card-img-top" src="./images/7fd84e1d-134a-40e5-a071-45aab492e4b3.jpg" alt="Card image cap"> */}
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Automate recurring legal questions to the legal department</strong>
                  </h6>
                  <p className="card-text text-justify">
                  Let your employees ask questions on internal policies, GDPr, etc. while you can focus on your core business.</p>
                </div>
                <div className="card-footer">
                  <Link to="/legaldepartment/en/chatbotassistant" className="btn btn-primary">Read more</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-header cardhead"><strong>Document generation chatbot</strong></div>
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Ensure uniform compliant contracts within your company</strong></h6>
                  <p className="card-text text-justify">
                  Enable business users to generate compliant agreements while the chatbot explains possible unclarities</p>
                </div>
                <div className="card-footer">
                <Link to="/legaldepartment/en/contractbot" className="btn btn-primary">Read more</Link>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-header cardhead">
                <strong>Internal Document Finder</strong>
                </div>
                <div className="card-body">
                  <h6 className="card-title text-left"><strong>Use the chatbot to find legal documents in no time</strong></h6>
                  <p className="card-text text-justify">
                  Stop trying to search for a needle in a haystack. Ask the chatbot and get the document you need.</p>
                </div>
                <div className="card-footer">
                <Link to="/legaldepartment/en/mlsearchengine" className="btn btn-primary">Read more</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    )
}
