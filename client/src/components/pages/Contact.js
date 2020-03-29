import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Contact.css";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className="Contact-container">
          <Jumbotron>
            <Typography variant="h2">Contact Us</Typography>
            
            <Typography variant="h4" className="Contact-subtitle">
              There will be an actual form or google form here in the future. But for now... Email
              us at <Link href="mailto:coveducation@gmail.com">coveducation@gmail.com</Link>! We look forward to hearing from you.
            </Typography>
          </Jumbotron>
        </div>
      </>
    );
  }
}

export default Contact;
