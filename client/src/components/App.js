import React, { Component } from "react";
import { Router } from "@reach/router";
import NotFound from "./pages/NotFound.js";
import Homepage from "./pages/Homepage.js";
import Contact from "./pages/Contact.js"
import FAQs from "./pages/FAQs.js";
import Resources from "./pages/Resources.js";
import SignUp from "./pages/SignUp.js";
import WhoWeAre from "./pages/WhoWeAre.js";
import NavBar from "./modules/NavBar.js"

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
//import "../css/animate.min.css";
//import "../css/bootstrap.min.css";
//import "../css/utilities.css";

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
        <NavBar/>
        <Router>
          <Homepage
            path="/"
          />
          <SignUp path="/signup"/>
          <Resources path="/resources"/>
          <WhoWeAre path="/whoweare"/>
          <FAQs path="/faqs"/>
          <Contact path="/contact"/>
          <NotFound default />
        </Router>
      </>
    );
  }
}

export default App;
