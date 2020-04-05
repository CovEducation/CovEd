import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./NavBar.css";
// auth
import firebase, { auth } from "../../firebase-config";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { user: undefined };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      console.log("ello");
      this.setState({ user: user });
    });
  }

  signout(event) {
    auth.signOut();
  }

  render() {
    let userLinks;
    if (!this.state.user) {
      userLinks = (
        <>
          <Nav.Link href="/auth">Sign In</Nav.Link>
          <Nav.Link href="/register">Register</Nav.Link>
        </>
      );
    } else {
      userLinks = (
        <>
          <Nav.Link href="/findatutor">Find a Tutor</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
          <Nav.Link href="/" onSelect={this.signout} >Sign Out</Nav.Link>
        </>
      )
    }

    return (
      <Navbar collapseOnSelect fixed="sticky-top" expand="lg" variant="light">
        <Navbar.Brand href="/">CovEd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/resources">Resources</Nav.Link>
            <Nav.Link href="/faq">FAQ</Nav.Link>
            <Nav.Link href="/whoweare">Who We Are</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            {userLinks}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
