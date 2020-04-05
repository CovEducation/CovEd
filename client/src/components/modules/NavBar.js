import React, { Component } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./NavBar.css";
// auth
import firebase, { auth } from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";
import { Link } from "@reach/router";


class NavBar extends Component {

  static contextType = UserContext;
  constructor(props) {
    super(props);
  }

  componentDidMount() {  }

  signout(event) {
    auth.signOut();
  }

  render() {

    let userLinks;
    if (!this.context) {
      userLinks = (
        <>
          <Nav.Link as={Link} to="/auth">Sign In</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </>
      );
    } else {
      userLinks = (
        <>
          <Nav.Link as={Link} to="/findatutor">Find a Tutor</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/" onClick={this.signout}>Sign Out</Nav.Link>
        </>
      )
    }

    return (
      <Navbar collapseOnSelect fixed="sticky-top" expand="lg" variant="light">
        <Navbar.Brand as={Link} to="/">CovEd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/whoweare">Who We Are</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            { userLinks }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
