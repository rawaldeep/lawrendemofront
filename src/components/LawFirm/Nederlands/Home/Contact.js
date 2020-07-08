import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <>
            <section className="contact container-fluid">
                <div className="row">
                {/* <div className="gradient-background"></div>  */}
              <section className="contact-sales-header">

        <div className="stripes-container initial">
          <div className="stripe gradient" />
          <div className="left-dots-container" />
          <div className="light-dots-container" />
          <div className="dark-dots-container" />
          <div className="medium-dots-container" />
        </div>
        
        <div className="headline">
          <div className="container-lg">
            <h1 className="headline-text">Contact our sales team
            </h1>
            <h2 className="common-IntroText">Our team is happy to answer your sales questions. Fill out the form and we’ll be in touch as soon as possible.</h2>
          </div>
        </div>
      </section>
              </div>
              </section>
            </>
        )
    }
}
