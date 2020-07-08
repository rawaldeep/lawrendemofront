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
                   <h3>For the Employee</h3>
                   <ul>
                       <li>Instead of reading through lengthy policies, the chatbot answers specific questions <strong>automatically</strong></li>
                       <li>HR or marketing worries about GDPR? Ask the legal chatbot and get understandable help in a heartbeat</li>
                       <li>The increased access to legal information gets your employees to get things done</li>
                   </ul>
                   <h3>For Legal department</h3>
                   <ul>
                       <li>Lose less time focusing on recurring internal legal questions</li>
                       <li>Make sure your company is GDPR compliant because of the intelligent chatbot</li>
                       <li>Increase compliance with regard to your internal policies</li>
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
