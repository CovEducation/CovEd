import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./NavBar.css";

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect fixed="sticky-top" expand="lg" bg="white" variant="light">
        <Navbar.Brand href="/">Coved</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            
          </Nav>
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

export default NavBar;
