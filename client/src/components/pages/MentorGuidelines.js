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

class MentorGuidelines extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7}>
          <Row className="justify-content-center">
            <Col className="text-center">
            <h2><span className="light-h2">CovEd Mentor Guidelines</span></h2><p><b>Last Modified:</b> April 23, 2020</p><hr className="hr-primary"/>
            <br />
            <br />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={{span: 8}} xs={{span:10}} className="text-left">
            <p>content
            </p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default MentorGuidelines;
