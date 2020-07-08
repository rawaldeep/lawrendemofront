import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import UseCases from '../Footer/UseCases';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
      class: ''
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  listenScrollEvent = e => {
    if (window.scrollY > 100) {
      this.setState({class: 'shadow NavMove'})
    } else {
      this.setState({class: ''})
    }
  }
  handleClick = e =>{
    let active  = document.querySelector('.active');
    active.classList.remove("active");
    e.currentTarget.classList.add('active');
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
  render() {

    return (
      <>
      <Navbar className={`navbar fixed-top navbar-expand-lg ${this.state.class}`}>
      <NavbarBrand href="/" className="navbar-brand"><img alt="lawren" 
      src={require("../../../../images/footerlogo.png")}
       className="logo" /></NavbarBrand>
      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar className="d-flex justify-content-end">
            <Nav id="#navbarNavDropdown">
              <NavItem>
                <Link to="/legaldepartment/nl/#home" onClick={this.handleClick} className="nav-link active"> Home </Link>
              </NavItem>
              <NavItem>
                <Link to="/legaldepartment/nl/#Features" onClick={this.handleClick} className="nav-link">Kenmerken</Link>
              </NavItem>
              <NavItem>
                <Link to="/legaldepartment/nl/#benefits" onClick={this.handleClick} className="nav-link">Voordelen</Link>
              </NavItem>
              <NavItem>
                <Link to="/legaldepartment/nl/#team" onClick={this.handleClick} className="nav-link">Team</Link>
              </NavItem>
              <NavItem>
                <Link to="/legaldepartment/nl/#contact" onClick={this.handleClick} className="nav-link">Contact</Link>
              </NavItem>
              <NavItem>
                <Link to="/legaldepartment/blog/nl" className="nav-link"> Blog </Link>
              </NavItem>
              <NavItem>
                <Link to="/legaldepartment/FAQ/nl" className="nav-link"> FAQ </Link>
              </NavItem>
              {/* <NavItem>
                <Link className="nav-link calculate" onClick={this.handleClick} to="/legaldepartment/nl/#calculate">Bereken uw voordelen</Link>
              </NavItem> */}
              <NavItem className="sl-nav">
                <div className="nav-link">
              <ul>
                 <li><Link className="inner-link" to="/legaldepartment/usecase/nl/">Usecases</Link>
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa langArrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                   <div className="triangle"></div>
                   <ul>
                     <UseCases/>
                   </ul>
                 </li>
               </ul>
               
               </div>
              </NavItem>
              <NavItem className="sl-nav">
                <div className="nav-link">
              <ul>
                 <li>Nederlands
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa langArrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                   <div className="triangle"></div>
                   <ul>
                   <li><i className="sl-flag flag-usa"></i><Link to="/legaldepartment/en"><span>English</span></Link></li>
                     <li><i className="sl-flag flag-de"></i><Link to="/legaldepartment/de"><span>Deutsch</span></Link></li>
                     <li><i className="sl-flag flag-fr"></i><Link to="/legaldepartment/fr"><span>Français</span></Link></li>
                     <li><i className="sl-flag flag-nl"></i><span className="active">Nederlands</span></li>
                   </ul>
                 </li>
               </ul>
               
               </div>
              </NavItem>
            </Nav>
          </Collapse>
</Navbar> 
      </>
    )
  }
}
