import React from 'react'

export default function Clientquotes() {
    return (
        <>
          <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 features quotesTitle p-5" id="customers">
            <div className="line pb-4">
              <h2 className="text-white">Ce que disent nos clients</h2>
            </div>
            {/* <p class="lead text-white">Lawren.io consists of 3 main features that are designed to work seamlessly together. Yet, they can be used standalone according to your firm’s needs</p> */}
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 quotes">
            <div className="col-md-12 mb-wrap mb-style-3 quote activequote">
              <div className="mb-thumb" />
              <blockquote cite="http://www.gutenberg.org/ebooks/1257">
                <p>Never fear quarrels, but seek hazardous adventures.</p>
              </blockquote>
              <div className="mb-attribution">
                <p className="mb-author">Alexandre Dumas</p>
                <cite><a href="http://www.gutenberg.org/ebooks/1257">The Three Musketeers</a></cite>
              </div>
            </div>
            <div className="col-md-12 mb-wrap mb-style-3 quote">
              <div className="mb-thumb" />
              <blockquote cite="http://www.gutenberg.org/ebooks/1257">
                <p>this is a different quote</p>
              </blockquote>
              <div className="mb-attribution">
                <p className="mb-author">Alexandre Dumas</p>
                <cite><a href="http://www.gutenberg.org/ebooks/1257">The Three Musketeers</a></cite>
              </div>
            </div>
            <div className="col-md-12 mb-wrap mb-style-3 quote">
              <div className="mb-thumb" />
              <blockquote cite="http://www.gutenberg.org/ebooks/1257">
                <p>another totally different quote</p>
              </blockquote>
              <div className="mb-attribution">
                <p className="mb-author">Alexandre Dumas</p>
                <cite><a href="http://www.gutenberg.org/ebooks/1257">The Three Musketeers</a></cite>
              </div>
            </div>
            <div className="navArrows">
              <svg viewBox="0 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="prev" transform="translate(8.500000, 8.500000) scale(-1, 1) translate(-8.500000, -8.500000)">
                  <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                  <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                  <path d="M-1.48029737e-15,0.56157424 L-1.48029737e-15,16.1929159 L9.708,8.33860465 L-2.66453526e-15,0.56157424 L-1.48029737e-15,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z" />
                </g>
              </svg>
              <svg viewBox="-1 0 18 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g>
                  <polygon className="arrow" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                  <polygon className="arrow-fixed" points="16.3746667 8.33860465 7.76133333 15.3067621 6.904 14.3175671 14.2906667 8.34246869 6.908 2.42790698 7.76 1.43613596" />
                  <path d="M-4.58892184e-16,0.56157424 L-4.58892184e-16,16.1929159 L9.708,8.33860465 L-1.64313008e-15,0.56157424 L-4.58892184e-16,0.56157424 Z M1.33333333,3.30246869 L7.62533333,8.34246869 L1.33333333,13.4327013 L1.33333333,3.30246869 L1.33333333,3.30246869 Z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </section>  
        </>
    )
}
