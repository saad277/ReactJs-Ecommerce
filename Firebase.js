

import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'



const firebaseConfig = {
    apiKey: "AIzaSyBch0LzBbfF-KIpGKhY-SggIPswgv5FTzQ",
    authDomain: "react-firebase-402f6.firebaseapp.com",
    databaseURL: "https://react-firebase-402f6.firebaseio.com",
    projectId: "react-firebase-402f6",
    storageBucket: "react-firebase-402f6.appspot.com",
    messagingSenderId: "515628725453",
    appId: "1:515628725453:web:0557fb842ba89d6be9e584"
  };


  // Initialize Firebase


  firebase.initializeApp(firebaseConfig);

  firebase.firestore();

  export default firebase;