import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./Contact.css";
import { Typography } from "@material-ui/core";
import Link from "@material-ui/core/Link";

import {Col, Row, Button} from 'react-bootstrap'
// Landing page library
import { Provider, Heading, Subhead } from "rebass";
import {
  Section,
} from "react-landing-page";


const theme={
  colors: {
      blue: '#00568C',
      yellow: '#F2BE32',
      white: '#ffffff',
      darkblue: '#003c61',
  },
  fonts:{
    sans: 'Muli, sans-serif',
  },
  fontWeights: {
    light: 300,
    normal: 600,
    bold: 700,
  },
  fontSizes: [
      12, 16, 24, 36, 48, 72
    ],
  space: [
      0,
      4,
      8,
      16,
      32,
      64,
      128,
      140,
      256,
    ]
}

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7}>
          <Row className="justify-content-sm-center">
          <Col sm={{span: 8}} className="text-center">
            <h2><span className="light-h2">Contact Us <br /><br /><hr className="hr-primary"/></span></h2>
            <br />
            <br />
            <p>In the future we will have a contact form here, but for now...Check out the <a className="dark-a" href="/faq"> FAQs </a> page to see if we've already answered your question. If you don't see your question there, shoot us an email <a className="dark-a" href='mailto:coveducation@gmail.com'>coveducation@gmail.com</a>! We're excited to hear from you~</p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default Contact;
