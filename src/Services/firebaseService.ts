// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyApEb5lSpnzjYrLudPLHGmTlMRiSn1EOoo",
  authDomain: "cv-builder-e8a8f.firebaseapp.com",
  databaseURL: "https://cv-builder-e8a8f-default-rtdb.firebaseio.com",
  projectId: "cv-builder-e8a8f",
  storageBucket: "cv-builder-e8a8f.appspot.com",
  messagingSenderId: "798705416456",
  appId: "1:798705416456:web:0796135001a3c22ce354bd",
  measurementId: "G-7T8P7F8SFW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const firebaseAuth = firebase.auth();
export default firebase;
