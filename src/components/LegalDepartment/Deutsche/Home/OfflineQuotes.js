import React from 'react';
import Slider from "react-slick";

export default function OfflineQuotes(props) {
    
    return (
        <div className="quotesSlider" id="quotesslider">
          <Slider {...props.settings}>
        <div className="col-md-12 quotes">
        <div className="col-md-12 mb-wrap mb-style-3 quote activequote">
          <div className="mb-thumb">
          <img src="https://fitsmallbusiness.com/wp-content/uploads/2019/07/Update_-_customer-service-quotes_04-e1562091152766.png"
          // {require("../../../images/google-blog-icon-13.jpg")}
           alt="postType" />
            </div>
          <blockquote cite="http://www.gutenberg.org/ebooks/1257">
            <p>Just having satisfied customers isn’t good enough anymore. If you really want a booming business, you have to create raving fans.</p>
          </blockquote>
          <div className="mb-attribution">
            <p className="mb-author">Ken Blanchard</p>
            <cite><span>Mollie Beck, Founder, Continue Good</span></cite>
          </div>
        </div> 
      </div>{/* quote item */}
      <div className="col-md-12 quotes">
        <div className="col-md-12 mb-wrap mb-style-3 quote activequote">
          <div className="mb-thumb">
          <img src={require("../../../../images/google-blog-icon-13.jpg")} alt="postType" />
            </div>
          <blockquote cite="http://www.gutenberg.org/ebooks/1257">
            <p>lalalalalalalalalalalalal</p>
          </blockquote>
          <div className="mb-attribution">
            <p className="mb-author">lorium ipsum</p>
            <cite><span>ipsum lorium</span></cite>
          </div>
        </div> 
      </div>{/* quote item */}
      <div className="col-md-12 quotes">
        <div className="col-md-12 mb-wrap mb-style-3 quote activequote">
          <div className="mb-thumb">
          <img src={require("../../../../images/google-blog-icon-13.jpg")} alt="postType" />
            </div>
          <blockquote cite="http://www.gutenberg.org/ebooks/1257">
            <p>lalalalalalalalalalalalal</p>
          </blockquote>
          <div className="mb-attribution">
            <p className="mb-author">lorium ipsum</p>
            <cite><span>ipsum lorium</span></cite>
          </div>
        </div> 
      </div>{/* quote item */}
      <div className="col-md-12 quotes">
        <div className="col-md-12 mb-wrap mb-style-3 quote activequote">
          <div className="mb-thumb">
          <img src={require("../../../../images/google-blog-icon-13.jpg")} alt="postType" />
            </div>
          <blockquote cite="http://www.gutenberg.org/ebooks/1257">
            <p>lalalalalalalalalalalalal</p>
          </blockquote>
          <div className="mb-attribution">
            <p className="mb-author">lorium ipsum</p>
            <cite><span>ipsum lorium</span></cite>
          </div>
        </div> 
      </div>{/* quote item */}
      </Slider>
    </div> 
    )
}
