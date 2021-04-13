import firebase from 'firebase';
// Firebase Configuration

var firebaseConfig = {
    apiKey: "AIzaSyCORm5vskOyCLjZSpKYsDtGZcKPbJrmicc",
    authDomain: "wrapid-gift-1693c.firebaseapp.com",
    databaseURL: "https://wrapid-gift-1693c-default-rtdb.firebaseio.com",
    projectId: "wrapid-gift-1693c",
    storageBucket: "wrapid-gift-1693c.appspot.com",
    messagingSenderId: "492289068346",
    appId: "1:492289068346:web:13af3e3566aa0062ea9403"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  

  export default fire;