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


class VirtualMentoring extends Component {
  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-sm-center">
          <Col sm={{span: 8}}  xs={{span:10}}className="text-center">
            <h4><span className="webinar-name">Virtual Mentoring 101 with Laura Nicholson</span></h4>
            <p><b>Webinar Date:</b> Friday, April 24th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Join Laura Nicholson to learn best practices for virtual mentoring -
               from tips on how to structure your sessions to strategies for choosing
               curriculum. </p>
            <p className="text-left"><i>Laura Nicholson has a bachelor’s degree in mechanical engineering
               from MIT and a Master of Public Affairs from Indiana University.
               She has 5 years of experience working one-on-one with students,
               focusing on high school students in advanced math and science subjects,
               including test prep for AP, IB, SAT, and ACT. Over the years she
               has honed her expertise through practice as well as a focused study
               of the science of learning, with an emphasis on evidence-based education.</i></p>
            <br />
            <iframe src="https://drive.google.com/file/d/1mwRcBXa5MCr6Z5G_dD9N02z_Hv_5IMUr/preview" width="640" height="480"></iframe>
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }

}

export default VirtualMentoring;
