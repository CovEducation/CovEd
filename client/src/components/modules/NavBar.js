import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./NavBar.css";
// auth
import firebase, { auth } from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";

class NavBar extends Component {
  
  static contextType = UserContext;

  constructor(props) {
    super(props);
  }

  constructorDidMount() {}

  render() {
    if (this.context === undefined) {
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
              <Nav.Link href="/auth">Sign In</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    } else {
      return (
        <Navbar collapseOnSelect fixed="sticky-top" expand="lg" variant="light">
          <Navbar.Brand href="/">CovEd</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/resources">Resources</Nav.Link>
              <Nav.Link href="/findatutor">Find a Tutor</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
              <Nav.Link href="/whoweare">Who We Are</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/auth">Sign In</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      );
    }
  }
}

export default NavBar;
