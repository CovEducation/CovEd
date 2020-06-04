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


class EconLawPanel extends Component {
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
            <h4><span className="webinar-name">Medicine & Healthcare Panel</span></h4>
            <p><b>Webinar Date: </b>Sunday, May 24th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Our panelists:
            <br />
            <br />
            <ul>
              <li> <b>Sarah Powazek</b> - Political Intern</li>
              <li> <b>Lisa Tucker</b> - Law Professor</li>
              <li> <b>Adam Bonin</b> - Political Lawyer</li>
              <li> <b>Susan Carney Lynch</b> - Senior Counsel for Elder Justice</li>
              <li> <b>Jiacheng Feng</b> - Economics PhD Student</li>
              <li> <b>Rosa Baum</b> - JD/MPP Dual Degree Student</li>
            </ul>
            </p>
            <br />
            <iframe src="https://drive.google.com/file/d/1A8suIpVp0ULCTt0ChNpO-708VoWJgmb8/preview" width="640" height="480"></iframe>
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default EconLawPanel;
