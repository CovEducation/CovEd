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
            <p>
            Please have a parent or guardian with you when performing these experiments!
            </p>
            <p>You can join us <a className="dark-a" href="https://mit.zoom.us/j/91515065868?pwd=b2JhMVFsSHNTNnJJOTBqYnRrZUhXQT09" target="_blank"> here</a> us on Mondays at 3:00 PM EST for a review of the lava lamp experiment led by two of our CovEd mentors! This is an oppurtunity for you to learn more about the science that makes this happen as well as ask your own questions. Be sure to check the calendar above for more information!</p>
            <br />
            <h5 className="text-left">Week 2 Experiment: Oobleck!</h5>
            <br />
            <p className="text-left">Materials for the Oobleck Experiment
            <ul>
              <li> 1 cup Water </li>
              <li> 1.5-2 cups cornstarch </li>
              <li> Few drops of food coloring (optional)</li>
              <li> 2 bowls</li>
            </ul></p>
            <br />
            <h6 className="text-left">You can use <a className="dark-a" href="https://drive.google.com/file/d/10ko50kdhIGL-o0Ud3_mq_CwUq-ST-a-H/view" target="_blank"> this worksheet</a> to follow along with the video below on your own! </h6>
            <br />
            <iframe src="https://drive.google.com/file/d/11NvaxqjyruO5o5chQbyqqmni2l2BGBtf/preview" width="640" height="480"></iframe>
            <br />
            <br />
            <p className="text-left">We will be posting the video and worksheet for experiment 3 on Monday, July 20. If you've got all of these materials you should be all set to join us next week for the capillary action experiment!</p>
            <br />
            <h5 className="text-left">Week 3 Experiment: Capillary Action</h5>
            <br />
            <p className="text-left">Materials for Capillary Action Experiment
            <ul>
            <br />
              <li> 1 cup Water </li>
              <li> Daisy (flower) or celery </li>
              <li> Few drops of food coloring</li>
              <li> clear jar/glass</li>
            </ul></p>
            <br />
            <h5>Week 1 Experiment: DIY Lava Lamp</h5>
            <br />
            <ul>
              <li> <a className="dark-a" href="https://drive.google.com/file/d/10ko50kdhIGL-o0Ud3_mq_CwUq-ST-a-H/view" target="_blank"> Worksheet</a> </li>
              <li>  <a className="dark-a" href="https://drive.google.com/file/d/14iD1lfVjrpxGMIr579TTx6M56PDB_T6E/preview" target="_blank"> Video</a> </li>
            </ul>
            </p>
            <br />
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