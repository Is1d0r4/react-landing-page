import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'C:/Users/Isidora/Desktop/react-landing-page/src/firebase.js';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
const bot = db.collection('bot').doc('OcGPGA2KBKmKXZK95sKu');


class BotMessage extends React.Component{
  constructor() {
    super()
    this.state = {avatar: "", username: "", message: "", article: "", showComponent: false}
  }

  componentDidMount(){
    let firebaseAvatar;
    let firebaseUsername;
    let firebaseMessage;
    let firebaseArticle;

    setTimeout(() => {
      this.setState({showComponent: true});
    }, 1500)

    let promise1 = new Promise((resolve, reject) => {
      bot.get().then(doc => {
        let data = doc.data();
        firebaseAvatar = data.avatar;
        resolve(firebaseAvatar);
      });
    });

    let promise2 = new Promise((resolve, reject) => {
      bot.get().then(doc => {
        let data = doc.data();
        firebaseUsername = data.username;
        resolve(firebaseUsername);
      });
    });

    let promise3 = new Promise((resolve, reject) => {
      bot.get().then(doc => {
        let data = doc.data();
        firebaseMessage = data.message;
        resolve(firebaseMessage);
      });
    });

    let promise4 = new Promise((resolve, reject) => {
      bot.get().then(doc => {
        let data = doc.data();
        firebaseArticle = data.article;
        resolve(firebaseArticle);
      });
    });

    Promise.all([promise1, promise2, promise3, promise4]).then(values => {
      this.setState({
        avatar: values[0],
        username: values[1],
        message: values[2],
        article: values[3]
      })
    });
  }

  render(){
    const showComponent = this.state.showComponent;
    return(
      <div>
        {showComponent ? (
          <div className="bot-message">
            <div style={{background: this.state.avatar}} className="bot-avatar"></div>
            <div className="username">{this.state.username}</div>
            <div className="message">{this.state.message}</div>
            <a href={this.state.article}>
              <span className="article">{this.state.article}</span>
            </a>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

export default BotMessage;
