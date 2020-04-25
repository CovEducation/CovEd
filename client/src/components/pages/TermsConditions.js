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

class TermsConditions extends Component {
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
            <h2><span className="light-h2">CovEd Terms of Service</span></h2><p><b>Last Modified:</b> April 23, 2020</p><hr className="hr-primary"/>
            <br />
            <br />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={{span: 8}} xs={{span:10}} className="text-left">
            <h4>1. Introduction</h4>
            <p>
            Welcome to CovEd!  Please carefully read on to learn the rules and restrictions that govern your use of our web-application and all related services (the “Services”).<br /><br />
            These Terms of Service (the “Terms”) are a binding contract between you and the creators and organizers of CovEducation, a volunteer educational response group (“CovEd,” “we” and “us”).  Your access to and use of the Services are conditioned upon your acceptance of and compliance with these Terms. By using the Services in any way, you agree to accept and comply with all of these Terms.<br /><br />
            <b>Note: CovEd is a service that connects volunteers who agree to provide mentoring and tutoring services (“Mentors”) with students who are registered by their parents to receive such services (“Mentees”). CovEd does guarantee that it will find a Mentor for any Mentee, and does not make any representations or warranties regarding the availability, fitness, appropriateness, or other characteristics of the mentoring services that are arranged through the platform. CovEd does not monitor or control the conduct of Mentors and Mentees, and disclaims all liability with respect to these agreements to the maximum extent permitted by law.</b>
            </p>
            <h4>2. Modification </h4>
            <p>
            CovEd reserves the right, at its sole discretion, to modify these Terms at any time and without prior notice. If we modify these Terms, we will either post a notification of the modification on our Services or otherwise provide you with notice of the change. The date of the last modification will also be posted at the beginning of these Terms. It is your responsibility to check from time to time for updates. By continuing to access or use the Services, you accept and agree to be bound by any modified Terms.
            </p>
            <h4>3. Privacy Policy</h4>
            <p>
            Our <a className="dark-a" href="/policy"> Privacy Policy </a> discusses how we collect, process, and disclose personal information through these Services. Please read that policy carefully. Please note that the Children’s Online Privacy Protection Act of 1998 and regulations enacted under it by the Federal Trade Commission (collectively, “COPPA”) provide parents certain rights regarding the collection, use, and disclosure of personal information collected from children below the age of 13. For more information on these practices, please view our <a className="dark-a" href="/policy">Privacy Policy</a>.
            </p>
            <h4>4.Eligibility</h4>
            <p>
            <b>For Parents, Guardians, and Mentees:</b><br />
            No child under the age of 18 may use the Services unless they have been registered by a parent or legal guardian. CovEd may choose to use any method to validate your identity as a parent or legal guardian and to confirm your consent approved by the Federal Trade Commission, including without limitation engaging third parties to provide verification services. CovEd reserves all rights to take legal actions against anyone who misrepresents personal information or is otherwise untruthful about their identity. <br /><br />
            <b>For Mentors:</b>
            By using the Services or volunteering to be a Mentor you agree to be bound by these Terms and the CovEd Mentor Agreement [[add link]]. You are solely responsible for your own conduct and use of the Services.
            </p>
            <h4>5.	Acceptable Use </h4>
            <p>
            CovEd hereby grants you permission to use the Services provided such use is in compliance with these Terms. You further specifically agree that you will not to use the Services:
            <ul>
              <li>In any way that violates any federal, state, local, or international law or regulation.</li>

              <li>To engage in any activity or send, knowingly receive, upload, download, use, or re-use any content that is harmful, abusive, offensive, defamatory, or restricts or inhibits anyone's use or enjoyment of the Services. </li>

              <li>For the purpose of exploiting, harming, or attempting to exploit or harm any minor in any way, including but not limited to by exposing them to any inappropriate content.</li>

            	<li> To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>

              <li>To impersonate or attempt to impersonate CovEd, a CovEd Mentor or Mentee, another user, or any other person or entity (including, without limitation, by using email addresses associated with any of the foregoing).</li>
            </ul>
            </p>
            <p>
          Additionally, you agree not to:
            <ul>
              <li>Use the Services in any manner that could disable, overburden, damage, or impair the web-application or interfere with any other party's use of the web-application.</li>
              <li>Use any robot, spider, or other automatic means to access the Services for any purpose without the express consent of CovEd.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer, or database connected to the Website.</li>
              <li>Otherwise attempt to interfere with the proper working of the Services.</li>
            </ul>
            </p>
            <h4>6.	User Accounts </h4>
            <p>
            As a Mentor or as a parent or guardian signing up a Mentee, you will be asked to provide certain registration details or other information. It is a condition of your use of the Services that all the information you provide is correct, current, and complete. You may not transfer your account to anyone else, and may not use the Services on behalf of an organization or entity.
            </p>
            <h4>7.	Termination</h4>
            <p>
            CovEd has the right to terminate these Terms and your use of the Services at any time and without warning for failure to provide valid parental or guardian consent for a Mentee’s use of the services, for any breach of these Terms, or if CovEd determines in good faith that termination is necessary to protect the safety, security, or rights of any person.<br /><br />
            CovEd has no obligation to post any User Content (as defined below) you may provide through the Services, and may take any action with respect to any User Content that we deem necessary or appropriate in our sole discretion, including if we believe that such User Content violates these Terms, infringes any intellectual property other right of any person or entity, threatens the personal safety of users of the Website or the public, or could create liability for CovEd.<br /><br />
            If you wish to delete your account, please email <a className="dark-a" href="mailto:coved.management@gmail.com">coved.management@gmail.com</a>. Upon receipt of your request to delete your account, and except as set forth below, we will remove your account and associated information within a reasonable time period. Please note that the suspension or termination of your account does not limit your rights under COPPA.
            Sections 5, 7, 8, 9, 10, 11, 12, 15, and 16 shall survive termination of these Terms.
            </p>
            <h4>8.	Intellectual Property Rights </h4>
            <p>
            The Services and their entire contents, features, and functionality are owned by CovEd, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws. You may not copy, adapt, modify, prepare derivative works based upon, distribute, license, sell, transfer, publicly display, transmit, broadcast or otherwise exploit the Services, except as expressly permitted in these Terms. You have no right to sublicense the license rights granted in this section.<br /><br />
            We may permit you to post, upload, publish, submit or transmit content, including but not limited to relevant Mentor profile information and Mentee account information (“User Content”). By submitting any User Content on or through the Services, you grant to CovEd a worldwide, irrevocable, perpetual, non-exclusive, transferable, royalty-free license, with the right to sublicense, to use, view, copy, adapt, modify, distribute, license, sell, transfer, publicly display, publicly perform, transmit, stream, broadcast, access, view, and otherwise exploit such User Content, in any media, in order to operate, promote, improve, or market the Services.  You acknowledge and agree that you are solely responsible for all User Content. You represent and warrant that you have all rights, licenses, consents and releases that are necessary to grant to CovEd the license above.  CovEd is not responsible or liable to any party for the content or accuracy of any User Content.
            </p>
            <h4>9.	Third Party Content</h4>
            <p>
            By using the Services, CovEd may provide you with access to third party websites, information, and services, including but not limited to third party websites, databases, networks, servers, systems, products or other services.<br /><br />
            You hereby acknowledge that you use such third-party services at your own risk. CovEd does not control such third-party websites and services, and cannot be held responsible for their content, operation, or use. CovEd does not give any representation, warranty, or endorsement, express or implied, with respect to the legality, accuracy, quality, or authenticity of content, information, or services provided by such third-party services.
            </p>
            <h4>10.	Feedback</h4>
            <p>
            We welcome and encourage you to provide feedback, comments and suggestions for improvements to the Services (“Feedback”). Such Feedback can be sent to CovEd at <a className="dark-a" href="mailto:coved.management@gmail.com"> coved.management@gmail.com </a>. You agree that CovEd has the right, but not the obligation, to use such Feedback without any obligation to provide you credit, royalty payment, or ownership interest in any changes made to the Services.
            </p>
            <h4>11.	Warranties</h4>
            <p>
            YOU HEREBY ACKNOWLEDGE THAT YOU ARE USING THE SERVICES AT YOUR OWN RISK. THE SERVICES AND CONTENT ARE PROVIDED "AS IS," AND COVED, ITS AFFILIATES AND ITS THIRD PARTY SERVICE PROVIDERS HEREBY DISCLAIM ANY AND ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF ACCURACY, RELIABILITY, MERCHANTABILITY, NON-INFRINGEMENT, FITNESS FOR A PARTICULAR PURPOSE, AND ANY OTHER WARRANTY, CONDITION, GUARANTEE OR REPRESENTATION, EXPRESS OR IMPLIED, WHETHER ORAL, IN WRITING OR IN ELECTRONIC FORM. COVED, ITS AFFILIATES, AND ITS THIRD-PARTY SERVICE PROVIDERS DO NOT REPRESENT OR WARRANT THAT ACCESS TO THE SERVICES WILL BE UNINTERRUPTED OR THAT THERE WILL BE NO FAILURES, ERRORS OR OMISSIONS OR LOSS OF TRANSMITTED INFORMATION, OR THAT NO VIRUSES OR OTHER MALWARE WILL BE TRANSMITTED THROUGH THE SERVICES.<br /><br />
            Because some states do not permit disclaimer of implied warranties, you may have additional consumer rights under your local laws.
            </p>
            <h4>12.	Limitation of Liability</h4>
            <p>
            TO THE FULLEST EXTENT PROVIDED BY LAW, IN NO EVENT WILL THE COLLECTIVE LIABILITY OF COVED AND ITS INDIVIDUAL MEMBERS AND AFFILIATES, AND THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, AND DIRECTORS, TO ANY PARTY ARISING UNDER THIS TERMS OR RELATED IN ANY WAY TO YOUR USE OF THE SERVICES (REGARDLESS OF THE FORM OF ACTION, WHETHER IN CONTRACT, TORT, OR OTHERWISE) EXCEED THE GREATER OF $20 OR THE AMOUNT YOU HAVE PAID COVED FOR USE OF THE SERVICES.
            </p>
            <h4>13.	Notices</h4>
            <p>
            Any notices or other communications permitted or required hereunder, including those regarding modifications to these Terms, will be in writing and given by CovEd (a) via email (in each case to the address that you provide) or (b) by posting to the Services.
            </p>
            <h4>14.	No Waiver</h4>
            <p>
            No waiver by CovEd of any term or condition set out in these Terms of Service shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of CovEd to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
            </p>
            <h4>15.	Assignment</h4>
            <p>
            You may not assign or transfer these Terms, by operation of law or otherwise, without CovEd’s prior written consent. Any attempt by you to assign or transfer these Terms without such consent will be null and of no effect. CovEd may assign or transfer these Terms, at its sole discretion, without restriction. Subject to the foregoing, these Terms will bind and inure to the benefit of the parties, their successors and permitted assigns. These Terms do not and are not intended to confer any rights or remedies upon any person other than the parties.
            </p>
            <h4>16.	Governing Law</h4>
            <p>
            These Terms (and any further rules, polices, or guidelines incorporated by reference) shall be governed and construed in accordance with the laws of the Commonwealth of Massachusetts, United States. Any action related to your use of these Services or alleging breach of these Terms must be brought in a state or federal court in Middlesex, Massachusetts. Both parties agree to submit to the exclusive personal jurisdiction and venue of such courts.
            </p>
            <h4>17.	Entire Agreement and Severability</h4>
            <p>
            These Terms constitute the entire agreement between you and CovEd regarding your use of the Services, and supersede all prior written or oral agreements. If any part of the Terms is held invalid or unenforceable, that portion shall be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining portions shall remain in full force and effect.
            </p>
            <h4>18.	Contact Us</h4>
            <p>
            If you have any questions about the Services, please do not hesitate to contact us at <a className="dark-a" href="mailto:coved.management@gmail.com"> coved.management@gmail.com </a>.
            </p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default TermsConditions;
