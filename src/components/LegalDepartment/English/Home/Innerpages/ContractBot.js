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
               <h3>For the Employee</h3>
                   <ul>
                       <li>The chatbot explains every legal clause if needed</li>
                       <li>Generate documents and agreements in a few clicks</li>
                       <li>Get rid of the legal paperwork</li>
                   </ul>
                   <h3>For Legal department</h3>
                   <ul>
                       <li>Ensure uniform compliant contracts within your company</li>
                       <li>Reduce contract drafting time</li>
                       <li>Increase efficiency</li>
                   </ul>
                   <button className="btn btn-light demo">Schedule a demo</button>
               </div>
               <div className="col-md-6">
                   {/* <div className="text-center lead">Reinforce your own law firm’s agreements</div> */}
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
