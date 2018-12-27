import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import SectionDescription from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Section Description.js';
import Laptop from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Laptop.js';

class SectionA extends React.Component{
  render(){
    return(
        <section className="section-a">
          <Container>
            <Row>
              <SectionDescription/>
              <Laptop/>
            </Row>
          </Container>
        </section>
    )
  }
}

export default SectionA;
