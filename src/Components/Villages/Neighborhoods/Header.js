import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Navigation from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Navigation.js';
import CallToAction from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Call To Action.js';
import SlackChannel from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Slack Channel.js';

class Header extends React.Component{
  render(){
    return(
        <section className="header">
          <Container>
            <Row>
              <Navigation/>
            </Row>
            <Row>
              <CallToAction title={this.props.title} subtitle={this.props.subtitle}/>
            </Row>
            <Row>
              <SlackChannel messages={this.props.messages}/>
            </Row>
          </Container>
        </section>
    )
  }
}

export default Header;
