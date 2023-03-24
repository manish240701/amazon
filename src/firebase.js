import firebase from "firebase";
const fireaseapp = firebase.initializeApp({
  apiKey: "AIzaSyCfSSP-v0JFwCjrrc0RG1hYA4-VUD3mFhc",
  authDomain: "kec-activity-point.firebaseapp.com",
  projectId: "kec-activity-point",
  storageBucket: "kec-activity-point.appspot.com",
  messagingSenderId: "631970304290",
  appId: "1:631970304290:web:a650376aa3614e5866d57b"
});
const auth = fireaseapp.auth();
export { auth};