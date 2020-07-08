import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import Clientimage from "./Clientimage";
import OfflineBlogSlider from './OfflineBlogSlider';
const appUrl = "https://lawra.be/wp-json/wp/v2/";
// const appUrl = "https://lawren.io/wp-json/wp/v2/";

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

export default function BlogSlider() {
  const [state, setState] = useState({ 
    loading: true,
    posts: []
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
    let res = await fetch(`${appUrl}blog`);
let response = await res.json();
let filter = (post) =>{
  if(post.acf.language === "Nederlands"){
    return post;
  }
  return
}
let filtered = await response.filter(filter);
setState({
loading: false,
posts: filtered
});
let el = document.querySelector('.blog');
let slider = el.querySelectorAll('.item-sub');
 let maxHeight = el.querySelector('.slick-track').clientHeight;
  maxHeight = (maxHeight*2)-62
for (let i = 0; i < slider.length; i++) {
  let blockquote = slider[i];
blockquote.style.height = maxHeight+"px";
}
  };
  fetchData();
}, []);
let decodeHTML = function (html) {
  let txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};
 
      let postloop = state.posts.map((post, index) => {
          let postTitle = post.title.rendered.replace(/(<([^>]+)>)/ig,"");
          let decoded = decodeHTML(postTitle);
          // if(decoded.length > 20) decoded = decoded.substring(0,20);
          
        
        let postType = post.acf.blog_or_press_article.url;
            return (
        <div className="item" key={index} >
        <div className="item-sub">
        <div className="col">
        <Clientimage imageId={post.featured_media} />
    </div>
        <div className="blog-slider ">
        <Link to={`/legaldepartment/blog/nl/${post.id}`} className="s-info">
          {decoded}
        </Link>
        <div className="s-authore">
        <div className="s-logo">
            <img src={postType} alt="postType" className="b1" />
        </div>
        <div className="s-name">
            <h3>{post.acf.blog_author}
            </h3>
        </div>
        </div>
        </div>
        </div>
        </div>
            )
    });
    const settings = {
      dots: false,
      // arrows: false,
      infinite: true,
      mobileFirst:true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      speed: 300,
      autoplaySpeed: 2000,
      cssEase: "linear",
      pauseOnHover: true,
      prevArrow: <></>,
      nextArrow: <SampleNextArrow/>, 
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
     if (!state.loading) {
        return (
          <>
      <div className="col-md-12 blog" id="blog">
      <Slider {...settings}>
     {postloop}
      </Slider>
    </div> 
          </>
      )
    
       
        }
        return (
          <OfflineBlogSlider settings={settings}/>
        );
    }

