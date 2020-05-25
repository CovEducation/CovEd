import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "./NavBar.css";
// auth
import { auth } from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";
import { Link } from "@reach/router";


class NavBar extends Component {

  static contextType = UserContext;

  signOut(event) {
    auth.signOut();
  }

  render() {

    let userLinks;
    if (!this.context.user) {
      userLinks = (
        <>
          <Nav.Link as={Link} to="/auth">Sign In</Nav.Link>
          <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </>
      );
    } else {
      userLinks = (
        <>
          <Nav.Link as={Link} to="/findamentor">Find a Mentor</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/" onClick={this.signOut}>Sign Out</Nav.Link>
        </>
      )
    }

    return (
      <Navbar collapseOnSelect fixed="sticky-top" expand="lg" variant="light">
        <Navbar.Brand as={Link} to="/">CovEd</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"/>
          <Nav>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            { userLinks }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
