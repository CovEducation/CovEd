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

            Please have a parent or guardian with you when performing these experiments!
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
            </ul>
            <p>*There are lots of effevescent tablets! Some common examples include Alka Seltzer and denture cleaning tablets!</p>
            </p>
            <br />
            <h6 className="text-left">You can use <a className="dark-a" href="https://drive.google.com/file/d/1WJ-vOOodFqekadKfEp6web2cHE3-5v6G/view" target="_blank"> this worksheet</a> to follow along with the video below on your own! </h6>
            <br />
            <iframe src="https://drive.google.com/file/d/14iD1lfVjrpxGMIr579TTx6M56PDB_T6E/preview" width="640" height="480"></iframe>
            <br />
            <br />
            <h5 className="text-left">Week 2 Experiment: Oobleck!</h5>
            <br />
            <p className="text-left">We will be posting the video and worksheet for experiment 2 on Monday, July 13. If you've got all of these materials you should be all set to make oobleck with us next week!</p>
            <br />
            <p className="text-left">Materials for the DIY Lava Lamp Experiment
            <ul>
              <li> 1 cup Water </li>
              <li> 1.5-2 cups cornstarch </li>
              <li> Few drops of food coloring (optional)</li>
              <li> 2 bowls</li>
            </ul></p>
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