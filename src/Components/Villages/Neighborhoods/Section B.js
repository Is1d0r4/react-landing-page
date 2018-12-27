import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import ArticleCover from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/ArticleCover.js';
import SectionDescription from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Section Description.js';

class SectionB extends React.Component{
  render(){
    return(
        <section className="section-b">
          <Container>
            <Row>
              <ArticleCover/>
              <SectionDescription/>
            </Row>
          </Container>
        </section>
    )
  }
}

export default SectionB;
