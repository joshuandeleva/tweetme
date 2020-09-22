import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyDJ0VicZk5XCV-qpMhcT_yShs2lFtajaEA",
  authDomain: "tweetme-40228.firebaseapp.com",
  databaseURL: "https://tweetme-40228.firebaseio.com",
  projectId: "tweetme-40228",
  storageBucket: "tweetme-40228.appspot.com",
  messagingSenderId: "1046543260947",
  appId: "1:1046543260947:web:3c33ad5247d21cbbd80ee6",
  measurementId: "G-K61HE30MXK"
};
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
export default db;