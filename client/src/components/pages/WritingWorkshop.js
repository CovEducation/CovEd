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


class WritingWorkshop extends Component {
  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-center">
          <Col sm={{span:12}}  xs={{span:12}}className="text-center">
            <h4><span className="webinar-name">Writing Workshops</span></h4>
            <p><b>When: </b>Every Week in July</p><hr className="hr-primary"/>
            <p className="text-left">Writing Workshops attendees will focus on components of writing short stories and include writing dialogue, character, setting, and speculative fiction (writing about race, class, and other social issues). The workshop will last for 4 weeks from July 6th-August 1st, 2020. The weekly structure of the workshop will include a writing prompt for each week, anonymous submission and feedback of each other’s work based on this prompt, as well as a short lecture on the mechanics of creative writing. The mentors will organize weekly office hours, where attendees can receive feedback about their writing related to the writing prompt or other writing.
            <br />
            <br />
            <p><a className="dark-a" href="https://forms.gle/qwMkCRXREzv9X3hz6" target="_blank"> Click here for this weeks assignment</a></p>
            <br />
            <p>Please submit your writing via this <a className="dark-a" href="https://forms.gle/qwMkCRXREzv9X3hz6" target="_blank"> google form</a> and join us <a className="dark-a" href="https://mit.zoom.us/j/91072905067?pwd=cTF4dEh4bE01a1I2T1cyK0ZkazNrdz09" target="_blank"> here</a> on Wednesday, for our first session!</p>
            <br />
            </p>
            <p>All of our mentors will be available on our <a className="dark-a" target="_blank" href="https://www.piazza.com/coveducation/other/coved1/home"> Piazza page</a> to help answer your questions!To get started with piazza follow these <a className="dark-a" href="http://tinyurl.com/menteeguideline" target="_blank">written instructions</a> or watch <a className="dark-a" href="http://tinyurl.com/piazzavid" target="_blank">this video</a>!</p>
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

export default WritingWorkshop;