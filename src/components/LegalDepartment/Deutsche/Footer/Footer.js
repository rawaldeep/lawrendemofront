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
    render() {
        const footrow = window.innerWidth > 600 ? "row": '';
        return (
            <>
               <footer className="container-fluid siteFooter">
               <div className="container">
                   <div className={`${footrow}`}>
                  <div className="col-md-4">
                       <ul className="navFooter">
    <li><a href="/legaldepartment/de/#Features">Merkmale</a></li>
    <li><a href="/legaldepartment/de/#benefits">Vorteile</a></li>
    <li><a href="/legaldepartment/de/#team">Team</a></li>
    <li><a href="/legaldepartment/de/#contact">Kontakt</a></li>
    <li><a href="/legaldepartment/de/#blog">Blog</a></li>
    <li><a href="/legaldepartment/faq/de">FAQ</a></li>
    <li><a href="/lawyer/de">Wechsel zur Kanzlei</a></li>
</ul>
                       </div>
                       <div className="col-md-4">
                           <h5 className="text-white"><u>Usecases</u></h5>
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
