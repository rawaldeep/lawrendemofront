import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Particles from 'react-particles-js';


export default function MainPage() {
let userLang = navigator.language || navigator.userLanguage;
let language = userLang.substring(0, 2);
 const [state, setState] = useState({
     lang: 'en',
     question: 'Are You' ,
     opt1: "A Law Firm",
     opt2: 'A Legal Department' 
 });
const handleClick = (e) =>{
let clicked = e.currentTarget;
language = clicked.innerText;
    if(language === 'nl'){
        setState({ ...state,
      lang: 'nl',
       question: 'Bent u',
       opt1: 'Advocatenkantoor',
       opt2: 'Juridische dienst'  
        })
      }else if(language === 'fr'){
          setState({ ...state,
              lang: 'fr',
               question: 'Vous êtes' ,
               opt1: "Cabinet d'avocats",
               opt2: 'Service juridique' 
                })}
                else if(language === 'de'){
          setState({ ...state,
              lang: 'de',
               question: 'Bist du' ,
               opt1: "Anwaltskanzlei",
               opt2: 'Rechtsabteilung' 
                })}  else if(language === 'en'){
                    setState({ ...state,
                        lang: 'en',
                        question: 'Are You' ,
                        opt1: "A Law Firm",
                        opt2: 'A Legal Department' 
                          })}
}


 if(language === 'nl'){
      setState({ ...state,
    lang: 'nl',
     question: 'Bent u',
     opt1: 'Advocatenkantoor',
     opt2: 'Juridische dienst'  
      })
    }else if(language === 'fr'){
        setState({ ...state,
            lang: 'fr',
             question: 'Vous êtes' ,
             opt1: "Cabinet d'avocats",
             opt2: 'Service juridique' 
              })}
              else if(language === 'de'){
        setState({ ...state,
            lang: 'de',
             question: 'Bist du' ,
             opt1: "Anwaltskanzlei",
             opt2: 'Rechtsabteilung' 
              })}
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
        <div className="choiceScreen">
          <Particles className="background" params={particlesJSON}/>
             <section className="container">
        <div className="row langswitcher">
                 <div className="btn text-white" onClick={handleClick}>nl</div>
                 <div className="btn text-white" onClick={handleClick}>en</div>
                 <div className="btn text-white" onClick={handleClick}>fr</div>
                 <div className="btn text-white" onClick={handleClick}>de</div>
                 </div>
                 
                
        <div className="gradientloop do-not-include">
          <div className="text-center container">
            <img alt="lawren" src={require("../../images/footerlogo.png")} className="logo" />
            <h4 className="display-4 text-white">{state.question}</h4>
            <div className="row">
                <div className="col-md-6">
            <Link to={`/lawyer/${state.lang}`} className="btn btn-arrow">
            <span>{state.opt1}
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8" xmlSpace="preserve"><g><line fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} x1={0} y1="12.9" x2={34} y2="12.9" /><polyline fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} points="22.2,1.1 34,12.9 22.2,24.7   " /></g></svg>
            </span>
            </Link>
            </div>
            <div className="col-md-1">
            <div className="or text-white">OR</div>
            </div>
            
            <div className="col-md-5">
            <Link to={`/legaldepartment/${state.lang}`} className="btn btn-arrow"><span>{state.opt2}
                <svg version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 36.1 25.8" enableBackground="new 0 0 36.1 25.8" xmlSpace="preserve"><g><line fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} x1={0} y1="12.9" x2={34} y2="12.9" /><polyline fill="none" stroke="#FFFFFF" strokeWidth={3} strokeMiterlimit={10} points="22.2,1.1 34,12.9 22.2,24.7   " /></g></svg>
            </span></Link>
            </div>
            </div>
          </div>
        </div>
      </section>
        </div>
    )
}
