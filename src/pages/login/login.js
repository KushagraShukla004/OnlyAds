import React from "react";
import "../../App.css";
import InputField from "./InputField";
// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAzE22GKxTZYzRDd5_zlntGvF6Klf4cIYA",
//   authDomain: "onlyads-73fad.firebaseapp.com",
//   projectId: "onlyads-73fad",
//   storageBucket: "onlyads-73fad.appspot.com",
//   messagingSenderId: "890652105568",
//   appId: "1:890652105568:web:56924ef04b5f9b4e8f5c05",
// };
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const Login = function () {
  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title text-center">Login Form</h2>
        <InputField label="Email" id="emailField" />
        <InputField label="Password" id="passwordField" />
        <button className="btn btn-success form-control">Login</button>
      </div>
    </div>
  );
};

export default Login;
