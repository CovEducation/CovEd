import React, { Component } from "react";
import { Nav, Navbar, Container, Button, NavDropdown} from "react-bootstrap";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

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
          <Nav.Link as={Link} to="/auth">Login</Nav.Link>
          {/* To be changed with new button that pulls up registration modal */}
          <Button href='/register' variant="nav"> Sign Up </Button>
        </>
      );
    } else {
      userLinks = (
        <>
          <AccountCircleIcon/>
          <NavDropdown title="Tim Beaver" renderMenuOnMount={true}>
            <NavDropdown.Item href="/profile">Dashboard</NavDropdown.Item>
            <NavDropdown.Item style={{ color: 'red' }} href="/" onClick={this.signOut}>Sign Out</NavDropdown.Item>
          </NavDropdown>
        </>
      )
    }

    return (
      <Navbar collapseOnSelect fixed="sticky-top" expand="lg" variant="light" display="flex">
        <Container display="flex" flex-grow="1">
          <Navbar.Brand as={Link} to="/">CovEd</Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav.Link as={Link} to="/resources">How It Works</Nav.Link>
            <Nav.Link as={Link} to="/resources">Resources</Nav.Link>
            <Nav.Link as={Link} to="/faq">FAQs</Nav.Link>
            <Nav.Link as={Link} to="/about">Meet Our Team</Nav.Link>
            <Nav.Link as={Link} to="/about">Contact Us</Nav.Link>
          </Navbar.Collapse>
        </Container>
        <Navbar.Collapse id="user-links" align-self="flex-end">
        { userLinks }
        </Navbar.Collapse>
      </Navbar>
    );
  }

}

export default NavBar;
