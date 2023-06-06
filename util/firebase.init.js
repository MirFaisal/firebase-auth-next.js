// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRexkZGENoiIhF0DbtOfhftZ9ZxIbhh5g",
  authDomain: "practice-project-with-next.firebaseapp.com",
  projectId: "practice-project-with-next",
  storageBucket: "practice-project-with-next.appspot.com",
  messagingSenderId: "410199159561",
  appId: "1:410199159561:web:ac5059cb3de78e8d5859d8",
};

// Initialize Firebase
const firebase_App = initializeApp(firebaseConfig);

export default firebase_App;
