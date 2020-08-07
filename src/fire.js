import firebase from 'firebase'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCS-9s-lF4Blf9tkV9M-zIyUl3AvU-CjeA",
  authDomain: "learn-1811.firebaseapp.com",
  databaseURL: "https://learn-1811.firebaseio.com",
  projectId: "learn-1811",
  storageBucket: "learn-1811.appspot.com",
  messagingSenderId: "514346199618",
  appId: "1:514346199618:web:671d5586af1d606854dbdb"
};

var fire=firebase.initializeApp(firebaseConfig);
export default fire;