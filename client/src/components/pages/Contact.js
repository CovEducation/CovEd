import React, { Component } from "react";
import "./Contact.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Landing page library
import { Provider } from "rebass";
import {
  Section,
} from "react-landing-page";
import {theme} from "../Constants.js"

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
            <p>Check out the <a className="dark-a" href="/faq"> FAQs </a> page to see if we've already answered your question. If you don't see your question there, for general questions, please email us at <a className="dark-a" href='mailto:coveducation@gmail.com'>coveducation@gmail.com</a>! For any inquiries related to media/news releases, please contact us at <a className="dark-a" href='mailto:covedpr@gmail.com'>covedpr@gmail.com</a>. We're excited to hear from you~</p>
            <p>If you wish to file a complaint, please contact <a className="dark-a" href='mailto:coved.management@gmail.com'>coved.management@gmail.com</a>
            </p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default Contact;
