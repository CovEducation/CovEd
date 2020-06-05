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


class PublicSpeaking extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-sm-center">
          <Col sm={{span: 8}}  xs={{span:10}}className="text-center">
            <h4><span className="webinar-name">Public Speaking Workshop with Dr. Allison Coffin</span></h4>
            <p><b>Webinar Date:</b> Monday, May 4th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Join Dr. Allison Coffin to learn best
               practices around public speaking - from reducing filler words to
               projecting confidence to making a successful elevator pitch. </p>
            <p className="text-left"><i>Dr. Allison Coffin is a neuroscience
               professor at Washington State University Vancouver, where her research
               lab studies hearing loss. She is the president and co-founder of
               Science Talk, a national science communication professional society,
               and has over 15 years of experience teaching communication skills
               around the country.</i></p>
            <br />
            <iframe src="https://drive.google.com/file/d/1T1sYvdQi5fdWCUwVLvXXRuKMUJh3HHrD/preview" width="640" height="480"></iframe>
            <br />
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }

}

export default PublicSpeaking;
