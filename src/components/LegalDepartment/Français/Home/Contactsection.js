import React, { Component } from 'react';
import Tilt from 'react-tilt';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import validator from 'validator';
import FormError from './FormErrors';
library.add(
  fas,
  faUser,
  faEnvelope
)

export default class Contactsection extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      formValidity: false,
      submitDisabled: false,
      formErrors: {
          email: 'Please Enter a correct Email',
          name: 'Names should contain only alphabet characters'
      }
    }
  
  
  this.changeValue = this.changeValue.bind(this);
  this.onSubmit = this.onSubmit.bind(this);
  // this.sendemail = () => {
    
  // }
  }
  changeValue = event => {
    this.setState({
        [event.target.name]: event.target.value,
    });
};
onSubmit = (event) => {
  event.preventDefault();
  let formValidity = true;
  let errorType = undefined;
  
  if (!validator.isEmail(this.state.email)) {
    formValidity = false;
    errorType = this.state.formErrors.email
} else if (!validator.isAlpha(this.state.name)) {
    formValidity = false;
    errorType = this.state.formErrors.name
}if (!formValidity) {
  this.setState({
      formValidity,
      errorType
  })
} else {
  const {name, email , message} = this.state;
  fetch('/send-email', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Name: name, 
      mail: email, 
      text: message
      // then continue this with the other inputs, such as email body, etc.
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.success) {
      this.setState({
        formValidity,
        errorType: "Success, we'll get back to you shortly!",
        submitDisabled: true,
        name: '',
        email: '',
        message: ''
    });
    }
    else {
      this.setState({
        formValidity,
        errorType
    })
    }
  })
  .catch((error) => {
    console.error(error);
  });
  
}
}
    render() {
      const envolope = window.innerWidth > 600 ? 'col-6' : 'col-0' ;
      const form = window.innerWidth > 600 ? 'col-6' : 'col-12' ;

        const options = {
            reverse:        false, 
            max:            35,     
            perspective:    1000,   
            scale:          1,   
            speed:          300,
            transition:     true,   
            axis:           null,   
            reset:          true,   
            easing:         "cubic-bezier(.03,.98,.52,.99)"
        }
        return (
            <>
              <section className="container-fluid" id="contact">
                  <div className="row contactback">
                  <div className="container p-5 shadow contactSection">
        <div className={`${envolope}`}>
          <Tilt className="contact100-pic Tilt" options={options} >
            <img className="Tilt-inner" src={require("../../../../images/img-01.png")} alt="IMG" />
          </Tilt>
          </div>
          <div className={`${form}`}>
          <form className="contact100-form validate-form">
            <span className="contact100-form-title lead">
            Contactez-nous
            </span>
            <div className="wrap-input100 validate-input" data-validate="Name is required">
              <input className="input100" type="text" name="name" placeholder="Nom" value={this.state.name} onChange={event => this.changeValue(event)} />
              <span className="focus-input100" />
              <span className="symbol-input100">
              <FontAwesomeIcon icon={['fas', 'user']} />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
              <input className="input100" type="text" name="email" placeholder="Adresse email" value={this.state.email} onChange={event => this.changeValue(event)} />
              <span className="focus-input100" />
              <span className="symbol-input100">
              <FontAwesomeIcon icon={['fas', 'envelope']} />
              </span>
            </div>
            <div className="wrap-input100 validate-input" data-validate="Message is required">
              <textarea className="input100" name="message" placeholder="Écrivez votre question" defaultValue={this.state.message} onChange={event => this.changeValue(event)} />
              <span className="focus-input100" />
            </div>
            <div className="container-contact100-form-btn">
              <button disabled={this.state.submitDisabled} onClick={(event) => this.onSubmit(event)} className="contact100-form-btn">
                Send
              </button>
              {/* <button disabled={this.state.submitDisabled} onClick={(event) => this.onSubmit(event)}>Submit</button> */}
               <FormError errorType={this.state.errorType}/>
            </div>
          </form>
        </div>
      </div>
                  </div>
                  
                </section>  
            </>
        )
    }
}
