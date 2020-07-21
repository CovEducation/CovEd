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
            <p>We will be meeting for office hours every Thursday from 6-7PM EST, you can join us <a className="dark-a" href="https://mit.zoom.us/j/96252536319?pwd=OU9LOUlYNDY2YkNaVm1IZmtOVzcxUT09" target="_blank"> here</a>!</p>
            <br />
            <br />
            <h6>Week 3:</h6>
            <ul>
              <li>Create an account for <a className="dark-a" target="_blank" href="https://academy.cs.cmu.edu/register"> CMU CS Academy</a> with the registration code <b>YJ56-SY43</b> </li>
              <li>Look over Week 3 Materials</li>
              <li>Begin working on Unit 3: Conditionals and Animations</li>
            </ul>
            <br />
            <h6>Week 2:</h6>
            <ul>
              <li>Create an account for <a className="dark-a" target="_blank" href="https://academy.cs.cmu.edu/register"> CMU CS Academy</a> with the registration code <b>YJ56-SY43</b> </li>
              <li>Look over Week 2 Materials</li>
              <li>Begin working on Unit 2: Basic Animations, and proceed in chronological order</li>
            </ul>
            <br />
            <br />
            <h6>Week 1:</h6>
            <ul>
              <li>Create an account for <a className="dark-a" target="_blank" href="https://academy.cs.cmu.edu/register"> CMU CS Academy</a> with the registration code <b>YJ56-SY43</b> </li>
              <li>Verify they meet the minimum age requirement of 13 and have parental permission to take the course</li>
              <li>Look over Week 1 Materials</li>
              <li>Begin working on Unit 1: Drawing with Shapes, and proceed in chronological order</li>
            </ul>
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