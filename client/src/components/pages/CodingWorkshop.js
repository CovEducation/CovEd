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


class CodingWorkshop extends Component {
  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-center">
          <Col sm={{span:12}}  xs={{span:12}}className="text-center">
            <h4><span className="webinar-name">Coding Workshops</span></h4>
            <p><b>When: </b>Every Week in July</p><hr className="hr-primary"/>
            <p className="text-left">The Coding Workshops’ attendees will follow the curriculum from Carnegie Mellon’s introductory CS0 course. The workshop will last for 4 weeks from July 6th-August 1st, 2020. Each week mentors will hold office hours to answer questions and discuss concepts. Participants may take the course at their own pace, or follow the 4 week curriculum guide created by coding workshop mentors.  

            <br />
            <br />
            <p>To join the workshop please make an account for the <a className="dark-a" target="_blank" href="https://academy.cs.cmu.edu/register"> CMU CS Academy</a>, the registration code for is <b>YJ56-SY43</b>. We will be holding live review sessions to help you through the course. Every week we will be holding live review sessions every week in July to help you work through this course, the dates, times, and links for these sessions will be listed below.</p>
            <br />
            </p>
            <p>All of our coding mentors will be available on our <a className="dark-a" target="_blank" href="https://www.piazza.com/coveducation/other/coved1/home"> Piazza page</a> to help answer your questions!To get started with piazza follow these <a className="dark-a" href="http://tinyurl.com/menteeguideline" target="_blank">written instructions</a> or watch <a className="dark-a" href="http://tinyurl.com/piazzavid" target="_blank">this video</a>!</p>
            <br />
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default CodingWorkshop;