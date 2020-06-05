import React, {Component} from "react";
import career_day_img from "../../public/img/careerday.png";
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
               to further inspire and empower them while they’re learning from home.
               If you have any questions or would like to offer your professional
               expertise to help host a workshop, please contact <a className="dark-a" href='mailto:covedspeakerseries@gmail.com'>
               covedspeakerseries@gmail.com</a>.</p>
            <br />
            <p>Check out recordings of our previous Speaker Series events! You must be signed in to your CovEd account to view these recordings.</p>
            <br />
            <h4><span className="webinar-name">Career Exploration Day</span></h4>
            <p><b>Webinar Dates:</b> Saturday, May 23rd - Sunday, May 24th, 2020</p><hr className="hr-primary"/>
            <br />
            <Row className="justify-content-center">
              <Col md={{span:6}} xs={{span:10}} className="text-right">
                <Image src={career_day_img} style={{height: '420px'}} />
              </Col>
              <Col md={{span:6}} xs={{span:10}} className="text-left">
                <iframe src="https://drive.google.com/file/d/1QAwyDn-MVmIGowoFbHdKTalpwTgD7_Qq/preview" height="420px" frameborder="0" marginwidth="0" marginheight="0"></iframe>
              </Col>
            </Row>
            <br />
            <p className="text-left">CovEd’s Career Exploration Day featured 7
            different panels with 45 professionals in healthcare, technology,
            arts and humanities, nonprofit work, politics, law, and more.
            Through intimate conversations and Q&A discussions, panelists shared
            their career experience, offered insightful advice, and inspired over
            230 CovEd mentees that signed up to attend our live panels. Below,
            you can watch the recordings for any panels you might have missed:
            <br />
            <br />
            <ul>
              <li> <a className="dark-a" href="/nonprofitpanel"> Nonprofit, Advocacy, & Global Health </a> </li>
              <li> <a className="dark-a" href="/stempanel"> STEM </a> </li>
              <li> <a className="dark-a" href="/medicinepanel"> Medicine & Healthcare </a> </li>
              <li> <a className="dark-a" href="/diversitypanel"> Diversity & Inclusion </a> </li>
              <li> <a className="dark-a" href="/educationpanel"> Education </a> </li>
              <li> <a className="dark-a" href="/artshumpanel"> Arts and Humanities </a> </li>
              <li> <a className="dark-a" href="/econlawpanel"> Economics, Law, & Politics </a> </li>
            </ul>
            </p>
            <br />
            <br />
            <h4><a className="dark-a" href="/publicspeaking"><span className="webinar-name">Public Speaking Workshop with Dr. Allison Coffin</span></a></h4>
            <p><b>Webinar Date:</b> Monday, May 4th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Join Dr. Allison Coffin to learn best practices around public speaking -
               from reducing filler words to projecting confidence to making a
               successful elevator pitch. </p>
            <p className="text-left"><i>Dr. Allison Coffin is a neuroscience professor at Washington State
               University Vancouver, where her research lab studies hearing loss.
               She is the president and co-founder of Science Talk, a national
               science communication professional society, and has over 15 years
               of experience teaching communication skills around the country.</i></p>
            <br />
            <br />
            <br />
            <h4><a className="dark-a" href="/virtualmentoring"><span className="webinar-name">Virtual Mentoring 101 with Laura Nicholson</span></a></h4>
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

export default SpeakerSeries;
