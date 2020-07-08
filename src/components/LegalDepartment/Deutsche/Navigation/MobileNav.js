import React, { Component } from 'react'
import { elastic as Menu  } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import Icon from './CloseIcon';


export default class MobileNav extends Component {
    constructor (props) {
        super(props);
        this.state = {
            areMenusOpen: true
        };
        this.closeAllMenusOnEsc = (e) => {
            e = e || window.event;
          
            if (e.key === 'Escape' || e.keyCode === 27) {
              this.setState({areMenusOpen: false});
              console.log('working')
            }
          };
      }
    styles = {
        BurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          right: '36px',
          top: '36px'
        },
        bmBurgerBars: {
          background: '#373a47'
        },
        bmBurgerBarsHover: {
          background: '#a90000'
        },
        bmCrossButton: {
          height: '50px',
          width: '50px',
          top: '1em',
          right: '1em'
        },
        bmCross: {
          background: '#fff'
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%'
        },
        bmMenu: {
          background: '#60BEFE',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#60BEFE',
          width: '102%'
        },
        bmItemList: {
          fontSize: '1.5em',
          padding: '0.8em'
        },
        bmItem: {
          display: 'block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.3)'
        }
      }
    render() {
        
        return (
            <>
            
        <Menu id="elastic"  styles={ this.styles } pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" } customCrossIcon={ <Icon/> } right>        
        <Link to="/legaldepartment/de/#home" className="menu-item"> Home </Link>
        <Link to="/legaldepartment/de/#Features" className="menu-item">Features</Link>
        <Link to="/legaldepartment/de/#benefits" className="menu-item">Benefits</Link>
        <Link to="/legaldepartment/de/#team" className="menu-item">Team</Link>
        <Link to="/legaldepartment/de/#contact" className="menu-item">Contact</Link>
        <Link to="/blog" className="menu-item"> Blog </Link>
        <Link to="/FAQ" className="menu-item"> FAQ </Link>
        <Link className="menu-item calculate" to="/lawyer/#calculate">Calculate Your <br/>Benefits</Link>
      </Menu>
            </>
        )
    }
}
