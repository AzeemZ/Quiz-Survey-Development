import * as firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCynnbhadnYGVYU-QCDTPwxg4TCO2d9p3s",
  authDomain: "quiz-survey-development.firebaseapp.com",
  projectId: "quiz-survey-development",
  storageBucket: "quiz-survey-development.appspot.com",
  messagingSenderId: "176780965918",
  appId: "1:176780965918:web:9e3cc9d7e399c6d760960f",
  measurementId: "G-HBC7PV4W8X",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
