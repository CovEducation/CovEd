import React, {Component} from "react";
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
            <h4><a className="dark-a" href="https://drive.google.com/file/d/1Uboyf8t-cvdbazzDs0sbY_KNVxawvGNC/view"><span className="webinar-name">Grit: The Power of Passion and Perseverance</span></a></h4><p><b>Webinar Date:</b> August 5th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Angela Duckworth is co-founder and CEO of Character Lab, a nonprofit that uses psychological science to help children thrive. She is also the Christopher H. Browne Distinguished Professor of Psychology at the University of Pennsylvania, faculty co-director of the Penn-Wharton Behavior Change for Good Initiative, and faculty co-director of Wharton People Analytics. A 2013 MacArthur Fellow, Angela has advised the White House, the World Bank, NBA and NFL teams, and Fortune 500 CEOs. Prior to her career in research, Angela founded a summer school for low-income children that was profiled as a Harvard Kennedy School case study and, in 2018, celebrated its 25th anniversary. She has also been a McKinsey management consultant and a math and science teacher at public schools in New York City, San Francisco, and Philadelphia. Angela completed her undergraduate degree in Advanced Studies Neurobiology at Harvard, graduating magna cum laude. With the support of a Marshall Scholarship, she completed an MSc with Distinction in Neuroscience from Oxford University. She completed her PhD in Psychology as a National Science Foundation Graduate Fellow at the University of Pennsylvania. Angela has received numerous awards for her contributions to K-12 education, including a Beyond Z Award from the KIPP Foundation. Angela’s TED talk is among the most-viewed of all time. Her book Grit: The Power of Passion and Perseverance is a #1 New York Times best seller</p>
            <br />
            <br />
            <h4><a className="dark-a" href="https://www.dropbox.com/s/ucu1wtgf5za5x5r/zoom_0.mp4?dl=0"><span className="webinar-name">The Science of Happiness and Mental Health</span></a></h4><p><b>Webinar Date:</b> Friday, July 10th, 2020</p><hr className="hr-primary"/>
            <p className="text-left">Dr. Laurie Santos is Professor of Psychology and Head of Silliman College at Yale University. Dr. Santos is an expert on human cognition and the cognitive biases that impede better choices. Her new course, Psychology and the Good Life, teaches students how the science of psychology can provide important hints about how to make wiser choices and live a life that’s happier and more fulfilling. Her course recently became Yale’s most popular course in over 300 years, with almost one of our four students at Yale enrolled.</p>
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