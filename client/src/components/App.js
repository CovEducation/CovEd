import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import "../utilities.css";
import Homepage from "./pages/Homepage.js";

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
        <Router>
          <Homepage
            path="/"
          />
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
