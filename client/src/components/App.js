import React, { Component } from "react";
import { Router } from "@reach/router";
// Styling
import "../utilities.css";
import "./App.css";

// Pages
import NotFound from "./pages/NotFound.js";
import Homepage from "./pages/Homepage.js";
import Authpage from "./pages/Authpage.js";
import ProfileEdit from "./pages/ProfileEdit.js";
import Resources from "./pages/Resources.js";
import FAQ from "./pages/FAQ.js";
import WhoWeAre from "./pages/WhoWeAre.js";
import Contact from "./pages/Contact.js";
import FindATutor from "./pages/FindATutor.js";
// Components
import NavBar from "./modules/NavBar.js";


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
        {/* Boostrap */}
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossorigin="anonymous"
        />
        <NavBar />
        <Router basepath="/">
          <Homepage path="/" />
          <Resources path="/resources" />
          <Authpage path="/auth" />
          <ProfileEdit path="/edit" />
          <FAQ path="/faq" />
          <WhoWeAre path="/whoweare" />
          <Contact path="/contact" />
          <FindATutor path="/findatutor"/>
          <NotFound default></NotFound>
        </Router>
        
      </>
    );
  }
}

export default App;
