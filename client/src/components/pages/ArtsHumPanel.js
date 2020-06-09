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


class ArtsHumPanel extends Component {
  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-sm-center">
          <Col sm={{span:12}}  xs={{span:12}}className="text-center">
            <h4><span className="webinar-name">Arts & Humanities Panel</span></h4>
            <p><b>Webinar Date: </b>Sunday, May 24th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Our panelists:
            <br />
            <br />
            <ul>
              <li> <b>Jasmine Shao</b> - Youtuber</li>
              <li> <b>Najya Williams</b> - Writer</li>
              <li> <b>Lisa Rosowsky </b> - Visual Artist and Design Educator</li>
              <li> <b>Cat Zhang</b> - Journalist</li>
              <li> <b>Whitney Henion</b> - Architect</li>
              <li> <b>Genevieve Dempsey</b> - Ethnomusicologist</li>
            </ul>
            </p>
            <br />
            <iframe src="https://drive.google.com/file/d/1iJBjSihHWCuaOxhtyxq6NxaGrhOGzRtv/preview" width="640" height="480"></iframe>
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default ArtsHumPanel;
