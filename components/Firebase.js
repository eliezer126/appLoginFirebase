// Import the functions you need from the SDKs you need
import Firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYYf1rL7s8flmrIcOt7x2Cn5GUoSemIZQ",
  authDomain: "appviagens-d1e3d.firebaseapp.com",
  projectId: "appviagens-d1e3d",
  storageBucket: "appviagens-d1e3d.appspot.com",
  messagingSenderId: "706533896807",
  appId: "1:706533896807:web:b77d70eda080991f7c5ac2"
};

// Initialize Firebase
Firebase.initializeApp(firebaseConfig);
export default Firebase;