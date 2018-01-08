import React, { Component } from 'react';
import './home-work.css';

class LandingWork extends Component {
  render() {
    return (
      <div className="_ie-flex-min-height-fix">
        <div className="o-section-full home-work">
          <div className="u-width-limiter">
            <div className="home-work__content">
              <h6 className="type-subheadlines-buttons">Smashing it</h6>
              <h2 className="type-hero-headline">
                
                <div data-reactid="60">Lorem<br />ipsum<br />dolor sit</div>
              </h2>
              <hr className="c-hr c-hr--yellow c-hr--large" />
              <a href="/recent-work">
                <h6 className="type-subheadlines-buttons">See our work</h6>
              </a>
              <hr className="c-hr c-hr--black" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingWork;
