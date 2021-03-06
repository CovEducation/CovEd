import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

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
          <Nav.Link as={Link} to="/" onClick={this.signOut}>Sign Out</Nav.Link>
          <Nav.Link as={Link} to="/findamentor">Find a Mentor</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/speakerseries">Speaker Series</Nav.Link>
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
          { userLinks }
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQ</Nav.Link>
            <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            <Nav.Link
              as={"a"}
              className="donation-link"
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=L2N2SU326PZDY&source=url"
              target="_blank"
              rel="noopener noreferrer"
            >
              Donate
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
