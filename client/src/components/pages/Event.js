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
          <Col sm={{span: 6}}  xs={{span:10}} className="text-center">
            <h4><span className="webinar-name">Career Day<br /><hr className="hr-primary"/></span></h4>
            <p className="text-left">We are hosting a Virtual Career Day as a part of our Speaker Series this upcoming weekend (May 23-24).
               This event will feature seven panels with professionals offering their insight
               and experience to CovEd students. Panel topics include:
               <br />
               <br />
               <ul>
               <li> STEM </li>
               <li> Medicine and Healthcare</li>
               <li> Economics, Law, and Politics </li>
               <li> Arts and Humanities </li>
               <li> Non-profit/Advocacy </li>
               <li> Diversity and Inclusion </li>
               <li> Education </li>
               </ul>
               </p>
            <p><b>To register to attend our upcoming Career Day (May 23-24),
               click <a className="dark-a" href='https://docs.google.com/forms/d/e/1FAIpQLSeBte3YAb_qnuScJq9USezmQZAurU6XA5ixrwPl0okHCvMBVw/viewform'>here</a></b></p>
            <p>And checkout our <a className="dark-a" href="https://www.facebook.com/events/236350171151111/"> facebook event page!</a></p>
            <br />
            <p> Can't make the event? Don't worry! We'll have more events in the future!</p>
            <br />
            </Col>
            </Row>
            <Row className="justify-content-center">
            <Col md={{span:6}} xs={{span:10}} className="text-center">
            <Image src={event_img} style={{height: '420px'}} />
            </Col>
            <Col md={{span:6}} xs={{span:10}} className="text-center">
            <iframe src="https://drive.google.com/file/d/1QAwyDn-MVmIGowoFbHdKTalpwTgD7_Qq/preview" height="420px" frameborder="0" marginwidth="0" marginheight="0"></iframe>
            </Col>
          </Row>
        </Section>
        </Provider>
        </>)
    }
}

export default Event;
