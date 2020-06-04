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


class StemPanel extends Component {
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
            <h4><span className="webinar-name">Science, Technology, Engineering, & Math Panel</span></h4>
            <p><b>Webinar Date: </b>Saturday, May 23rd, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Our panelists:
            <br />
            <br />
            <ul>
              <li> <b>Jazzy Quinabo</b> - Construction and Civil Engineering</li>
              <li> <b>Mami Iwamoto, MD</b> - Ophthalmologist/Surgeon</li>
              <li> <b>Brigette Wallace</b> - Tech Startup</li>
              <li> <b>Xu Simon, PhD</b> - Scientist/Researcher</li>
              <li> <b>Sade Abraham</b> - Neuroscience and Education</li>
              <li> <b>Aimee San Jose</b> - Biomedical Engineering</li>
              <li> <b>Talia Hatkevich, PhD</b> - PGMED Harvard</li>
            </ul>
            </p>
            <br />
            <iframe src="https://drive.google.com/file/d/1On4eDwZZfFg5doiknaO5ES5TzNo4Z7dz/preview" width="640" height="480"></iframe>
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }

}

export default StemPanel;
