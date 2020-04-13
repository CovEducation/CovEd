import React, { Component } from "react";

import { get } from "../../utilities";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../utilities.css";
import "./Homepage.css";

import {Col, Row, Button} from 'react-bootstrap'
// Landing page library
import { Provider, Heading, Subhead } from "rebass";
import {
  Hero,
  ScrollDownIndicator,
  Flex,
  Section,
  CallToAction, Feature,
} from "react-landing-page";

// Styling components
import Typography from "@material-ui/core/Typography";
//import { Button } from "@material-ui/core";

// Assets
import header from "../../public/img/header.png"

const about_us_content =
  "CovED is a community of undergraduates from some of the top colleges/universities across the U.S. who are interested in supporting K-12 students in light of the COVID-19 pandemic. Our goal is to create a virtual platform for pairing mentors from higher ed institutions with K-12 students affected by school closures. We hope that this platform and our resources page will help provide additional academic assistance for students and families who are facing hardships caused by the ongoing pandemic.";
const problem_content =
  "Many of us have been grappling with how we can meaningfully support our home communities during COVID-19 school shutdowns. As this pandemic is intensifying, many middle and high school students are faced with financial, familial, and logistical challenges that may impact their learning experience.";
const solution_content =
  "The goal of this virtual service is to provide a resource for students including academic tutoring, college preparation, and personalized mentorship. We are working to compile free, web-based educational resources for students, families, and educators, as well as partner with schools and other non-profits to improve the learning experience of K-12 students.";

const theme={
  colors: {
      blue: '#00568C',
      yellow: '#F2BE32',
      white: '#ffffff',
      darkblue: '#003c61',
      weird: '#E3E1E5'
  },
  fonts:{
    sans: 'Muli, sans-serif',
  },
  fontWeights: {
    light: 300,
    normal: 600,
    bold: 700,
  },
  fontSizes: [
      12, 16, 24, 36, 48, 72
    ],
  space: [
      0,
      4,
      8,
      16,
      32,
      64,
      128,
      140,
      256,
    ]
}

class Homepage extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = { ok: false };
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
        <Hero
            color='black'
            backgroundImage={header}
            bg='white'
            bgOpacity={0.5}
          >
            <Heading fontSize={[5]}>CovEd<span className="light">ucation</span></Heading>
            <Subhead mt={3} fontSize={[2]}><span className="light">Continuing K-12 education during the COVID-19 outbreak</span></Subhead>
            <Flex mt={3} p={5}>
            <Button href='/register'>Register</Button>
            </Flex>
            <ScrollDownIndicator />
        </Hero>
        <Section fontSize={[2]} width={[1]} heading="" subhead="" p={6} mt={7} mb={7}>
          <Row className="justify-content-sm-center">
          <Col sm={{span: 8}} className="text-center">
            <h2><span className="light-h2">About Us</span><hr className="hr-primary"/></h2>
            <p fontWeight="light"><br /> <br />{about_us_content}</p>
          </Col>
          </Row>
        </Section>
        <Section fontSize={[2]} bg="blue" heading="" subhead="" p={[6,6,6,7]}>
          <Row bg="blue" className="justify-content-sm-center">
          <Col sm={{span: 8}} className="light-text text-center">
            <h2><span className="light-h2">Problem</span></h2>
            <p fontWeight="light">{problem_content} <br /><br /><br /></p>
            <h2><span className="light-h2">Our Solution</span></h2>
            <p fontWeight="light">{solution_content}</p>
          </Col>
          </Row>
        </Section>
        <Section p={6} mt={7} mb={2} bg="white">
            <h2><span className="light-h2">Interested?</span><hr className="hr-primary"/></h2>
            <br />
            <br />
            <br />
          <Flex flexWrap="wrap" justifyContent="center">
              <Row className="justify-content-sm-center" mt={4} mb={4}>
              <Col sm={{span: 4}} p={5} className="text-center">
              <h3><span className="light-h">Access free learning resources</span></h3>
              <br />
              <p fontWeight="light" className="feature">Check out our <a className="dark-a" href="/resources">resources page</a>! We have several links listed already.</p>
              </Col>
              <Col sm={{span: 4, offset:1}} className="text-center" mt={4} mb={4}>
              <h3><span className="light-h">Be a Mentor</span></h3>
              <br />
              <p fontWeight="light" className="feature">We are looking for <b>college students</b> to help us mentor and tutor students who no longer have school. Help us help them stay on-track educationally!</p>
              </Col>
              </Row>
              <br />
              <br />
              <br />
              <Row className="justify-content-sm-center">
              <Col sm={{span: 4}} className="text-center" p={5} >
              <h3><span className="light-h">Request a Mentor</span></h3>
              <br />
              <p fontWeight="light" className="feature">We are offering <b>free mentoring</b> and <b>tutoring services</b> for <b>K-12 students</b>. Our mentors and tutors are volunteer college students from some of the top universities in the world.</p>
              </Col>
              <Col sm={{span: 4, offset:1}} className="text-center" p={5}>
              <h3><span className="light-h">Know of a learning resource we haven't mentioned?</span></h3>
              <br />
              <p fontWeight="light" className="feature">Definitely let us know!</p>
              </Col>
              </Row>
          </Flex>
        </Section>
        <Section p={[2,6,2,2]} mt={1} mb={2}>
          <Flex flexWrap="wrap" justifyContent="center">
              <Row className="justify-content-sm-center" mt={4} mb={4}>
              <Col>
              <Button href='https://forms.gle/P4n36zh3pdt8nEzM8'>Submit a resource</Button>
              <Button href='/register'>Register</Button>
              </Col>
              </Row>
          </Flex>
        </Section>
        <Section fontSize={[2]} bg="darkblue" heading="" subhead="" p={[6,6,6,8]} mt={7}>
          <Row bg="blue" className="justify-content-sm-center">
          <Col sm={{span: 8}} className="light-text text-center">
            <h2><span className="light-h">Questions? Contact Us! <br /><br /><hr className="hr-light"/></span></h2>
            <br />
            <br />
            <p>Check out the <a className="light-a" href="/faq"> FAQs </a> page to see if we've already answered your question. If you don't see your question there, shoot us an email <a className="light-a" href='mailto:coveducation@gmail.com'>coveducation@gmail.com</a>! We're excited to hear from you~</p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default Homepage;
