import React, { Component } from 'react';
import './App.css';
import video from './627961583.mp4';

class Landing extends Component {
  render() {
    return (
      <div className="App _ie-flex-min-height-fix">
        <div className="o-section-full o-section--below-nav landing">
          <div className="u-width-limiter">
            <div className="c-section-video-fill-wrapper">
              <video autoPlay="true" loop="true" muted="" data-load-time-perc="auto">
                <source src={video} type="video/mp4" />
              </video>
            </div>
            <header>
              <h6 className="type-subheadlines-buttons">
                <div>We are Absolute.</div>
              </h6>
              <h2 className="type-intro-headline">
                <div>Branding Agency<br />for the<br />fitness industry.</div>
              </h2>
            </header>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
