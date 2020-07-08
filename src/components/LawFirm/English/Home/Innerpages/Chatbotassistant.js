import React from 'react'
import BlogNav from '../../Navigation/BlogNav';
import Footer from '../../Footer/Footer';

export default function Chatbotassistant() {
    return (
        <>
           <BlogNav/>
           <div className="container-fluid innerpage">
           <div className="container">
           <h1 className="display-4 text-center p-4">Website Chatbot Assistant</h1>
           {/* <img src={require("../../../images/website-chatbot-assiatant.png")}/> */}
           <div className="row">
               <div className="col-md-6">
               <img className="innerPageImage" alt="website chatbot assistant" src={require("../../../../../images/website-chatbot-assistant-1.png")}/>
               </div>
               <div className="col-md-6">
                   <h3>For the customer</h3>
                   <ul>
                       <li>The chatbot asks your customer a few questions and <strong>clarifies his legal problem</strong></li>
                       <li>Lawren <strong>highlights your expertise</strong> and describes your working method</li>
                       <li>Your customer can make an <strong>appointment right away</strong> with the lawyer specialized in his legal issue</li>
                   </ul>
                   <h3>For the law firm</h3>
                   <ul>
                       <li>Can be installed <strong>on your law firm’s website</strong></li>
                       <li><strong>Personalized</strong> according to your corporate identity</li>
                       <li>The lawyer specialized in the customer’s problem receives <strong>an e-mail with a memo</strong></li>
                   </ul>
                   <button className="btn btn-light demo">Schedule a demo</button>
               </div>
           </div>
           <div className="row">
               <div className="container innnerpagelist">
                   <ul>
                       <li>
                           <div className="text-center"><img alt="website interaction" src={require("../../../../../images/website-interaction.png")}/></div> <br/>
                           Website Interaction
                        </li>
                       <li>
                       <div className="text-center"><img alt="guide your customers" src={require("../../../../../images/guide-your-customer.png")}/></div> <br/>
                           Guide your customer to the right lawyer</li>
                       <li>
                       <div className="text-center"><img alt="highlight your expertise" src={require("../../../../../images/highlight-your-expertise.png")}/></div> <br/>
                           Highlight your expertise</li>
                       <li>
                       <div className="text-center"><img alt="calender tool" src={require("../../../../../images/calendar-tool.png")}/></div> <br/>
                           Calendar tool</li>
                   </ul>
               </div>
           </div>
           </div>
           </div>
           <Footer/>
        </>
    )
}
