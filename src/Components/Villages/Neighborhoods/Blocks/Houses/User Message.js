import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'C:/Users/Isidora/Desktop/react-landing-page/src/firebase.js';

const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

let user = db.collection("user").doc("R3yyfwO2JmrNuHGxxMdu");

class UserMessage extends React.Component{
  constructor() {
    super()
    this.state = {avatar: "", username: "", message: "", showComponent: false}
  }

  componentDidMount(){
    let firebaseAvatar;
    let firebaseUsername;
    let firebaseMessage;

    setTimeout(() => {
      this.setState({showComponent: true});
    }, 3000)

    let promise1 = new Promise((resolve, reject) => {
      user.get().then(doc => {
        let data = doc.data();
        firebaseAvatar = data.avatar;
        resolve(firebaseAvatar);
      });
    });

    let promise2 = new Promise((resolve, reject) => {
      user.get().then(doc => {
        let data = doc.data();
        firebaseUsername = data.username;
        resolve(firebaseUsername);
      });
    });

    let promise3 = new Promise((resolve, reject) => {
      user.get().then(doc => {
        let data = doc.data();
        firebaseMessage = data.message;
        resolve(firebaseMessage);
      });
    });

    Promise.all([promise1, promise2, promise3]).then(values => {
      this.setState({
        avatar: values[0],
        username: values[1],
        message: values[2]
      })
    });
  }

  render(){
    const showComponent = this.state.showComponent;
    return(
      <div>
        {showComponent ? (
          <div className="user-message">
            <div style={{background: this.state.avatar}} className="user-avatar"></div>
            <div className="username">{this.state.username}</div>
            <div className="message">{this.state.message}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

export default UserMessage;
