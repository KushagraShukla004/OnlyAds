import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Login from "./pages/login/login";
import Signup from "./pages/login/signup";
import ContactForm from "./components/contactform";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAzE22GKxTZYzRDd5_zlntGvF6Klf4cIYA",
  authDomain: "onlyads-73fad.firebaseapp.com",
  projectId: "onlyads-73fad",
  storageBucket: "onlyads-73fad.appspot.com",
  messagingSenderId: "890652105568",
  appId: "1:890652105568:web:56924ef04b5f9b4e8f5c05",
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/contact-us" component={ContactForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
