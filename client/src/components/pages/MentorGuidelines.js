import React, { Component } from "react";
import "./Contact.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Landing page library
import { Provider } from "rebass";
import {
  Section,
} from "react-landing-page";
import {theme} from "../Constants.js";

class MentorGuidelines extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={7}>
          <Row className="justify-content-center">
            <Col className="text-center">
            <h2><span className="light-h2">CovEd Mentor Guidelines</span></h2><p><b>Last Modified:</b> April 23, 2020</p><hr className="hr-primary"/>
            <br />
            <br />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={{span: 8}} xs={{span:10}} className="text-left">
            <p>
            Hello,
            <br />
            Thank you so much for agreeing to be a mentor for CovEd during these months! We are thankful for all your passion for helping the community in these hard times, especially helping those that need it the most. Email covedmentors@gmail.com if you have any questions!
            <br />
            This document provides CovEd’s rules and guidelines for interacting with your mentees. We hope that these procedures and expectations work to foster greater uniformity in mentor-mentee interactions and to ensure all mentoring services are conducted safely, securely, and effectively.
            <br />
            Here are the procedures and expectations for mentors:
            <br />
            <br />
            <b>Logistical Expectations</b>
            <ul>
              <li><b>You may not meet 1-on-1 with the student.</b>  You must check-in with a parent or guardian at the start of a session, and the parent or guardian must always be present in the same room, if not in the meeting itself. (For example, the student could be in the living room, where a guardian is nearby.)</li>
              <li><b>You must copy a parent or guardian on all email communications with a student.</b></li>
              <ul>
                <li>Sometimes parents will not have an email. In this case, in your first correspondence to the student, make sure that you can check in briefly with the guardian at the first meeting to make sure this form of communication is okay.</li>
                <li>We ask that you email the students’ school email address when you can. This may not be possible, as it is common that these district emails may have a firewall. In this case, you can use the student’s personal email works, but make sure that a parent or guardian is aware and consents to this.</li>
              </ul>
            <li>Meet at least 45 minutes with your mentee every week (or less if they prefer).</li>
            <li>Structure tutoring sessions in a way that facilitates learning and communication between you and your mentee.</li>
            <li>Always use Zoom, not any other platform unless you have confirmed it with CovEd’s leadership.</li>
            <li>If the student/family would like to file a complaint, please direct them toward <a target="_blank" className="dark-a" href="mailto:coved.management@gmail.com">coved.management@gmail.com</a>. Similarly, if for any reason you are uncomfortable with your match, please feel free to e-mail us at <a target="_blank" className="dark-a" href="covedmentors@gmail.com"> covedmentors@gmail.com.</a></li>
            </ul>
            <br />
            <b>Guidelines for Holding Virtual Meetings </b>
            <ul>
              <li>After each meeting, you are expected to complete a “CovEd Mentoring Session Debrief,” linked here: <a target="_blank" className="dark-a" href="https://forms.gle/564m3tkcB6q1SBEBA">https://forms.gle/564m3tkcB6q1SBEBA </a>. This is our main form of documentation for your meetings (and a way to reflect on how students are doing!)</li>
              <li>Please do not record mentoring sessions.</li>
              <li>Request that a guardian be present for the session, and check-in with the parent or guardian at the start of the session.</li>
              <ul>
                <li>If the guardian cannot be present for a particular session, offer to help answer questions over email or chat instead, and try to find times when you can meet with the guardian present.</li>
                <li>Let us know if you are unable to meet these requirements and we can work with you to make alternative arrangements.</li>
                </ul>
            </ul>
            <br />
            <b>Confidentiality</b>
            <ul>
            <li>Except as provided here, you may not disclose any personally-identifiable information about a student to others. We ask this to protect the privacy of both you and your mentee. This extends to the disclosure of information through social media posts (both private and public), email, text message, or otherwise.</li>
            <li>This does not apply to any information you disclose:</li>
              <ul>
                <li>to the parent or guardian,</li>
                <li> to CovEd,</li>
                <li> as part of the suspected abuse or neglect procedures described below, or </li>
                <li>as otherwise required by law.</li>
              </ul>
            </ul>
            <br />
            <b>Conduct Expectations</b>
            <br />
            What a CovEd mentor <b>SHOULD</b>:
            <ul>
              <li>Be a source of general academic support for the subject they’re teaching</li>
              <li>Tutor the student in a way that will maximize learning, not grades </li>
              <li>Provide insight beyond the classroom, whether it’s research, college classes, career goals, or other projects</li>
              <li>Encourage the student academically during rough times and check in with the student to see how they are doing non-academically</li>
              <li>Be a good representative for their college and the values it upholds</li>
            </ul>
            <br />
            What a CovEd mentor <b>SHOULDN’T</b>:
            <ul>
              <li>Do a student’s homework for them</li>
              <li>Be a source of info about all the crazy stuff that goes on in college </li>
              <li>Be a therapist. We know it may be tempting to help them with this situation, but try to keep it on topic and instead connect students to professional support as needed.</li>
              <li>Attempt to connect with a student socially. Do not communicate with students in any source of social media, including but not limited to FaceBook, Instagram, or Snapchat.</li>
            </ul>
            <b>Reporting Suspicious Behavior or Activity Related to Child Abuse or Neglect</b>
            <br />
            If you have reason to believe that your mentee may be subject to abuse or neglect, promptly report this information to the child welfare institution in your state. The US Department of Health and Human Services maintains <a target="_blank" className="dark-a" href="https://www.childwelfare.gov/organizations/?CWIGFunctionsaction=rols:main.dspList&rolType=Custom&RS_ID=16">a list of state child welfare agency websites</a>. We know many Mentors are based in Massachusetts. To report this information in Massachusetts, please follow the instructions <a target="_blank" className="dark-a" href="https://www.mass.gov/how-to/report-child-abuse-or-neglect">on this website</a>. If you have any questions about this process, please immediately contact <a target="_blank" className="dark-a" href="mailto:coved.management@gmail.com"> coved.management@gmail.com </a>.
            <br />
            <br />
            <b>Recommended Third-Party Guidance Materials</b>
            <ul>
              <li><a target="_blank" className="dark-a" href="https://smartonlinetutoring.com/the-best-tool-for-online-tutoring">Quick guide on tutoring over Zoom</a></li>
              <li><a target="_blank" className="dark-a" href="https://blog.tutorhub.com/2014/06/11/tips-for-tutors-best-practice-online-tutoring-techniques/amp-on/">General tutoring suggestions</a></li>
            </ul>
            </p>
            <p>
            <br />
            <b>Sample Introductory Email</b>(feel free to use this as a template, or make your own!):<br />
            <b>SUBJECT:</b> CovEd Mentor Introduction for [Mentee Name]
            <br />
            <br />
            <p>Dear [Mentee Name] and family,</p>
            <p>My name is [your name], a [title/year, if comfortable] studying [field of study or occupation], and I am looking forward to working with you as a mentor through CovEducation!</p>
            <p>A bit about me: I am from [hometown/state], and … [introduce yourself - could be favorite hobbies, activities involved with in school, about your siblings/pets, etc.]</p>
            <p>I’d love to schedule an initial 30-minute Zoom meeting between me, [Mentee Name], and a parent/guardian to go over any suggestions and expectations. This meeting would give us the opportunity to get to know each other, and it would be very helpful for me to know what [Mentee Name] is looking for in terms of specific content, frequency, and duration of mentoring sessions. If it’s easier for you, we can continue this discussion over phone or video call. You can also read CovEd’s <a target="_blank" className="dark-a" href="/termsconditions">terms of service</a>, <a target="_blank" className="dark-a" href="/privacy">privacy policy</a>, and <a target="_blank" className="dark-a" href="/mentorguidelines">mentor guidelines</a> [be sure to add the links!] for more information about this service.</p>
            <p>Here is my availability for the upcoming week: [offer blocks of time that you are free, as well as your time zone].</p>
            I hope your family is staying safe and healthy - look forward to meeting you all soon!<br />
            Best,<br />
            [Your Name]
            </p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default MentorGuidelines;
