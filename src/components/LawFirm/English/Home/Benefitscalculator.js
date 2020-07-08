import React, {useState } from 'react';
import validator from 'validator';
import FormError from './FormErrors';

export default function Benefitscalculator() {
  const [state, setState] = useState({
    company: '',
    email: '',
    clients: 1,
    contracts: 1,
    junior_rate: 125,
    senior_rate: 250,
    formValidity: false,
    submitDisabled: false,
    formErrors: {
        email: 'Please Enter a correct Email',
        name: 'Names should contain only alphabet characters'
    }
  });
  const handleInputChange = e => {
    
    const { name, value} = e.target; 
  setState({...state, [name]: value});
  
  }

const clientMinus = e => {
  const { name } = e.currentTarget;
  let naam = state[name];
  let clientVal = parseInt(naam, 10);
  let value = clientVal - 1;
  if(value >= 0){
  setState({...state, [name]: value});
  }
};
const clientPLus = e => {
  const { name} = e.currentTarget;
  let naam = state[name];
  let clientVal = parseInt(naam, 10);
  let value = clientVal + 1;
  setState({...state, [name]: value});
};
const onSubmit = e => {
  e.preventDefault();
  let formValidity = true;
  let errorType = undefined;
  
  if (!validator.isEmail(state.email)) {
    formValidity = false;
    errorType = state.formErrors.email
} else if (!validator.isAlpha(state.company)) {
    formValidity = false;
    errorType = state.formErrors.name
}if (!formValidity) {
  setState({ ...state,
      formValidity,
      errorType
  })
} else {
  const {company, email, clients, contracts, junior_rate, senior_rate } = state;
  fetch('/calculationfunction', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      Company: company, 
      Company_Email: email, 
      Client: clients,
      Contacts: contracts,
      Junior: junior_rate,
      Senior: senior_rate
      // then continue this with the other inputs, such as email body, etc.
    })
  })
  .then((response) => response.json())
  .then((responseJson) => {
    if (responseJson.success) {
      setState({ ...state,
        formValidity,
        errorType: "Thanks! Please check you email!",
        submitDisabled: true,
        company: '',
        email: '',
        clients: 1,
        contracts: 1,
        junior_rate: 125,
        senior_rate: 250
    });
    }
    else {
      setState({ ...state,
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

  

  

    return (
        <>
           <section className="container-fluid">
           <div className="row benefits" id="calculate">
           <div className="col-md-4">
              <div className="calculateBenefits p-5 text-center">
                <div className="p-1">
                <img alt="calculator logo" src={require("../../../../images/calculate.png")} 
                // className="calculateLogo" 
                />
                </div>
              </div>
            </div>
            <div className="col-md-8 p-5">
              <div className="line pb-4">
                <h2 className="text-white">Calculate Your Benefits</h2>
              </div>
              <p className="lead text-white">Fill in the info below and calculate how much <strong>time</strong> you can <strong>save</strong> and how much extra <strong>revenue</strong> you can generate.</p>
            </div>
            
          </div>
        <div className="row grey p-5">
          <div className="container">
            {/* <div className="row">
              <div className="col text-center">
                <img alt=" calculator logo" src={require("../../images/calculate.png")} className="calculateLogo" />
                <p className="text-center lead text-primary">Calculate Your Benefits</p>
                <p className="text-center">Fill in the info below and calculate how much <strong>time</strong> you can <strong>save</strong> and how much extra <strong>revenue</strong> you can generate</p>
              </div>
            </div> */}
            <div className="row">
              <form className="container">
                <div className="form-row d-flex justify-content-between">
                  <div className="col-md-3 box p-4 card">
                    <p className="text-center">Amount of new clients/month</p>
                    <div className="card-body">
                      <button type="button" id="moins" 
                      name="clients"
                      onClick={clientMinus}
                      >
                        <img src={require("../../../../images/minus-icon.png")} data-lazy-type="image" data-src={require("../../../../images/minus-icon.png")} className="plusminus-icons lazy-loaded" alt="minus-icon" /><noscript>
                          &lt;img src={require("../../../../images/minus-icon.png")} class="plusminus-icons" alt="minus-icon"/&gt;</noscript>
                      </button>
                      <input type="text" name="clients" size={25} className="form-control" onChange={handleInputChange} value={state.clients} readOnly />
                      <button type="button" id="moins" 
                      name="clients"
                      onClick={clientPLus}
                      >
                        <img src={require("../../../../images/plus-icon.png")} data-lazy-type="image" data-src={require("../../../../images/plus-icon.png")} className="plusminus-icons lazy-loaded" alt="plus-icon" /><noscript>
                          &lt;img src={require("../../../../images/plus-icon.png")} class="plusminus-icons" alt="minus-icon"/&gt;</noscript>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-3 box p-4 card">
                    <p className="text-center"> <span style={{color: 'rgba(84, 100, 113, 0.5)'}}>If applicable</span><br />
                      Amount of new contracts to be drafted/month</p>
                    <div className="card-body">
                      <button type="button" id="moins" 
                      name="contracts"
                    onClick={clientMinus}
                      >
                        <img src={require("../../../../images/minus-icon.png")} data-lazy-type="image" data-src={require("../../../../images/minus-icon.png")} className="plusminus-icons lazy-loaded" alt="minus-icon" /><noscript>
                          &lt;img src={require("../../../../images/minus-icon.png")} class="plusminus-icons" alt="minus-icon"/&gt;</noscript>
                      </button>
                      <input type="text" size={25} className="form-control" name="contracts" onChange={handleInputChange} value={state.contracts} readOnly />
                      <button type="button" id="moins"  name="contracts"
                    onClick={clientPLus}
                      >
                        <img src={require("../../../../images/plus-icon.png")} data-lazy-type="image" data-src={require("../../../../images/plus-icon.png")} className="plusminus-icons lazy-loaded" alt="plus-icon" /><noscript>
                          &lt;img src={require("../../../../images/plus-icon.png")} class="plusminus-icons" alt="plus-icon"/&gt;</noscript>
                      </button>
                    </div>
                  </div>
                  <div className="col-md-6 box p-4 card">
                    <p className="text-center">Hourly rate</p>
                    <div className="card-body">
                      <div className="col">
                        <p className="text-center">Junior</p>
                        <div className="d-inline-flex ">
                          <button type="button" id="moins" 
                          name="junior_rate"
                          onClick={clientMinus}
                          >
                            <img src={require("../../../../images/minus-icon.png")} data-lazy-type="image" data-src={require("../../../../images/minus-icon.png")} className="plusminus-icons lazy-loaded" alt="minus-icon" /><noscript>
                              &lt;img src={require("../../../../images/minus-icon.png")} class="plusminus-icons" alt="minus-icon"/&gt;</noscript>
                          </button>
                          <input type="text" size={25} className="form-control" name="junior_rate" onChange={handleInputChange} value={state.junior_rate} />
                          <button type="button" id="moins" 
                          name="junior_rate"
                          onClick={clientPLus}
                          >
                            <img src={require("../../../../images/plus-icon.png")} data-lazy-type="image" data-src={require("../../../../images/plus-icon.png")} className="plusminus-icons lazy-loaded" alt="plus-icon" /><noscript>
                              &lt;img src={require("../../../../images/plus-icon.png")} class="plusminus-icons" alt="plus-icon"/&gt;</noscript>
                          </button>
                        </div>
                      </div>
                      <div className="col">
                        <p className="text-center">Senior</p>
                        <div className="d-inline-flex">
                          <button type="button" id="moins" 
                          name="senior_rate"
                        onClick={clientMinus}
                          >
                            <img src={require("../../../../images/minus-icon.png")} data-lazy-type="image" data-src={require("../../../../images/minus-icon.png")} className="plusminus-icons lazy-loaded" alt="minus-icon" /><noscript>
                              &lt;img src={require("../../../../images/minus-icon.png")} class="plusminus-icons" alt="minus-icon"/&gt;</noscript>
                          </button>
                          <input type="text" size={25} className="form-control" name="senior_rate" onChange={handleInputChange} value={state.senior_rate} />
                          <button type="button" id="moins" 
                          name="senior_rate"
                        onClick={clientPLus}
                          >
                            <img src={require("../../../../images/plus-icon.png")} data-lazy-type="image" data-src={require("../../../../images/plus-icon.png")} className="plusminus-icons lazy-loaded" alt="plus-icon" /><noscript>
                              &lt;img src={require("../../../../images/plus-icon.png")} class="plusminus-icons" alt="plus-icon"/&gt;</noscript>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row pt-3 pb-3">
                  <div className="col-md-8 companyData">
                    <div className="form-row"><input type="text" placeholder="Enter Company name" name="company" onChange={handleInputChange} value={state.company}/></div>
                    <div className="form-row"><input type="text" placeholder="Enter Email address" name="email" onChange={handleInputChange} value={state.email} /></div>
                  </div>
                  <div className="col-md-4 companyButton">
                  <button disabled={state.submitDisabled} onClick={(event) => onSubmit(event)} className="btn btn-primary">
                  <span className="personalizedreport">Get My Personalized Report</span>
              </button>
              <FormError errorType={state.errorType}/>
                    {/* <button type="button" className="btn btn-primary">
                        <a className="personalizedreport" href="#">Get My Personalized Report</a></button> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section> 
        </>
    )
}
