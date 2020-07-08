import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UseCases from './UseCases';
library.add(
  fab,
  faFacebook,
  faTwitter,
  faInstagram
)

export default class Footer extends Component {
    constructor(props) {
        super(props);

        this.scriptLoaded = this.scriptLoaded.bind(this);
      }
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://backoffice.lawren.io/app/webBot.js";
        script.async = true;
        script.onload = () => this.scriptLoaded();
      
        document.body.appendChild(script);
      }
      scriptLoaded() {
        window.loadScript();
      }
    render() {
        const footrow = window.innerWidth > 600 ? "row": '';
        return (
            <>
               <footer className="container-fluid siteFooter">
               <div className="container">
                   <div className={`${footrow}`}>
                  <div className="col-md-4">
                       <ul className="navFooter">
    <li><a href="/lawyer/en/#Features">Features</a></li>
    <li><a href="/lawyer/en/#benefits">Benefits</a></li>
    <li><a href="/lawyer/en/#team">Team</a></li>
    <li><a href="/lawyer/en/#contact">Contact</a></li>
    <li><a href="/lawyer/en/#blog">Blog</a></li>
    <li><a href="/lawyer/en/#calculate">Calculate Your Benefits</a></li>
    <li><a href="/faq/en">FAQ</a></li>
    <li><a href="/legaldepartment/en"> Switch to Legaldepartment </a></li>
</ul>
                       </div>
                       <div className="col-md-4">
                           <h5 className="text-white"><u>Use Cases</u></h5>
                           <ul className="navFooter">
                               <UseCases/>
                           </ul>
                       </div>
                       <div className="col-md-4">
                       <ul className="socialFooter">
                       <li><a rel="noopener noreferrer" href="https://www.linkedin.com/company/lawren-io" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin-in']} /></a></li>
                  <li><a rel="noopener noreferrer" href="https://www.facebook.com/Lawren.io/" target="_blank"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a></li>
                  <li><a rel="noopener noreferrer" href="https://twitter.com/lawren_io" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                  <li><a rel="noopener noreferrer" href="https://www.instagram.com/lawren.io/" target="_blank"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
                       </div>
                   </div>
                   </div>
                </footer> 
            </>
        )
    }
}
