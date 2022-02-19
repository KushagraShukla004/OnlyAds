import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Home />
    </Router>
  );
}
