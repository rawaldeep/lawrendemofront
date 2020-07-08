import React, { useState, useEffect }  from 'react';
import Video from './Video';
import Animation from './Animation'
import { Link } from 'react-router-dom';
const appUrl = "https://lawra.be/wp-json/wp/v2/";



export default function Frontmobile() {
  
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
            video: item.acf.video_en
            });
      }
  })
    };
    fetchData();
  }, []);
  
  let video  = !state.loading ? state.video : '';
    return (
        <>
          <div className="container-fluid mobilefront" id="home">
        <div className="container">
          <div className="row d-block">
            
            <h1 className="cover-heading pt-5 text-center">Lawren.io</h1>
           
            </div>
            </div>
            
        
          <div className="container">
            <Animation/>
          {/* <Video url={video}/> */}
          </div>
          <div className="row buttons">
            <div className="container d-flex">
              <a href="#contact" className="btn btn-lg btn-primary">Book a Demo</a>
              
              <Link to="/lawyer/en/#calculate" className="btn btn-lg btn-light">Calculate your benefits</Link>
              </div>
            </div>
        
      </div>  
        </>
    )
}
