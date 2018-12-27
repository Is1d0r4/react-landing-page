import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Title from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Title.js';
import Subtitle from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Subtitle.js';
import Button from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Button.js';

class CallToAction extends React.Component{
  render(){
    return(
        <Col lg={12}>
          <Title title={this.props.title}/>
          <Subtitle subtitle={this.props.subtitle}/>
          <Button/>
        </Col>
    )
  }
}

export default CallToAction;
