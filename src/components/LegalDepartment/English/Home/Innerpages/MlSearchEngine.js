import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function MlSearchEngine() {
    return (
        <>
           <BlogNav/> 
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Smart Legal Search Engine</h1>
           {/* <img src={require("../../../images/website-chatbot-assiatant.png")}/> */}
           <div className="row">
               <div className="col-md-6">
               {/* <p className="lead">After the customer chat with the website chatbot</p> */}
               <h3>For the Employee</h3>
                   <ul>
                       <li>All legal documents at your fingertips</li>
                       <li>save time</li>
                       <li>Always start working on the right document</li>
                       {/* <li>Search like a pro: our AI algorithm is <strong>self-learning</strong>, making sure your results get better and better over time </li> */}
                   </ul>
                {/* <h3>For the customer</h3>
                <ul>
                    <li>The lawyer received your memo and is <strong>prepared for the first meeting</strong></li>
                    <li>Shorter and way <strong>more efficient</strong> first meeting</li>
                </ul> */}
                   <button className="btn btn-light">Schedule a demo</button>
               </div>
               <div className="col-md-6">
               {/* <p className="lead">Use Lawren.io as an internal search engine</p> */}
               <h3>For the Company</h3>
                   <ul>
                       {/* <li>All your firm’s <strong>documents and scans</strong> at your fingertips, <strong>indexed and searchable</strong></li>
                       <li><strong>Easily find</strong> past cases, documents or customer files.</li> */}
                       <li>Increase efficiency</li>
                       <li>Increase compliance</li>
                       <li>Unburden your legal research</li>
                   </ul>
                   {/* <p className="lead">Add these results to your customer’s file even before you have met him.</p> */}

               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="memo woth customer info" src={require("../../../../../images/website-interaction.png")}/></div> <br/>Memo with customer info
                        </li>
                       <li>
                       <div className="text-center"><img alt="public sorces" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>Public Sources
                       </li>
                       <li>
                       <div className="text-center"><img alt="internal sorces" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>Internal Sources</li>
                       
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
