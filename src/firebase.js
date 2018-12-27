import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyCEgOZIku8YZ8zntFniE6L8G4NAZ0A0rwk",
    authDomain: "chat-bot-demo-cf8a6.firebaseapp.com",
    databaseURL: "https://chat-bot-demo-cf8a6.firebaseio.com",
    projectId: "chat-bot-demo-cf8a6",
    storageBucket: "chat-bot-demo-cf8a6.appspot.com",
    messagingSenderId: "108684943479"
  };
  firebase.initializeApp(config);

export default firebase;
