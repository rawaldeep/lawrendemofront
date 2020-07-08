import React, { Component  } from 'react';
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import OfflineBlogSlider from './OfflineBlogSlider';
const appUrl = "https://lawra.be/wp-json/wp/v2/";
// const appUrl = "https://lawren.io/wp-json/wp/v2/";

export default class Blogslider extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          loading: true,
          posts: [],
          users: []
        }
      }
      fetchFirst(url) {
        let that = this;
        if (url) {
          fetch(url).then(function (response) {
            return response.json();
          }).then(function (result) {
    
            that.setState({ 
              loading: false,
                 posts: result
             });
          });
        }
      } 
      componentDidMount() {
        let postUrl = `${appUrl}blog`;
        this.fetchFirst(postUrl);
      }
      
        
    render() {
      
      let postloop = this.state.posts.map((post, index) => {
        let postType = post.acf.blog_or_press_article.url;
            return (
        <div className="item" key={index} >
        <div className="item-sub">
        <div className="blog-slider ">
        <Link to={`/blog/en/${post.id}`} className="s-info">{post.title.rendered }</Link> 
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
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 300,
      autoplaySpeed: 2000,
      cssEase: "linear",
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
     if (!this.state.loading) {
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
}
