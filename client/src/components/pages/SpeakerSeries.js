import React, { Component } from "react";
import YouTube from 'react-youtube';
import "./SpeakerSeries.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Landing page library
import { Provider } from "rebass";
import { Typography } from "@material-ui/core";
import {
  Section,
} from "react-landing-page";
import {theme} from "../Constants.js";

const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

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
          <Col sm={{span: 8}} className="text-center">
            <h2>Speaker Series<br></h2>
            <br>
            <br>
            <p>In addition to our tutoring service, we’re starting a Speaker
               Series initiative within CovEd to further support students. Our
               educational webinars cover a variety of topics - ranging from tips
               for remote learning to public speaking skills to introductions to
               certain career fields. Our hope is to provide students from
               underserved communities with exposure to content beyond the classroom
               to further inspire and empower them while they’re learning from home. </p>
            <h3>Upcoming Events<br><hr className="hr-primary"/></h3>
            <h4><span className="webinar-name">Career Day<br><hr className="hr-primary"/></span></h3>
            <p>We are hosting a Virtual Career Day this upcoming weekend (May 23-24).
               This event will feature seven panels with professionals offering their insight
               and experience to CovEd students. These panels include
               (1) STEM,
               (2) Medicine and Healthcare,
               (3) Economics, Law, and Politics,
               (4) Arts and Humanities,
               (5) Non-profit/Advocacy,
               (6) Diversity (LGBTQ+, First Gen, Low-income, International, Accessible Education, ROTC), and
               (7) Education. </p>
            <p>To register to attend our upcoming Career Day (May 23-24),
               click <a className="dark-a" href='TODO: insert link'>here</a></p>
            <h3>Past Events<br><hr className="hr-primary"/></h3>
            <p>Check out the following recordings of our previous Speaker Series events.</p>
            <br>
            <h4><span className="webinar-name">Public Speaking Workshop with Dr. Allison Coffin<br><hr className="hr-primary"/></span></h3>
            <h5>Webinar Date: Monday, May 4th, 2020</h4>
            <p>Join Dr. Allison Coffin to learn best practices around public speaking -
               from reducing filler words to projecting confidence to making a
               successful elevator pitch. </p>
            <p>Bio: Dr. Allison Coffin is a neuroscience professor at Washington State
               University Vancouver, where her research lab studies hearing loss.
               She is the president and co-founder of Science Talk, a national
               science communication professional society, and has over 15 years
               of experience teaching communication skills around the country. </p>
            <YouTube videoId="dQw4w9WgXcQ" opts={opts} onReady={this._onReady} />
            <br>
            <h4><span className="webinar-name">Virtual Mentoring 101 with Laura Nicholson<br><hr className="hr-primary"/></span></h3>
            <h5>Webinar Date: Friday, April 24th, 2020</h4>
            <p>Join Laura Nicholson to learn best practices for virtual mentoring -
               from tips on how to structure your sessions to strategies for choosing
               curriculum. </p>
            <p>Bio: Laura Nicholson has a bachelor’s degree in mechanical engineering
               from MIT and a Master of Public Affairs from Indiana University.
               She has 5 years of experience working one-on-one with students,
               focusing on high school students in advanced math and science subjects,
               including test prep for AP, IB, SAT, and ACT. Over the years she
               has honed her expertise through practice as well as a focused study
               of the science of learning, with an emphasis on evidence-based education.</p>
            <YouTube videoId="dQw4w9WgXcQ" opts={opts} onReady={this._onReady} />;
            <br>
            <p>If you have any questions about the CovEd Speaker Series or would
               like to offer your professional expertise and help host a workshop,
               please contact <a className="dark-a" href='mailto:covedspeakerseries@gmail.com'>
               covedspeakerseries@gmail.com</a> </p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default SpeakerSeries;
