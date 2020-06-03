import React, {Component} from "react";
import Image from "react-bootstrap/Image";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./SpeakerSeries.css";
// Landing page library
import { Provider } from "rebass";
import {
  Section,
} from "react-landing-page";
import {theme} from "../Constants.js";


class EducationPanel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-sm-center">
          <Col sm={{span:12}}  xs={{span:12}}className="text-center">
            <h4><span className="webinar-name">Education Panel</span></h4>
            <p><b>Webinar Date: </b>Sunday, May 25th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Our panelists:
            <br />
            <br />
            <ul>
              <li> <b>Jeffrey Grossman</b> - Material Science Professor</li>
              <li> <b>Leah Hinkle</b> - Education Specialist</li>
              <li> <b>Amy Reed</b> - High School IB Coordinator</li>
              <li> <b>June Tener</b> - High School Teacher</li>
              <li> <b>Gareth Gingell</b> - Education Doctoral Student</li>
            </ul>
            </p>
            <br />
            <iframe src="https://drive.google.com/file/d/1s_VMVjSWnlo0yMSs4lqbE-rZS4lQmzdK/preview" width="640" height="480"></iframe>
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default EducationPanel;
