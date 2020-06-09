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


class DiversityPanel extends Component {
  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-center">
          <Col sm={{span:12}}  xs={{span:12}}className="text-center">
            <h4><span className="webinar-name">Diversity & Inclusion Panel</span></h4>
            <p><b>Webinar Date: </b>Sunday, May 24th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Our panelists:
            <br />
            <br />
            <ul>
              <li> <b>Dr. Sheila Nutt</b> - Education and Diversity</li>
              <li> <b>Sade Abraham</b> - Neuroscience and Education</li>
              <li> <b>Dr. Joan Hunter</b> - Medicine and Leadership</li>
              <li> <b>Jessica Sanon</b> - Women in STEM</li>
            </ul>
            </p>
            <br />
            <iframe className="panel" src="https://drive.google.com/file/d/1-IPsXW5I9evpRVevELu80bI_iZwOCKvC/preview"></iframe>
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default DiversityPanel;
