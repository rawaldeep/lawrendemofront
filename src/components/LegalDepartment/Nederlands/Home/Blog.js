import React from 'react';
// import Blogslider from './Blogslider copy';
import Blogslider from './BlogSlider';

export default function Blog() {
    return (
        <>
            <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 features quotesTitle p-5" id="benefits">
            <div className="line pb-4">
              <h2 className="text-white">Blog en pers</h2>
            </div>
          </div>
        </div>
        <div className="row">
         <Blogslider/>
        </div>
        
      </section>
        </>
    )
}
