import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Services from "./pages/Services";
import Products from "./pages/Products";
import Login from "./pages/login/login";
import Signup from "./page/login/signup";
import ContactForm from "./pages/contactform";

import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import Login from "./components/pages/login/login";
import Signup from "./components/pages/login/signup";

import ContactForm from "./components/contactform";


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
          <Route path="/contact-us" component={ContactForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
