import React, { Component } from "react";
import { Router } from "@reach/router";
// Styling
import "../utilities.css";
import "./App.css";

// Pages
import NotFound from "./pages/NotFound.js";
import Homepage from "./pages/Homepage.js";
import SignIn from "./pages/SignIn.js";
import Register from "./pages/Register.js";
import Resources from "./pages/Resources.js";
import FAQ from "./pages/FAQ.js";
import WhoWeAre from "./pages/WhoWeAre.js";
import Contact from "./pages/Contact.js";
import FindATutor from "./pages/FindATutor.js";
import Profile from "./pages/Profile.js";

import ProtectedPage from "./modules/ProtectedPage.js";

// Components
import NavBar from "./modules/NavBar.js";
// Providers 
import UserProvider from "../providers/UserProvider";

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  render() {
    return (
      <>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <UserProvider>
          <NavBar />
           {/* "primary={false}" breaks an accessibility feature of reach router that allows screen readers to work
           https://stackoverflow.com/questions/53058110/stop-reach-router-scrolling-down-the-page-after-navigating-to-new-page*/}
          <Router primary={false} basepath="/"> 
            <Homepage path="/" />
            <Resources path="/resources" />
            <SignIn path="/auth" />
            <Register path="/register" />
            <FAQ path="/faq" />
            <WhoWeAre path="/whoweare" />
            <Contact path="/contact" />
            <ProtectedPage path="/findatutor" component={FindATutor}/>
            <ProtectedPage path="/profile" component={Profile}/>
            <NotFound default/>
          </Router>
        </UserProvider>
      </>
    );
  }
}

export default App;
