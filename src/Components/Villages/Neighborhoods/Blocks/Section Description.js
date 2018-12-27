import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col } from 'react-grid-system';

import Heading from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Heading.js';
import Divider from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Divider.js';
import Paragraph from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Paragraph.js';

class SectionDescription extends React.Component{
  render(){
    return(
        <Col lg={6}>
          <Heading/>
          <Divider/>
          <Paragraph/>
        </Col>
    )
  }
}

export default SectionDescription;
