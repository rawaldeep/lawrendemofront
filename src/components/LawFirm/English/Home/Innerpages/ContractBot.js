import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function ContractBot() {
    return (
        <>
           <BlogNav/> 
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Contract Chatbot</h1>
           <div className="row">
               <div className="col-md-6">
                   <ul>
                       <li>Ensure uniform compliant contracts within your company</li>
                       <li>Reduce contract drafting time</li>
                       <li>Increase efficiency</li>
                       <li> the chatbot automatically explain the contract to ‘ business ‘ or customers</li>
                   </ul>
                   <p className="lead">Has your legal departments ever received questionable contract changes from your business department? Often ‘business’ negotiates specific contract terms which are not always compliant.</p>
                   <p>The lawren.io contract chatbot ensures compliance at all times. A legal department can set out the ground rules, while the business departments can adapt the contract within predefined the predefined boundaries. Take risk management in your hands.</p>
                   <p className="lead">Is your legal department getting overwhelmed with recurring legal questions either from internal employees either from external suppliers or customers?</p>
                   <p>Meet Lawren.io, an AI chatbot that can answer recurring legal questions. And don’t worry this legal chatbot doesn’t know the answer, we have a solution for that!</p>
                   <button className="btn btn-light">Schedule a demo</button>
               </div>
               <div className="col-md-6">
                   <div className="text-center lead">Reinforce your own law firm’s agreements</div>
                   <img className="innerPageImage" alt="contractbot" src={require("../../../../../images/Conversation-copy-sent-straight-to-lawyer.png")}/>
               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="involve your customer" src={require("../../../../../images/website-interaction.png")}/></div> <br/>Involve Your Customer
                        </li>
                       <li>
                       <div className="text-center"><img alt="explain legal clauses" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>Explain Legal Clauses
                       </li>
                       <li>
                       <div className="text-center"><img alt="automatic contract outcome" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>Automatic Contract Outcome</li>
                       
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
