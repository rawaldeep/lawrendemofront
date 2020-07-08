import React,{useState, useEffect} from 'react'

export default function Animation() {

const [state, setState] = useState({
  messages: [
    {
      name: "ms1",
      msg: "Good morning 👋🏻",
      delay: 200,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms2",
      msg: "Welcome to our renewed way of accelerating customer intake. Follow the different steps and make an appointment with our specialist lawyer.",
      delay: 400,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms3",
      msg: "This way of working will save you a lot of time and money if you want to make use of our services. 👍",
      delay: 400,
      align: "left shadow ",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms4",
      msg: "And don't worry, most users only need to talk to me for 3 minutes. Off we go!",
      delay: 700,
      align: "left shadow ",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms5",
      msg: "Would you like to ask me a question or navigate through the different topics?",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms6",
      msg: "I would like to ask an open question",
      delay: 500,
      align: "left shadow btn-secondary",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms7",
      msg: "I would like to navigate through the topics",
      delay: 500,
      align: "left shadow btn-secondary",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms8",
      msg: "I would like to ask an open question",
      delay: 500,
      align: "right",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms9",
      msg: "What is your question?",
      delay: 500,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms10",
      msg: "How can I protect the different aspects of my company?",
      delay: 500,
      align: "right",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms11",
      msg: "Almost everything you create can be protected by means of one or more intellectual property rights.",
      delay: 500,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms12",
      msg: "There is a wide range of intellectual property rights, each with its own terms of protection, deadlines and formal requirements.",
      delay: 500,
      align: "left shadow ",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms13",
      msg: "What do you want to protect?",
      delay: 500,
      align: "left shadow ",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms14",
      msg: "Logos and other commercial signs",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms15",
      msg: "Chemistry and pharmacy",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms16",
      msg: "Invention",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms17",
      msg: "Plants & biology",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms18",
      msg: "Drawings and other visual creations",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms19",
      msg: "Music",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms20",
      msg: "Design and shape of products",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms21",
      msg: "Informatics products",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms22",
      msg: "Scriptures and other literary creations",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms23",
      msg: "Ideas",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms24",
      msg: "Domain name",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms25",
      msg: "Other",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms26",
      msg: "Logos and other commercial signs",
      delay: 300,
      align: "right",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms27",
      msg: "A company can protect different properties of its products or services by registering this property as a trademark.",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms28",
      msg: "This may include the name, logo, shape or packaging, colour, jingle or advertising slogan of a product or service.",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms29",
      msg: "A company can also protect its own name as a trademark, trade name and/or company name.",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms30",
      msg: "How can I help you?",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms31",
      msg: "I want to setup an appointment with a lawyer",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms32",
      msg: "I want to end the conversation",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms34",
      msg: "More information about trademark law",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms35",
      msg: "More information about trade and company name",
      delay: 2,
      align: "left shadow btn-secondary twoinrow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms36",
      msg: "I want to set up an appointment with a lawyer",
      delay: 300,
      align: "right",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms37",
      msg: "Please describe your question or problem as fully as possible below. The more complete you are, the better we can help you.",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms38",
      msg: "How can I protect the IP within my company?",
      delay: 300,
      align: "right",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms39",
      msg: "Thank you, then all we have to do is to collect your details and schedule an appointment.",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms40",
      msg: "What is your name (first name - surname)?",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms41",
      msg: "Dries Wijnen",
      delay: 300,
      align: "right",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms42",
      msg: "What is your email address?",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms43",
      msg: "drieswijnen@gmail.com",
      delay: 300,
      align: "right",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms44",
      msg: "What would be your preferred moment to meet?",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms45",
      msg: "5 september 2019 - 9:00 AM",
      delay: 300,
      align: "right",
      showTime: false,
      time: "19:58"
    },
    {
      name: "ms46",
      msg: "Thank you for your feedback. See you at our meeting!",
      delay: 300,
      align: "left shadow",
      showTime: false,
      time: "19:58"
    },
    
  ]
});
// }
let chatDelay = 0; 

  

const loop = state.messages.map((obj, index)=>{ 
  chatDelay = chatDelay + 4000;
  let chatDelay2 = chatDelay + obj.delay;
  let chatDelay3 = chatDelay2 + 10;
  let scrollDelay = chatDelay;
  let chatTimeString = " ";
  let msgname = "." + obj.name;
  let msginner = ".messageinner-" + obj.name;
  let spinner = ".sp-" + obj.name;

  let msg = document.querySelector(msgname);
  let spin = document.querySelector(spinner);
  let msgin = document.querySelector(msginner);
  
  if(msg){
      setTimeout(()=>{
msg.removeAttribute("hidden");
  }, chatDelay);
  setTimeout(()=>{
spin.setAttribute("hidden", true);
  }, chatDelay2);
  setTimeout(()=>{
    msgin.removeAttribute("hidden");
  }, chatDelay3);

  
  let current = document.querySelectorAll(".chat-message-list li");
  let toppos = current[index].offsetTop;

  
  }
  chatDelay = chatDelay3;


  // let html = `<li class='message-${obj.align} ${obj.name}' hidden><div class='sp-${obj.name}'><span class='spinme-${obj.align}'><div class='spinner'><div class='bounce1'></div><div class='bounce2'></div><div class='bounce3'></div></div></span></div><div class='messageinner-${obj.name}' hidden><span class='message-text'>${obj.msg}</span></div></li>`
  return(
    <li key={index} className={"message-"+obj.align+" "+obj.name+""} hidden>
      <div className={"sp-"+obj.name}>
      <span className={"spinme-"+obj.align}>
      <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
      </div>
      </span>
      </div>
      <div className={"messageinner-"+obj.name} hidden>
      <span className="message-text">{obj.msg}</span>
      </div>
      </li>
  )
})

    return (
        <div id="mobilechatanimation">
        <div id="wrapper">
          <div className="chat">
            <div className="chat-container">
              <div className="chat-listcontainer">
                <ul className="chat-message-list">
                  {
                    loop
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
