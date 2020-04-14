import React, { Component } from "react";
import "../../utilities.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Homepage.css";
import {Provider} from "rebass";
import {
  Section,
} from "react-landing-page";

import { theme, FAQS } from "../Constants.js";


class FAQ extends Component {
  render() {
    return (
      <>
      <Provider theme={theme}>
      <Section p={[2,6,2,2]} mt={6} mb={6}>
      <h2><span className="light-h2">Frequently Asked Questions</span><hr className="hr-primary"/></h2>
      <br />
      <br />
      <br />
      <Col className="col-lg-8 col-lg-offset-2">
        <Accordion>
            {FAQS.map((faq) => {
              return (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey={faq.key}>
                      {faq.question}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={faq.key}>
                    <Card.Body>{faq.answer}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            })}
        </Accordion>
      </Col>
      </Section>
      <Section fontSize={[2]} bg="darkblue" heading="" subhead="" p={[2,7,2,7]} mt={2}>
        <Row bg="blue" className="justify-content-sm-center">
        <Col sm={{span: 8}} className="light-text text-center">
          <h2><span className="light-h">Still Got Questions? Contact Us! <br /><br /><hr className="hr-light"/></span></h2>
          <br />
          <br />
          <p>Got more questions? If you don't see your question answered here, send us an email <a className="light-a" href='mailto:coveducation@gmail.com'>coveducation@gmail.com</a>! We're excited to hear from you~</p>
        </Col>
        </Row>
      </Section>
        </Provider>
      </>
    );
  }
}

export default FAQ;
