import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col} from 'react-grid-system';

class ArticleCover extends React.Component{
  render(){
    return(
        <Col lg={6}>
          <img className="article-cover" src={require("C:/Users/Isidora/Desktop/react-landing-page/src/images/Article-Cover.svg")} />
        </Col>
    )
  }
}

export default ArticleCover;
