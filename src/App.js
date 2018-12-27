import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import LandingPage from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Landing Page.js';
import Demo from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Demo.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}/>
          <Route exact path="/demo" component={Demo}/>
        </div>
      </Router>
    );
  }
}

export default App;
