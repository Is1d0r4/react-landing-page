import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col} from 'react-grid-system';

import UserMessage from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/User Message.js';
import BotMessage from 'C:/Users/Isidora/Desktop/react-landing-page/src/Components/Villages/Neighborhoods/Blocks/Houses/Bot Message.js';

class SlackChannel extends React.Component{
  render(){
    return(
        <Col lg={12}>
          <img className="slack-channel" src={require("C:/Users/Isidora/Desktop/react-landing-page/src/images/Slack Channel.svg")} />
          { this.props.messages ? (
            <div>
              <UserMessage/>
              <BotMessage/>
            </div>):(
              <div></div>
            )}
        </Col>
    )
  }
}

export default SlackChannel;
