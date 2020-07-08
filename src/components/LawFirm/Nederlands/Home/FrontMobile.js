import React from 'react';
import { Link } from 'react-router-dom';

export default function Frontmobile() {
    return (
        <>
          <div className="container-fluid mobilefront" id="home">
        <div className="container">
          <div className="row d-block">
            
            <h1 className="cover-heading pt-5 text-center">Lawren.io</h1>
           
            </div>
            </div>
            
        
          <div className="container">
            <video controls className="text-center">
              <source src="mov_bbb.mp4" type="video/mp4" />
              <source src="mov_bbb.ogg" type="video/ogg" />
              Your browser does not support HTML5 video.
            </video>
          </div>
          <div className="row buttons">
            <div className="container d-flex">
              <a href="#contact" className="btn btn-lg btn-primary">Book a Demo</a>
              
              <Link to="/lawyer/nl/#calculate" className="btn btn-lg btn-light">Calculate your benefits</Link>
              </div>
            </div>
        
      </div>  
        </>
    )
}
