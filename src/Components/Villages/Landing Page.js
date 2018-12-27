import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Header from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Header.js';
import SectionA from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Section A.js';
import SectionB from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Section B.js';
import SectionC from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Section C.js';
import Footer from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Footer.js';


class LandingPage extends React.Component{
  render(){
    return(
        <div className="landing-page">
          <Header messages={false} title="Developer Bot for Slack" subtitle="One article to one\
15  random person in your Slack group. Once a day."/>
          <SectionA/>
          <SectionB/>
          <SectionC title="Developer Bot for Slack" subtitle="One article to one random person in your Slack group. Once a day."/>
          <Footer/>
        </div>
    )
  }
}

export default LandingPage;
