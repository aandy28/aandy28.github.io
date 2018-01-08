import React, { Component } from 'react';
import Landing from './landing.js'
import LandingWork from './landing-work.js'
import Contact from './contact.js'

class LandingAll extends Component{
  render()
  {
    return (
      <div>
        <Landing />
        <LandingWork />
        <Contact />
      </div>
    );
  }
}

export default LandingAll;

