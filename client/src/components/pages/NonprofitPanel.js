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


class NonprofitPanel extends Component {
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
            <h4><span className="webinar-name">Nonprofit, Advocacy, & Global Health Panel</span></h4>
            <p><b>Webinar Date: </b>Saturday, May 23rd, 2020 </p><hr className="hr-primary"/>
            <p className="text-left">Our panelists:
            <br />
            <br />
            <ul>
              <li> <b>Vincent Lin</b> - Partners in Health (Global health & advocacy)</li>
              <li> <b>Diep Vuong</b> - Pacific Links Foundation (Human trafficking & advocacy) </li>
              <li> <b>Lauren Borrill</b> - Camp Kesem (Summer camp for children of cancer patients) </li>
              <li> <b>Kimberly Newman</b> - Murdock Charitable Trust (Provides grants in the Pacific Northwest)</li>
              <li> <b>Aparna Kachoria</b> - American Red Cross (Public health & disaster relief) </li>
              <li> <b>Tony Shu</b> - Breaktime (Advocacy for youth experiencing homelessness) </li>
              <li> <b>Ben Shea</b> - Rotary International (Community service & advocacy) </li>
            </ul>
            </p>
            <br />
            <iframe src="https://drive.google.com/file/d/1jeO2piH1G8bPAjBYfQa3cKFuE46qTaM9/preview" width="640" height="480"></iframe>
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }

}

export default NonprofitPanel;
