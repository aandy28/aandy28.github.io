import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import LandingAll from './landing-all.js';
import MeetTheTeam from '../meet-the-team/index.js';
import RecentWork from '../recent-work/index.js';
import Services from '../services/index.js';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingAll} />
          <Route path="/meet-the-team" component={MeetTheTeam} />
          <Route path="/recent-work" component={RecentWork} />
          <Route path="/services" component={Services} />
        </div>
      </Router>
    );
  }
}

export default App;
