import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Login from "./components/pages/login/login";
import Signup from "./components/pages/login/signup";
<<<<<<< HEAD
=======
import ContactForm from "./components/contactform";
>>>>>>> 0f6bce2fde629761778db8fc144288cca0692f12

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/sign-up" component={Signup} />
          <Route path="/login" component={Login} />
<<<<<<< HEAD
=======
          <Route path="/contact-us" component={ContactForm} />
>>>>>>> 0f6bce2fde629761778db8fc144288cca0692f12
        </Switch>
      </Router>
    </>
  );
}

export default App;
