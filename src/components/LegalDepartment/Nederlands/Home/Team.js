import React, { Component } from 'react'

export default class Team extends Component {
    render() {
        return (
            <>
              <section className="container-fluid">
        <div className="row">
          <div className="col-md-12 features team p-5" id="Team">
            <div className="line text-center pb-4">
              <h2>Meet the Team</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row featurecards p-3 pr-5 text-center">
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                {/* <img class="card-img-top" src="./images/7fd84e1d-134a-40e5-a071-45aab492e4b3.jpg" alt="Card image cap"> */}
                <div className="card-body">
                  <h5 className="card-title"><strong>Team member1</strong>
                  </h5>
                  <p className="card-text">About our Team Member </p>
                  <ul>
                      <li>Contact info</li>
                      </ul>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Contact btn</a>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title"><strong>Team member2</strong>
                  </h5>
                  <p className="card-text">About our Team Member </p>
                  <ul>
                      <li>Contact info</li>
                      </ul>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Contact btn</a>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title"><strong>Team member3</strong>
                  </h5>
                  <p className="card-text">About our Team Member </p>
                  <ul>
                      <li>Contact info</li>
                      </ul>
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Contact btn</a>
                </div>
              </div>
            </div>
            <div className="row featurecards p-3 pr-5 text-center">
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                {/* <img class="card-img-top" src="./images/7fd84e1d-134a-40e5-a071-45aab492e4b3.jpg" alt="Card image cap"> */}
                <div className="card-body">
                  <h5 className="card-title"><strong>Team member1</strong>
                  </h5>
                  <p className="card-text">About our Team Member </p>
                  <ul>
                      <li>Contact info</li>
                      </ul>
                      
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Contact btn</a>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title"><strong>Team member2</strong>
                  </h5>
                  <p className="card-text">About our Team Member </p> 
                  <ul>
                      <li>Contact info</li>
                      </ul>
                      
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Contact btn</a>
                </div>
              </div>
              <div className="col-md-3 card" style={{width: '18rem'}}>
                <div className="card-img-top" />
                <div className="card-body">
                <h5 className="card-title"><strong>Team member3</strong>
                  </h5>
                  <p className="card-text">About our Team Member </p> 
                  <ul>
                      <li>Contact info</li>
                      </ul>
                      
                </div>
                <div className="card-footer">
                  <a href="#" className="btn btn-primary">Contact btn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
            </>
        )
    }
}
