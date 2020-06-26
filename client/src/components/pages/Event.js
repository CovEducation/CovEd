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
            <h4><span className="webinar-name">Maximize Your Virtual Summer<br /><hr className="hr-primary"/></span></h4>
            <p className="text-left">We are hosting a workshop to help you maximize your virtual summer as a part of our Speaker Series on July 2nd from 3:00 to 4:30pm EST, our panelists will go over tips and tricks to make your summer more interesting and productive!
               <br />
               <br />
               </p>
            <p><b>To register to attend our upcoming workshop (July 2nd),
               click <a className="dark-a" href='https://docs.google.com/forms/d/e/1FAIpQLSdsVJeiyND9-MtbXaO-3kjKnkEO6wJxlAkT4J7FveEXDXQe3w/viewform'>here</a></b></p>
            <p>And checkout our <a className="dark-a" href="https://www.facebook.com/events/236350171151111/"> facebook event page!</a></p>
            <br />
            <p> Can't make the event? Don't worry! We'll be recording it, and we'll have more events in the future!</p>
            <br />
            </Col>
            </Row>
            <Row className="justify-content-center">
            <iframe src="https://drive.google.com/file/d/1H79e991-5bCFE4npbmytH-6bXa9zG3gv/preview" width="640" height="480"></iframe>
            
          </Row>
          <br />
          <br />
          <br />
          <br />
          <Row className="justify-content-center">
          <Col sm={{span: 20}}  xs={{span:15}} className="text-center">
            <h4><span className="webinar-name">The Science of Happiness and Mental Health<br /><hr className="hr-primary"/></span></h4>
            <p className="text-left"> Join us for our Science of Happiness and Mental Health workshop with Dr. Laurie Santos from Yale University on July 10th from 3:00 to 4:00 EST.
               <br />
               <br />
               </p>
            <p><b>To register to attend our upcoming workshop (July 10th),
               click <a className="dark-a" href='https://docs.google.com/forms/d/e/1FAIpQLScXxmrt9fBnncEIg4UG2Bxb3zZjTYymOsr3j6aNFq-2R1pz3w/viewform'>here</a></b></p>
            <p>And checkout our <a className="dark-a" href="https://www.facebook.com/events/236350171151111/"> facebook event page!</a></p>
            <br />
            <p> Can't make the event? Don't worry! We'll be recording it, and we'll have more events in the future!</p>
            <br />
            </Col>
            </Row>
            <Row className="justify-content-center">
            <iframe src="https://drive.google.com/file/d/1wZgdzy9gPubIkueV2jGFEHiLq7ydkl63/preview" width="640" height="480"></iframe>
            
          </Row>
        </Section>
        </Provider>
        </>)
    }
}

export default Event;
