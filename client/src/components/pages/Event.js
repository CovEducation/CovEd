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
            <h4><span className="webinar-name">Grit: The Power of Passion and Perseverance<br /><hr className="hr-primary"/></span></h4>
            <p className="text-left">Join us on August 5th with Angela Duckworth, the cofounder and CEO of Character Lab, to learn about grit. 
               <br />
               <br />
               </p>
            <p><b>To register to attend our upcoming workshop (August 5th),
               click <a className="dark-a" href='https://docs.google.com/forms/d/e/1FAIpQLSfg12XntmYX10sJ8rPZtafNGrnlT8bxWwQ10JlGTlmu0sVXDg/viewform'>here</a></b></p>
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
          <Col sm={{span: 10}}  xs={{span:10}} className="text-center">
            <h4><span className="webinar-name">COVID-19: Biology and Global Ramifications<br /><hr className="hr-primary"/></span></h4>
            <p className="text-left"> Join us for our Science of Happiness and Mental Health workshop with Dr. Robert Lue to learn more about the biological and global ramifications of the COVID-19 pandemic. 
               <br />
               <br />
               </p>
            <p><b>To register to attend our upcoming workshop (Auhust 14th),
               click <a className="dark-a" href='https://docs.google.com/forms/d/e/1FAIpQLSckgMY8_ZqKYhP6JTYNO8aoD87iuwvbqzsVrG9GaS25EHFxEg/viewform'>here</a></b></p>
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
