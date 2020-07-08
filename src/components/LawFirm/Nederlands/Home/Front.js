import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';
import Animation from './Animation';
// import appUrl from '../../AppURL';
const appUrl = "https://lawra.be/wp-json/wp/v2/";

export default function Front() {
    const [state, setState] = useState({ 
        loading: true,
        video: false
     });
     useEffect(() => {
        const fetchData = async () => {
          let res = await fetch(`${appUrl}video`);
      let response = await res.json();
      response.map( item => {
        let word = item.title.rendered.search("Law Firm")
        if(word !== -1){
          setState({
              loading: false,
              video: item.acf.video_nl
              });
        }
    })
        };
        fetchData();
      }, []);
      
      let video  = !state.loading ? state.video : '';
    // videoTag.load();
  const particlesJSON = {
    "particles": {
      "number": {
          "value":80, "density": {
              "enable": true, "value_area": 800
          }
      }
      , "color": {
          "value": "#fff"
      }
      , "shape": {
          "type":"circle", "stroke": {
              "width": 0, "color": "#fff"
          }
          , "polygon": {
              "nb_sides": 5
          }
          , "image": {
              "src": "img/github.svg", "width": 100, "height": 100
          }
      }
      , "opacity": {
          "value":0.5, "random":false, "anim": {
              "enable": false, "speed": 1, "opacity_min": 0.1, "sync": false
          }
      }
      , "size": {
          "value":3, "random":true, "anim": {
              "enable": false, "speed": 40, "size_min": 0.1, "sync": false
          }
      }
      , "line_linked": {
          "enable": true, "distance": 150, "color": "#fff", "opacity": 0.4, "width": 1
      }
      , "move": {
          "enable":true, "speed":6, "direction":"none", "random":false, "straight":false, "out_mode":"out", "bounce":false, "attract": {
              "enable": false, "rotateX": 600, "rotateY": 1200
          }
      }
  }
  , "interactivity": {
      "detect_on":"canvas", "events": {
          "onhover": {
              "enable": true, "mode": "repulse"
          }
          , "onclick": {
              "enable": true, "mode": "push"
          }
          , "resize":true
      }
      , "modes": {
          "grab": {
              "distance":400, "line_linked": {
                  "opacity": 1
              }
          }
          , "bubble": {
              "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3
          }
          , "repulse": {
              "distance": 200, "duration": 0.4
          }
          , "push": {
              "particles_nb": 4
          }
      }
  }
  , "retina_detect":true
    }
    return (
        <>
          <div className="container-fluid cover" id="home">
          <Particles className="background" params={particlesJSON}/>
        <div className="row">
          {/* <h1 class="cover-heading text-white">I AM</h1>
                  <img src="./images/1.png"/> */}
          <div className="col-md-6 header">
            <h1 className="cover-heading pb-2">Juridische AI Chatbots<br/>
hulpadvocaten<br/>
efficiënter werken</h1>
            {/* <img src={require("../images/1.png")} className="logo" /> */}
            {/* <Typer/> */}
            <p className="lead">Lawren.io automatiseert repetitieve taken in uw advocatenkantoor om gemiddeld 455 uur en 57.000 euro te besparen.*</p>
            <p className="lead pt-4">
              <a href="#contact" className="btn btn-lg btn-light pl-5 pr-5"> Een demo boeken</a>
              <Link to="/lawyer/nl/#calculate" className="btn btn-lg btn-light">Bereken uw voordelen</Link>
            </p>
            <p>*Gebaseerd op een advocatenkantoor van vijf advocaten</p>
          </div>
          <div className="col-md-6 header">
            {/* <Video url={video}/> */}
            <Animation/>
          </div>
          {/* <p class="lead text-white">Lawren.io’s legal tech solution will get your law firm ahead in a fast-changing legal environment</p>
         */}
        </div>
      </div>  
        </>
    )
}
