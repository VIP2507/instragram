import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBWRgVYqudNRmURJyG0NgQb7Yu6YXcjI7Q",
  authDomain: "instagram-731f8.firebaseapp.com",
  projectId: "instagram-731f8",
  storageBucket: "instagram-731f8.appspot.com",
  messagingSenderId: "929077661846",
  appId: "1:929077661846:web:d1e81cfb4e753969a6f2b7",
  measurementId: "G-PGCX5TBH75"
});

var db = firebaseApp.firestore();
var auth = firebaseApp.auth();
var storage = firebaseApp.storage()


export { db, auth, storage };
