import React, { Component } from "react";
import "../../utilities.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Homepage.css";
import {Provider} from "rebass";
import {
  Section,
} from "react-landing-page";

const theme={
  colors: {
      blue: '#00568C',
      yellow: '#F2BE32',
      white: '#ffffff',
      darkblue: '#003c61',
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

const FAQS = [
  {
    key: "0",
    question: "Who is eligible to register?",
    answer: "If you are a K-12 student, you are eligible to register as a tutee for personalized mentorship and academic support from an undergraduate or postgraduate mentor. For students under 18 years old, we require that parents be present during tutoring sessions."
  },
  {
    key: "1",
    question: "What tutoring services are available?",
    answer: "We provide tutoring services for all school subjects from K-12 (including some AP and Honors classes), mentorship, and college preparation (including help with college essays or preparing for the SAT/ACT/Subject Test exams)."
  },
  {
    key: "2",
    question: "How does tutoring work?",
    answer: "Due to the COVID-19 outbreak, our tutoring sessions will be conducted online via video chat. We suggest using Skype, Google Hangouts, or Zoom, although this can be decided on a one-to-one basis between the tutor and tutee."
  },
  {
    key: "3",
    question: "What if I do not have access to Wi-Fi?",
    answer: "Spectrum is providing free Wi-Fi services for students during the school shutdown. Their number is 1-844-488-8398. Tutoring lessons are also able to be held via phone calling."
  },
  {
    key: "4",
    question: "How do I get matched with a tutor/ tutee? How does the matching process work?",
    answer: "After filling out the registration form, parents/students will receive details on mentorship pairs and how to connect with his/her/their tutor. We are currently manually pairing the tutors and tutees based on a variety of factors including (but not limited to): subjects needed/offered, time zones, accomodations needed (i.e. SPED), future goals of the tutee and current course of study of the tutor, and any special comments left by the individual that filled out the registration form."
  },
  {
    key: "5",
    question: "How many hours a week do I have to commit?",
    answer: "We suggest students and tutors meet between 1-2 hours a week, although this can be decided among mentorship pairs. This may depend on the student’s needs as well as the tutor’s availability."
  },
  {
    key: "6",
    question: "How long will CovEd tutors provide tutoring?",
    answer: "We expect tutors to be able to help until the end of the academic year for the student. After the academic year is over, discussions between the tutor and tutee can help determine possible plans and whether or not the tutoring will continue."
  },
  {
    key: "7",
    question: "What are the responsibilities of a tutor?",
    answer: "Tutors are responsible for volunteering a minimum of one to two hours a week of their time to help their matched tutee with the subjects the tutee requests help in. While a tutor is only matched with one tutee, they can reach out if they would like to tutor more. Tutors are expected to help their tutee until the end of the 2020 academic school year. Additionally, all tutors must comply with the CovEd safety guidelines and expectations provided to them at all times."
  },
  {
    key: "8",
    question: "How are you addressing concerns of student safety?",
    answer: "Our safety guidelines during our tutoring sessions include (but are not limited to): receiving consent from the tutee’s parent or legal guardian, having a parent or guardian present during the lessons, having tutors record the lessons, and instituting a “no social media contact with your tutee” policy. All tutors will receive and be assessed on information about expectations and safety guidelines prior to their first meeting with their tutee."
  },
  {
    key: "9",
    question: "How are you reaching students in disadvantaged situations?",
    answer: "We have an outreach team that is actively working on recruiting students around the world. In our registration form, we ask questions pertaining to socioeconomic status, allowing us to ensure that these students are matched first."
  },
  {
    key: "10",
    question: "Can you help students that do not speak English very well?",
    answer: "Yes! We have tutors that are fluent in various languages and if this is a concern, be sure to mention this in the special requests/concerns portion of the registration form and we will definitely work to accommodate this. Additionally, we are working on translating all flyers and publicity materials into different languages to reach students regardless of their first language."
  },
  {
    key: "11",
    question: "Is there any way for educators to get involved?",
    answer: "One of CovEd’s goals is to ensure that all students have access to various resources to help stimulate educational growth during this time. On our website’s home page, we have a form where resources can be submitted. We are hoping to find the best resources for students and hope you can help us!"
  }
]

class FAQ extends Component {
  render() {
    return (
      <>
      <Provider theme={theme}>
      <Section p={[2,6,2,2]} mt={6} mb={6}>
      <h2><span className="light-h2">Frequently Asked Questions</span><hr className="hr-primary"/></h2>
      <br />
      <br />
      <br />
      <Col className="col-lg-8 col-lg-offset-2">
        <Accordion>
            {FAQS.map((faq) => {
              return (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Card.Header} eventKey={faq.key}>
                      {faq.question}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={faq.key}>
                    <Card.Body>{faq.answer}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              )
            })}
        </Accordion>
      </Col>
      </Section>
      <Section fontSize={[2]} bg="darkblue" heading="" subhead="" p={[2,7,2,7]} mt={2}>
        <Row bg="blue" className="justify-content-sm-center">
        <Col sm={{span: 8}} className="light-text text-center">
          <h2><span className="light-h">Still Got Questions? Contact Us! <br /><br /><hr className="hr-light"/></span></h2>
          <br />
          <br />
          <p>Got more questions? If you don't see your question answered here, send us an email <a className="light-a" href='mailto:coveducation@gmail.com'>coveducation@gmail.com</a>! We're excited to hear from you~</p>
        </Col>
        </Row>
      </Section>
        </Provider>
      </>
    );
  }
}

export default FAQ;
