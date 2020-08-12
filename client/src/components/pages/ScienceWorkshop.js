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
            <br />
            <h5>Week 1 Experiment: DIY Lava Lamp</h5>
            <br />
            <ul>
              <li> <a className="dark-a" href="https://drive.google.com/file/d/10ko50kdhIGL-o0Ud3_mq_CwUq-ST-a-H/view" target="_blank"> Worksheet</a> </li>
              <li><a className="dark-a" href="https://drive.google.com/file/d/14iD1lfVjrpxGMIr579TTx6M56PDB_T6E/preview" target="_blank"> Video</a> </li>
              <li><a className="dark-a" href="https://drive.google.com/file/d/151s9cQnC9i4-R2aMt_UmkA62qbdxtyZD/view" target="_blank"> Review</a></li>
            </ul>
            <br />
            <h5>Week 2 Experiment: Oobleck</h5>
            <br />
            <ul>
              <li> <a className="dark-a" href="https://drive.google.com/file/d/10ko50kdhIGL-o0Ud3_mq_CwUq-ST-a-H/view" target="_blank"> Worksheet</a> </li>
              <li>  <a className="dark-a" href="https://drive.google.com/file/d/1eFBF_HTH52iCGEqzRccX7Y4gx4SMhrX0/preview" target="_blank"> Video</a> </li>
              <li><a className="dark-a" href="https://drive.google.com/file/d/1DLPSg8zhf5FxMbNf1C1LCNQZNZurYwrY/view" target="_blank"> Review</a></li>
            </ul>
            <br />
            <h5>Week 3 Experiment: Capillary Action</h5>
            <br />
            <ul>
              <li> <a className="dark-a" href="https://drive.google.com/file/d/1Oap2cEvCErxKV7iV9XvK47SuG_dVXsZj/view" target="_blank"> Worksheet</a> </li>
              <li>  <a className="dark-a" href="https://drive.google.com/file/d/1xX8L3HWC1jhkGsjsy9ULsZQr6LVJKsOm/view" target="_blank"> Video</a> </li>
              <li><a className="dark-a" href="https://drive.google.com/file/d/1DLPSg8zhf5FxMbNf1C1LCNQZNZurYwrY/view" target="_blank"> Review</a></li>
            </ul>
            <br />
            <h5>Week 4 Experiment: Model Lungs</h5>
            <br />
            <ul>
              <li> <a className="dark-a" href="https://drive.google.com/file/d/1_JABx4O28wUEKVB6CqTyyWDtrP-n5e05/view" target="_blank"> Worksheet</a> </li>
              <li>  <a className="dark-a" href="https://drive.google.com/file/d/1giAfTxzdqG0_Mz2qQrNLr5vMyYXXr2wm/view" target="_blank"> Video</a> </li>
              <li><a className="dark-a" href="https://drive.google.com/file/d/1vS5SlfKHX8Jl5ySa-LMHjzRNbyagGxt_/view" target="_blank"> Review</a></li>
            </ul>
            </p>
            <br />
            <p>Have additional questions about the experiment or the materials? Ask us on our <a className="dark-a" target="_blank" href="https://www.piazza.com/coveducation/other/coved1/home"> Piazza page</a>! To get started with piazza follow these <a className="dark-a" href="http://tinyurl.com/menteeguideline" target="_blank">written instructions</a> or watch <a className="dark-a" href="http://tinyurl.com/piazzavid" target="_blank">this video</a>!</p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default ScienceWorkshop;
