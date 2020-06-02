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


class SpeakerSeries extends Component {
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
            <h2>Speaker Series</h2>
            <br />
            <p className="text-left"> In addition to our tutoring service,
               we recently started our Speaker Series initiative within CovEd
               to further support students. Our webinars cover a variety of topics
               - ranging from tips for remote learning to public speaking skills
               to introductions to career fields. Our hope is to provide students from
               underserved communities with exposure to content beyond the classroom
               to further inspire and empower them while they’re learning from home. </p>
            <br />
            <p>Check out recordings of our previous Speaker Series events!</p>
            <br />
            <h4><span className="webinar-name">Public Speaking Workshop with Dr. Allison Coffin</span></h4>
            <p><b>Webinar Date:</b> Monday, May 4th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Join Dr. Allison Coffin to learn best practices around public speaking -
               from reducing filler words to projecting confidence to making a
               successful elevator pitch. </p>
            <p className="text-left"><i>Dr. Allison Coffin is a neuroscience professor at Washington State
               University Vancouver, where her research lab studies hearing loss.
               She is the president and co-founder of Science Talk, a national
               science communication professional society, and has over 15 years
               of experience teaching communication skills around the country.</i></p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/iKMsllsH0zI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <br />
            <br />
            <br />
            <h4><span className="webinar-name">Virtual Mentoring 101 with Laura Nicholson</span></h4>
            <p><b>Webinar Date:</b> Friday, April 24th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Join Laura Nicholson to learn best practices for virtual mentoring -
               from tips on how to structure your sessions to strategies for choosing
               curriculum. </p>
            <p className="text-left"><i>Laura Nicholson has a bachelor’s degree in mechanical engineering
               from MIT and a Master of Public Affairs from Indiana University.
               She has 5 years of experience working one-on-one with students,
               focusing on high school students in advanced math and science subjects,
               including test prep for AP, IB, SAT, and ACT. Over the years she
               has honed her expertise through practice as well as a focused study
               of the science of learning, with an emphasis on evidence-based education.</i></p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/uQ0ODCMC6xs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>;
            <br />
            <br />
            <p className="text-left">If you have any questions about the CovEd Speaker Series or would
               like to offer your professional expertise and help host a workshop,
               please contact <a className="dark-a" href='mailto:covedspeakerseries@gmail.com'>
               covedspeakerseries@gmail.com</a>.</p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }

}

export default SpeakerSeries;
