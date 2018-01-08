import React, { Component } from 'react';
import './home-blog.css';

class Contact extends Component {
  render() {
    return (
      <div className="_ie-flex-min-height-fix">
        <section className="o-section-full home-blog">
          <div className="u-width-limiter u-width-limiter--low-limited">
            <div className="home-blog__content-left">
              <h2 className="type-hero-headline">
                <div>Contact<br />Us</div>
              </h2>
            </div>

            <div className="home-blog__content-right js-blog-post">
              <div className="c-latest-blog-posts">
                <div className="contact-location__side-blocks-wrapper">
                  <div className="contact-location__side-block">
                    <h4 className="type-block-sub-headline">Become A Client</h4>
                    <p className="type-body-copy">
                      <a href="mailto:contact@absolute-fitness-media.com">contact@absolute-fitness-media.com</a>
                    </p>
                  </div>
                  <div className="contact-location__side-block">
                    <h4 className="type-block-sub-headline">Careers</h4>
                    <p className="type-body-copy">
                      <a href="mailto:contact@absolute-fitness-media.com">contact@absolute-fitness-media.com</a>
                    </p>
                  </div>
                  <div className="contact-location__side-block">
                    <h4 className="type-block-sub-headline">Everything Else</h4>
                    <p className="type-body-copy">
                      <a href="mailto:contact@absolute-fitness-media.com">contact@absolute-fitness-media.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Contact;
