import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import UseCases from '../Footer/UseCases';

export default class BlogNav extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  handleChange(){
    let location = window.location.pathname;
    let split = location.split("/");
    let extracted = null;
    if(split.length === 4){
      extracted = split[2];
      extracted = extracted.toLowerCase();
   }
    let navlinks = document.querySelectorAll('.nav-link');
    navlinks.forEach(item => {
     let txt = item.textContent.trim().toLowerCase();
     let clas = "active";
     if(txt === extracted){
      let arr = item.className.split(" ");
      if (arr.indexOf(clas) === -1) {
        item.className += " " + clas
      }
     }
    })
  }
  
    componentDidMount(){
      this.handleChange();
    }
    
  render() {

    return (
      <>
      <Navbar className="navbar shadow bg-white blogNav navbar-expand-lg">
      <NavbarBrand href="/" className="navbar-brand"><img alt="lawren" src={require("../../../../images/footerlogo.png")} className="logo" /></NavbarBrand>
      <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar className="d-flex justify-content-end">
            <Nav id="#navbarNavDropdown">
              <NavItem>
                <Link to="/legaldepartment/en" className="nav-link"> Home </Link>
              </NavItem>
              <NavItem>
                <NavLink href="/legaldepartment/en/#Features">Features</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/legaldepartment/en/#benefits">Benefits</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/legaldepartment/en/#team">Team</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/legaldepartment/en/#contact">Contact</NavLink>
              </NavItem>
              <NavItem>
                <Link to="/legaldepartment/blog/en" onClick={this.handleChange} className="nav-link"> Blog </Link>
              </NavItem>
              <NavItem>
                <Link to="/legaldepartment/FAQ/en" onClick={this.handleChange} className="nav-link"> FAQ </Link>
              </NavItem>
              {/* <NavItem>
              <Link className="nav-link calculate" to="/legaldepartment/en/#calculate">Calculate Your Benefits</Link>
              </NavItem> */}
              <NavItem className="sl-nav">
                <div className="nav-link">
              <ul>
                 <li><Link className="inner-link" to="/legaldepartment/usecase/en/">Usecases</Link>
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
                 <li>English
                 <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-down" className="svg-inline--fa langArrow" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path></svg>
                   <div className="triangle"></div>
                   <ul>
                     <li><i className="sl-flag flag-usa"></i> <span className="active">English</span></li>
                     <li><i className="sl-flag flag-de"></i><Link to="/legaldepartment/de"><span>Deutsch</span></Link></li>
                     <li><i className="sl-flag flag-fr"></i><Link to="/legaldepartment/fr"><span>Français</span></Link></li>
                     <li><i className="sl-flag flag-nl"></i><Link to="/legaldepartment/nl"><span>Nederlands</span></Link></li>
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
