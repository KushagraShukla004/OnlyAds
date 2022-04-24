import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Design from "./pages/Design";
import Gallery from "./pages/Gallery";
import Register from "./pages/register/register";
import EmailSent from "./pages/EmailSent";
import Login from "./pages/login/login";
import { StyledContainer } from "./components/Styles";

//auth &redux
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BasicRoute";
import { connect } from "react-redux";

function App({ checked }) {
  return (
    <>
      <Router>
        {checked && (
          <>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/gallery" component={Gallery} />
              <StyledContainer>
                {/* <Route path="/contact-us" component={ContactForm} /> */}
                <Route path="/design" component={Design} />
                <AuthRoute path="/dashboard">
                  <Dashboard />
                </AuthRoute>
                <BasicRoute path="/emailsent/:userEmail">
                  <EmailSent />
                </BasicRoute>
                <BasicRoute path="/register">
                  <Register />
                </BasicRoute>
                <BasicRoute path="/login/:userEmail?">
                  <Login />
                </BasicRoute>
              </StyledContainer>
            </Switch>
          </>
        )}
      </Router>
    </>
  );
}

const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
