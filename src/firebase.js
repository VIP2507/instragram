import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBYfFdtRFdaxgZCXjfgxzbE_JwkaxVnsUM",
  authDomain: "insta-a7137.firebaseapp.com",
  projectId: "insta-a7137",
  storageBucket: "insta-a7137.appspot.com",
  messagingSenderId: "214576447464",
  appId: "1:214576447464:web:788a17f6630b86db07ee5d",
  measurementId: "G-STG1DZBMQK"

});

var db = firebaseApp.firestore();
var auth=firebaseApp.auth();
var storage=firebaseApp.storage()


export { db ,auth,storage};
