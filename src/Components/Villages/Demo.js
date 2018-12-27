import React from 'react';
import ReactDOM from 'react-dom';

import Header from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Header.js';
import Footer from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Footer.js';

class Demo extends React.Component{
  render(){
    return(
        <div className="demo">
          <Header messages={true} title="Chat Bot Demo" subtitle="Watch how it works."/>
          <Footer/>
        </div>
    )
  }
}

export default Demo;
