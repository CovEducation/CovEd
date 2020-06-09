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


class MedicinePanel extends Component {
  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-center">
          <Col sm={{span:12}}  xs={{span:12}}className="text-center">
            <h4><span className="webinar-name">Medicine & Healthcare Panel</span></h4>
            <p><b>Webinar Date: </b>Saturday, May 23rd, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Our panelists:
            <br />
            <br />
            <ul>
              <li> <b>Michael Payne, MD</b> - Gastroenterologist</li>
              <li> <b>Edward Brown, MD</b> - Dentist</li>
              <li> <b>Latrice Landry, MD</b> - Precision Medicine</li>
              <li> <b>Barbara Wu, MD</b> - Dentist</li>
              <li> <b>Eve Wittenberg, PhD, MPP</b> - Public Health</li>
              <li> <b>James Burns, MD</b> - Throat Surgery</li>
              <li> <b>Anh T. Nguyen, MD</b> - Obstetrics & Gynecology (OBGYN)</li>
              <li> <b>Tamryn Gray, PhD, RN</b> - Registered Nurse</li>
            </ul>
            </p>
            <br />
            <iframe className="panel"  src="https://drive.google.com/file/d/16WNHwf95XRMQIVgLOc6p-eI2MLZLGivF/preview"></iframe>
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }

}

export default MedicinePanel;
