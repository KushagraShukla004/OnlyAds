import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Design from "./pages/Design";
import Gallery from "./pages/Gallery";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import ContactForm from "./components/contactform";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/design" component={Design} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/contact-us" component={ContactForm} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
