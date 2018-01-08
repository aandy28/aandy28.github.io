import React, { Component } from 'react';

import './Nav.css';
import logo from '../../images/logo.png'

class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleClick= this.handleClick.bind(this);
    this.state = {
        active: false,
    };
  }

  handleClick(){
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  }

  render() {
    return (
      <nav className={this.state.active ? 'c-primary-nav--active': 'c-primary-nav'}>
        <header className="c-primary-nav__header">
          <div className="u-width-limiter">
            <a className="c-primary-nav__logo-wrapper" href="/">
              <img src={logo} />
            </a>
            <div className="c-primary-nav--right" >
              <div className="c-primary-nav__hamburger js-hamburger" onClick={this.handleClick}>
                <div className="c-primary-nav__hamburger-bar c-primary-nav__hamburger-bar--1" ></div>
                <div className="c-primary-nav__hamburger-bar c-primary-nav__hamburger-bar--2" ></div>
                <div className="c-primary-nav__hamburger-bar c-primary-nav__hamburger-bar--3" ></div>
              </div>
            </div>
          </div>
        </header>
        <div className="c-primary-nav__overlay-wrapper-backdrop" >
          <div className="c-primary-nav__overlay-wrapper-backdrop-gradient" ></div>
          <div className="c-primary-nav__overlay-wrapper" >
            <ul className={this.state.active ? 'c-primary-nav__overlay on': 'c-primary-nav__overlay'} >
              <a href="/" >
                <li tabIndex="0" className="type-bloc-headline" >Home</li>
              </a>
              <a href="/services" >
                <li tabIndex="0" className="type-bloc-headline" >Services</li>
              </a>
              <a href="/recent-work" >
                <li tabIndex="0" className="type-bloc-headline" >Recent Work</li>
              </a>
              <a href="/meet-the-team" >
                <li tabIndex="0" className="type-bloc-headline" >Meet The Team</li>
              </a>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Nav;
