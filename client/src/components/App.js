import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Homepage from "./pages/Homepage.js";
// import "../css/animate.min.css";
// import "../css/bootstrap.min.css";
// import "../css/creative.css";
import "../css/utilities.css";

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
