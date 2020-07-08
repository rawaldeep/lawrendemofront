import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Clientimage from "./Clientimage";
// const appUrl = "http://15.188.3.188.xip.io/wp-json/wp/v2/";
const appUrl = "https://lawra.be/wp-json/wp/v2/";


export default function Partners() {
  const [state, setState] = useState({ 
    loading: true,
    partners: []
 });
 useEffect(() => {
  const fetchData = async () => {
    let res = await fetch(`${appUrl}partners`);
let response = await res.json();
if(response){
setState({
loading: false,
partners: response
});}
  };
  fetchData();
}, []);
let partnerloop = state.partners.map((partner, index) => {
  return (
          <div key={index}>
          <Clientimage imageId={partner.featured_media} />
          </div>
  )
});
const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 1500,
  cssEase: "ease",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};
if(!state.loading){
   return (
        <>
        <section className="customer-logos slider">
        <Slider {...settings}>
        {partnerloop}
        </Slider>
        </section>
        </>
            )
 
}
return (
  <>
   <section className="customer-logos slider">
        <Slider {...settings}>
        <div><img alt="client" src={require("../../../../images/logo1.jpg")} /></div>
        <div><img alt="client" src={require("../../../../images/logo2.jpg")} /></div>
        <div><img alt="client" src={require("../../../../images/logo3.jpg")} /></div>
        <div><img alt="client" src={require("../../../../images/logo5.png")} /></div>
        <div><img alt="client" src={require("../../../../images/logo6.jpg")} /></div>
        <div><img alt="client" src={require("../../../../images/logo7.jpg")} /></div>
        <div><img alt="client" src={require("../../../../images/logo8.jpg")} /></div>
        <div><img alt="client" src={require("../../../../images/kbc-logo-new.png")} /></div>
        <div><img alt="client" src={require("../../../../images/image-3.png")} /></div>
        </Slider>
        </section>
  </>
)
}