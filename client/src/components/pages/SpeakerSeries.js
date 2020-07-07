import React, {Component} from "react";
import EventCalendar from './EventCalendar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import "./SpeakerSeries.css";
// Landing page library
import { Provider } from "rebass";
import {
  Section,
} from "react-landing-page";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import ScienceWorkshop from "./ScienceWorkshop.js";
import CodingWorkshop from "./CodingWorkshop.js";
import WritingWorkshop from "./WritingWorkshop.js";

import NonprofitPanel from "./NonprofitPanel.js";
import StemPanel from "./StemPanel.js";
import MedicinePanel from "./MedicinePanel.js";
import DiversityPanel from "./DiversityPanel.js";
import EducationPanel from "./EducationPanel.js";
import ArtsHumPanel from "./ArtsHumPanel.js";
import EconLawPanel from "./EconLawPanel.js";

import {theme} from "../Constants.js";


class SpeakerSeries extends Component {
  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7} mb={7}>
          <Row className="justify-content-center">
          <Col sm={{span: 8}} xs={{span:10}} className="text-center">
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
            <p>You can view and attend our upcoming events with this <a className="dark-a" href="https://calendar.google.com/calendar/embed?src=4nglqv9q9mhfj9rhenpc8dadgk%40group.calendar.google.com&ctz=America%2FNew_York"><span className="webinar-name">calendar!</span></a></p>
            <br />
            <p>Check out recordings of our previous Speaker Series events! You must be signed in to your CovEd account to view these recordings.</p>
            <br />
            <iframe src="https://calendar.google.com/calendar/embed?src=4nglqv9q9mhfj9rhenpc8dadgk%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
            <br />
            <h4><a className="dark-a" href="https://drive.google.com/file/d/1dgU-tLuJB08JAdS6m_6Uj19X5xkuks7w/view"><span className="webinar-name">How to Maximize Your Virtual Summer</span></a></h4><p><b>Webinar Date:</b> Thursday, July 2nd, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Are you bored and stuck inside this summer? Our mentors have a ton of cool ideas for you through the top 10 tips given out in the panel.
            <br />
            <p className="text-center">To view the pdf slides from the presentation,<a className="dark-a" href="https://drive.google.com/file/d/1J9XPYejl31YreAxzZEUnD60PHSNG8ChV/view" target="_blank"> click here</a></p> </p>
            <p className="text-left"><i>
            <ul>
              <li>Free online classes to keep up your academics</li>
              <li>New hobbies to pick up</li>
              <li> New games to try</li>
              <li>& a lot more!</li>
            </ul>
            </i></p>
            <br />
            <h4><span className="webinar-name">Summer Workshops</span></h4>
            <p><b>Dates:</b> Every Week in July</p><hr className="hr-primary"/>
            <br />
            <Row className="justify-content-center">
              <Col md={{span:8}} xs={{span:10}} className="text-right">
              </Col>
            </Row>

            <br />
            <p className="text-left">The CovEd workshop series is a four week program composed of weekly science experiments, coding instruction, and creative writing discussions all led by amazing CovEd mentors. You can register for one workshop or all three at any time during July to improve your skills this summer! Fill out the form below to register for one or more of the workshops!</p>
            <br />
            <h5 className="text-center"><a className="dark-a" href="https://forms.gle/imLycth6HbTEcmV9A" target="_blank">Workshop Registration Form</a></h5>
            <br />
            <h5 className="text-center">Click<a className="dark-a" href="https://forms.gle/imLycth6HbTEcmV9A" target="_blank">here</a>for information on week 1 of the series!</h5>
            <br />
            <p><b>Please join our Remind so the workshop mentors can communicate with you better about the workshops moving forward. To join, please text @coveds to 81010!</b></p>
            <br />
            <p>Remind is a secure communication platform that does not share any of your personal information with us. You can download the app on your phone. During the 4-week span of the workshop, we will communicate with you through the platform.</p>
            <br />
            <br />
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Science Workshops"
                id="0"
              >
              Science Workshops
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ScienceWorkshop />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Coding Workshops"
                id="1"
              >
              Coding Workshops
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <CodingWorkshop />
              </ExpansionPanelDetails>
            </ExpansionPanel>
      
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Writing Workshops"
                id="1"
              >
              Writing Workshops
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <WritingWorkshop />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <br />

            <h4><span className="webinar-name">Career Exploration Day</span></h4>
            <p><b>Webinar Dates:</b> Saturday, May 23rd - Sunday, May 24th, 2020</p><hr className="hr-primary"/>
            <br />
          </Col>
          </Row>
            <Row className="justify-content-center">
              <Col md={{span:6}} xs={{span:10}} className="text-right">
              </Col>
            </Row>
          <Row className="justify-content-center">
          <Col sm={{span: 8}} xs={{span:10}} className="text-center">
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

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Non-Profit, Advocacy, & Global Health"
                id="0"
              >
              Non-Profit, Advocacy, & Global Health
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <NonprofitPanel />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="STEM"
                id="1"
              >
              STEM
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <StemPanel />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Medicine & Healthcare"
                id="1"
              >
              Medicine & Healthcare
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <MedicinePanel />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Diversity & Inclusion"
                id="1"
              >
              Diversity & Inclusion
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <DiversityPanel />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Education"
                id="1"
              >
              Education
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <EducationPanel />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Arts and Humanities"
                id="1"
              >
              Arts and Humanities
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <ArtsHumPanel />
              </ExpansionPanelDetails>
            </ExpansionPanel>

            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="Economics, Law, & Politics"
                id="1"
              >
              Economics,Law, & Politics
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <EconLawPanel />
              </ExpansionPanelDetails>
            </ExpansionPanel>
            </p>
            <br />
            <br />
            <h4><a className="dark-a" href="https://drive.google.com/file/d/1T1sYvdQi5fdWCUwVLvXXRuKMUJh3HHrD/view?usp=sharing"><span className="webinar-name">Public Speaking Workshop with Dr. Allison Coffin</span></a></h4>
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
            <h4><a className="dark-a" href="https://drive.google.com/file/d/1mwRcBXa5MCr6Z5G_dD9N02z_Hv_5IMUr/view"><span className="webinar-name">Virtual Mentoring 101 with Laura Nicholson</span></a></h4>
            <p><b>Webinar Date:</b> Friday, April 24th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Join Laura Nicholson to learn best practices for virtual mentoring -
               from tips on how to structure your sessions to strategies for choosing
               curriculum. </p>
            <p className="text-left"><i>Laura Nicholson has a bachelor’s degree in mechanical engineering
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