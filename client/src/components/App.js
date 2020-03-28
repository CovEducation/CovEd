import React, { Component, Profiler } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import "../utilities.css";
import Homepage from "./pages/Homepage.js";
import Authpage from "./pages/Authpage.js";
import Profile from "./pages/Profile.js";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <>
        <Router basepath="/app/">
          <Homepage
            path="/"
          />
          <Authpage
            path="/auth"
          />
          <Profile 
            path="/profile"
          />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
