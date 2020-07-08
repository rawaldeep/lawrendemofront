import React from 'react';
import Quotes from './Quotes';

export default function Clientquotes() {
    return (
        <>
          <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 features quotesTitle p-5" id="customers">
            <div className="line pb-4">
              <h2 className="text-white">Was unsere Kunden sagen</h2>
            </div>
            {/* <p class="lead text-white">Lawren.io consists of 3 main features that are designed to work seamlessly together. Yet, they can be used standalone according to your firm’s needs</p> */}
          </div>
        </div>
        <div className="row">
        <Quotes/>
        </div>
      </section>  
        </>
    )
}
