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


class ScienceWorkshop extends Component {
  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-center">
          <Col sm={{span:12}}  xs={{span:12}}className="text-center">
            <h4><span className="webinar-name">Science Workshops</span></h4>
            <p><b>When: </b>Every Monday in July</p><hr className="hr-primary"/>
            <p className="text-left">Interested in creating lava lamps, and squishing Oebleck slime? Join CovEd every Monday from July 6th to July 27th for guided science projects! Not only will you have fun with simple, hands-on experiments, but you will also learn about the science behind them and gain a broadened perspective towards the forces ruling nature. Our first experiment will be creating DIY lava lamps, and the pre-recorded video guide will be available on Monday July 6th. We hope you’ll join us— FOR SCIENCE!
            <br />
            <br />  
            <h5>Week 1 Experiment: DIY Lava Lamp</h5>
            <br />
            <p>Materials for the DIY Lava Lamp Experiment</p>
            <ul>
              <li> Water </li>
              <li> Oil </li>
              <li> Effervescent Tablet*</li>
              <li> Salt (optional)</li>
              <li> Clear (plastic/glass) jar/container</li>
              <li> A parent/guardian</li>
            </ul>
            <p>*There are lots of effevescent tablets! Some common examples include Alka Seltzer and denture cleaning tablets!</p>
            </p>
            <br />
            <p><b>The experiment will be posted on Monday July 6th along with a worksheet for you to follow along with. Once you've got the materials, you should be ready to go on the 6th! We will be holding a live review of this experiment on Monday July 13th at 3:00PM EST/GMT-5.</b></p>
            <br />
            <p>Have additional questions about the experiment or the materials? Unsure if something is an effervescent tablet? Ask us on our <a className="dark-a" target="_blank" href="https://www.piazza.com/coveducation/other/coved1/home"> Piazza page</a>! To get started with piazza follow these <a className="dark-a" href="http://tinyurl.com/menteeguideline" target="_blank">written instructions</a> or watch <a className="dark-a" href="http://tinyurl.com/piazzavid" target="_blank">this video</a>!</p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default ScienceWorkshop;