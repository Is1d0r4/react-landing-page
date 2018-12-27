import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Branding from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Branding.js';
import DemoLink from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Demo Link.js';

class Navigation extends React.Component{
  render(){
    return(
      <div className="navigation-wrapper">
        <Col>
          <Branding/>
        </Col>
        <Col>
          <DemoLink/>
        </Col>
      </div>
    )
  }
}

export default Navigation;
