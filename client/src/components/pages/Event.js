import React, { Component} from "react";
import event_img from "../../public/img/event.png";
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
/**
 * Displays occasional special events. This component
 * needs to be implemented once we have an event we want to advertise.
 * For now, it's empty.
 * Design inspiration: https://www.voiceflow.com/blog/introducing-our-new-canvas-design-experience
 */
class Event extends Component {

    render() {
        return (
        <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-center">
          <Col sm={{span: 10}}  xs={{span:10}} className="text-center">
            <h4><span className="webinar-name">College Application Fair<br /><hr className="hr-primary"/></span></h4>
            <p className="text-left">Join us on the 26th and 27th of September to learn about the college application process. We'll go over everything from different types of applications to applying for financial aid!
               <br />
               <br />
               </p>
            <p><b>To register to attend our upcoming workshop (August 5th),
               click <a className="dark-a" href='https://docs.google.com/forms/d/e/1FAIpQLSczKKnget3fMcl8JCgMqowBwzbtX_Vzu8IeMOuR7p67MQTp1Q/viewform'>here</a></b></p>
            <br />
            <p> Can't make the event? Don't worry! We'll be recording it, and we'll have more events in the future!</p>
            <br />
            </Col>
            </Row>
            <Row className="justify-content-center">
            <iframe src="https://drive.google.com/file/d/1JmTgE93vW16TfZ-nal1ma6-9Khyqb7ea/preview" width="640" height="480"></iframe>
            
          </Row>
          <br />
          <br />
        </Section>
        </Provider>
        </>)
    }
}

export default Event;
