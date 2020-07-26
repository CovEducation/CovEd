import React, { Component } from "react";
import "./Contact.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Landing page library
import { Provider } from "rebass";
import {
  Section,
} from "react-landing-page";
import {theme} from "../Constants.js";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={1} mb={7}>
        <h1><span className="light-h1">About Us</span><br /><hr className="hr-primary" /><br /></h1>
          <Row className="justify-content-sm-center">
          <Col sm={{span: 8}} className="text-center">
            <h3><span className="light-h3">Contact Us <br /></span></h3>
            <br />
            <br />
            <p>Check out the <a className="dark-a" href="/faq"> FAQs </a> page to see if we've already answered your question. If you don't see your question there, for general questions, please email us at <a className="dark-a" href='mailto:coveducation@gmail.com'>coveducation@gmail.com</a>! <br /><br /> For any inquiries related to media/news releases, please contact us at <a className="dark-a" href='mailto:covedpr@gmail.com'>covedpr@gmail.com</a>. <br /> For technical issues related to your account please contact us at <a className="dark-a" href='mailto:coved.dev@gmail.com'>coved.dev@gmail.com</a>. <br /><br /> We're excited to hear from you~</p>
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
