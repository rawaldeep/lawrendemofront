import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Clientimage from "./Clientimage";
import OfflineQuotes from './OfflineQuotes';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
  <div
  className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
   id="arrow"><span>&#9658;&#9658;</span></div>
  );
}
export default function Quotes() {
const appUrl = "https://lawra.be/wp-json/wp/v2/";
// const appUrl = "https://lawren.io/wp-json/wp/v2/";

    const [state, setState] = useState({ 
        loading: true,
        quotes: []
     });
    useEffect(() => {
      let el = document.querySelector('.quotesSlider');
      let slider = el.querySelectorAll('blockquote');
      let maxHeight = 0;
      for (let i = 0; i < slider.length; i++) {
        let blockquote = slider[i];
        if (blockquote.offsetHeight > maxHeight) {
          maxHeight = blockquote.offsetHeight;
      }
      blockquote.style.height = maxHeight+"px";
      }
      const fetchData = async () => {
        let res = await fetch(`${appUrl}quote`);
    let response = await res.json();
    setState({
    loading: false,
    quotes: response
    });
    let el = document.querySelector('.quotesSlider');
      let slider = el.querySelectorAll('blockquote');
      let maxHeight = 0;
      for (let i = 0; i < slider.length; i++) {
        let blockquote = slider[i];
        if (blockquote.offsetHeight > maxHeight) {
          maxHeight = blockquote.offsetHeight;
      }
      blockquote.style.height = maxHeight+"px";
      }
      };
      fetchData();
    }, []);



  let quoteloop = state.quotes.map((quote, index) => {
            return (
                <div className="col-md-12 quotes" key={index}>
                <div className="col-md-12 mb-wrap mb-style-3 quote activequote">
                  <div className="mb-thumb">
                    <Clientimage imageId={quote.featured_media} />
                    </div>
                  <blockquote cite="http://www.gutenberg.org/ebooks/1257">
                    <p dangerouslySetInnerHTML={{ __html: quote.acf.client_quote }}></p>
                  </blockquote>
                  <div className="mb-attribution">
                    <p className="mb-author" dangerouslySetInnerHTML={{ __html: quote.acf.client_name }} ></p>
                    <cite><span dangerouslySetInnerHTML={{ __html: quote.acf.client_company }}></span></cite>
                  </div>
                </div>
              </div>
            )
    });
    const settings = {
      dots: false,
      // arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 2500,
      cssEase: "linear",
      pauseOnHover: true,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <></>,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }]
    };
     if (!state.loading) {
    
        return (
          <>
      <div className="quotesSlider" id="quotesslider">
      <Slider {...settings}>
      {quoteloop}
      </Slider>
    </div> 
          </>
      )
       
       
        }
        return (
          <OfflineQuotes settings={settings}/>
        );
    }