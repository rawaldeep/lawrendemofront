import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(
  fab,
  faFacebook,
  faTwitter,
  faInstagram
)

export default class Team extends Component {
    render() {
        return (
            <>
            <div className="container-fluid">
            <div className="row">
          <div className="col-md-12 features quotesTitle p-5" id="team">
            <div className="line pb-4">
              <h2 className="text-white">Lawren.io’s Team</h2>
            </div>
            {/* <p class="lead text-white">Lawren.io consists of 3 main features that are designed to work seamlessly together. Yet, they can be used standalone according to your firm’s needs</p> */}
          </div>
        </div>
        <div className="container">
          {/* <h2 className="text-center pt-5"><u>Lawren.io’s Team</u></h2> */}
          <div className="row teamsection">
            <div className="col-md-4 col-sm-12">
              <div className="our-team">
                <div className="pic">
                  <img src={require("../../../../images/dries-wijnen.jpg")} alt="dries wijnen" />
                </div>
                <ul className="social">
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
                <div className="team-content">
                  <h3 className="title">Dries Wijnen</h3>
                  <span className="post">
                    {/* Co-Founder */}
                    </span>
                </div>
                <ul className="description">
               
                  <li>Master in Law (IP/ICT, KU Leuven, 2016)</li>
                  <li>Multiple internships at different law firms</li>
                  <li>Master in General Management, Innovation & Entrepreneurship (Vlerick Business School, 2017)</li>
                  </ul>
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="our-team">
                <div className="pic">
                  <img src={require("../../../../images/dominic-wijnen.jpg")} alt="dominic wijnen" />
                </div>
                <ul className="social">
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
                <div className="team-content">
                  <h3 className="title">Dominic Wijnen</h3>
                  <span className="post">
                    {/* Co-Founder */}
                    </span>
                </div>
                <ul className="description">
                
                  <li>Seasoned entrepreneur</li>
                  <li>New technology adept</li>
                  <li>Followed MooCs at HEC Paris, Rotterdam School of Management and Virginia Darden Business School</li>
                  </ul>
                
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="our-team">
                <div className="pic">
                  <img src={require("../../../../images/yannick-dillen.jpg")} alt="yannick dillen" />
                </div>
                <ul className="social">
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
                <div className="team-content">
                  <h3 className="title">Yannick Dillen</h3>
                  <span className="post"></span>
                </div>
                <ul className="description">
                
                  <li>Lecturer at Vlerick Business School.</li>
                  <li>Experience in the scaling of companies.</li>
                  </ul>
                
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="our-team">
                <div className="pic">
                  <img style={{transform: 'translateY(-30px)'}}  src={require("../../../../images/thomas-daniels.png")} alt="thomas daniels" />
                </div>
                <ul className="social">
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
                <div className="team-content">
                  <h3 className="title">Thomas Daniels</h3>
                  <span className="post"></span>
                </div>
                <ul className="description">
                
                  <li>Blockchain evangelist</li>
                  <li>Marketing specialist</li>
                  </ul>
                
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="our-team">
                <div className="pic">
                  <img src={require("../../../../images/Koenraad-Verherstraeten.jpeg")} alt="koenraad verherstraeten" />
                </div>
                <ul className="social">
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
                <div className="team-content">
                  <h4 className="title titleFont">Koenraad Verherstraeten</h4>
                  <span className="post"></span>
                </div>
                <ul className="description">
                
                  <li>Master in Law, K.U. Leuven</li>
                  </ul>
                
              </div>
            </div>

            <div className="col-md-4 col-sm-12">
              <div className="our-team">
                <div className="pic">
                  <img src={require("../../../../images/Arkadi-De-Prof.jpeg")} alt="Arkadi de prof" />
                </div>
                <ul className="social">
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
                <div className="team-content">
                  <h3 className="title">Arkadi De Proft</h3>
                  <span className="post"></span>
                </div>
                <ul className="description">
                
                  <li>Student Master in Law, K.U. Leuven</li>
                  </ul>
                
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="our-team">
                <div className="pic">
                  <img src={require("../../../../images/tim-arts.jpeg")} alt="tim arts" />
                </div>
                <ul className="social">
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'facebook']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
                  <li><a href="/"><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
                </ul>
                <div className="team-content">
                  <h3 className="title">Tim Arts</h3>
                  <span className="post"></span>
                </div>
                <ul className="description">
                
                  <li>ManaMa IP/ICT Law, K.U. Leuven</li>
                  </ul>
                
              </div>
            </div>
            
          


          </div>
        </div>
      </div>
            </>
        )
    }
}
