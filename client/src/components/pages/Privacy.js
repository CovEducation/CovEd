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

class Privacy extends Component {
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
            <h2><span className="light-h2">CovEd Privacy Policy</span></h2><p><b>Last Modified:</b> April 23, 2020</p><hr className="hr-primary"/>
            <br />
            <br />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={{span: 8}} xs={{span:10}} className="text-left">
            <h4>1.	Introduction </h4>
            <p>
            We at CovEd know you care about how your personal information and that of your children is used and shared, and we take your privacy seriously.  Please read the following to learn more about our Privacy Policy (the “Policy”).  By using or accessing the CovEd Services in any manner, you acknowledge that you accept the practices and requirements outlined in this Policy, and you hereby consent that we will collect, use, and share your information in the following ways.
            <br />
            Unless otherwise noted, all terms have the same definition as in the CovEd <a className="dark-a" href="/termsconditions" target="_blank">Terms of Service.</a></p>

            <h4>2.	 Information that CovEd Collects</h4>
            <p>
            CovEd collects different information depending on whether you use the services as a Mentor or as on behalf of a Mentee (such as a parent or guardian of a Mentee).
            <br />
            As set forth in our  <a className="dark-a" href="/termsconditions" target="_blank">Terms of Service</a>, only a parent or guardian may sign up a Mentee under the age of 18. The Children’s Online Privacy Protection Act of 1998 and regulations enacted under it by the Federal Trade Commission (“COPPA”) require us to obtain verifiable parental consent in order to collect, use, and disclose personal information of individuals under the age of 13. We do not knowingly collect personal information from individuals under 13 years of age without parental consent. If we learn we have collected or received personal information about an individual under 13 years of age without verification of parental consent, we will delete that information. If you believe we might have any information from or about an individual under 13 years of age, please contact us at <a className="dark-a" href="mailto:coveducation@gmail.com">coveducation@gmail.com </a>.
            <br />
            The information collected is as follows:
            <br />
            </p>
            <h5> 2.1.	Information Collected for All Users </h5>
            <p>
            <br />
            <b>Automatically Collected Information</b>
            <br />
            Whenever you interact with our Services, we automatically receive and record information from your browser or your device which may that is transmitted as part of standard Internet traffic. This includes your IP address, what type of device and browser you’re using, the previous page you were on, and the page or feature you requested. You may be able to change the preferences on your browser or device to prevent or limit your device’s disclosure of information, but this may prevent you from taking advantage of some of our features.
            <br />
            <br />
            <b>Cookies </b>
            <br />
            In order to keep you logged into the Services, CovEd may use “cookies,” or small files that CovEd can send to your browser for storage on your device. They make the use of these Services easier to navigate by saving preferences, remembering your login information, and recalling other aspects of your use of these Services. While most browsers allow you to disable cookies, we recommend that you leave cookies enabled so as not to interfere with the full functionality of these Services.
            <br />
            <br />
            <b>Voluntarily Disclosed Information</b>
            <br />
            When you use the Services, you will have the opportunity to provide us with some information directly. For example, some functions of the Services require you to register for an account, where we will ask you for information that may include your email address and desired password. We may also collect other information you directly give us as you build your Mentor or Mentee profile or verify your identity on the Services.
            <br />
            A very limited portion of the Services allow you to post or transmit content (“User Content”). For example, a Mentor will submit User Content in order to build a profile, and a Mentee can send a short message to a Mentor when requesting their tutoring. You may post User Content at your sole discretion, but please note that some User Content may be publicly available or viewable to others. Do not post any sensitive personal information as User Content.
            <br />
            <br />
            </p>
            <h5> 2.2.	Information Collected on Behalf of Mentees </h5>
            <p>
            <br />
            <b>Information Collected at Registration </b>
            <br />
            As set forth in our <a className="dark-a" href="/termsconditions" target="_blank">Terms of Service</a>, only a parent or guardian may sign up a Mentee under the age of 18. At registration, CovEd collects a parent or guardian’s name and email address as an identifier, and requests the user to create a password in order to establish a user account. We also collect your time zone, the Mentee’s name and email address, and level of educational background, subjects in which they seek tutoring, and other educational instructions.
            <br />
            When you select a Mentor, this information along with your message to the Mentor will be provided to the Mentor to help them make sure they can provide appropriate tutoring services to the Mentee. This may also be used to help identify other Mentors that are best suited for your child or children and to facilitate contact once a paring has been established.
            <br />
            <br />
            <b>Information Collected During and After Mentorship Sessions </b>
            <br />
            CovEd is a matchmaking service, and does not participate in meetings between Mentors and Mentees. Mentors are instructed to follow the CovEd <a className="dark-a" href="/mentorguidelines"> Mentor Agreement </a>, which requires Mentors to not disclose any personally-identifiable information about a Mentee except limited circumstances. Mentors send a report following sessions to CovEd after a session occurs, which discloses the Mentee involved, the duration of the meeting, and their feedback from the experience. This is used by CovEd to develop and improve the Services and ensure compliance with CovEd’s Terms.
            </p>
            <h4> 3.	Use of Collected Information </h4>
            <p>
            CovEd uses the information collected as described above to develop and maintain the Services, comply with legal obligations, and for any purpose for which you provide consent.
            <br />
            We may communicate with you via email or text message to verify your account, notify you about our privacy practices and activity on the Services, inform you of changes to our policies and procedures, or to otherwise facilitate the operation of the Services. Please note, if we communicate with you via text message, standard rates may apply.
            </p>
            <h4>4.	Disclosure of Information</h4>
            <p>
            CovEd may disclose the information above in the following circumstances:
            <br />
            <ul>
            <li> <i>Third-Party Services and Contractors</i> — CovEd may employ other companies and people to perform tasks on our behalf and, from time to time, may need to share your information with them to provide services to you. For example, we may use third-party services to host our web application and store user data. Any information shared for such purposes will be limited and will only include what is needed to provide the service, and CovEd has worked to confirm that these service providers do not disclose information to others except as is consistent with this Policy.</li>
            <li><i>Public Information</i> — a very limited amount of User Content is made available on the Services, including information a Mentor provides for their profile. Please note that any information you submit in a public portion of the site will be viewable by others. Accordingly, only include information in such submissions that you are comfortable sharing with third parties or the general public </li>
            <li><i>Business Transfers</i> — if CovEd is acquired by another company, goes into dissolution, or otherwise transfers ownership or assets, CovEd may transfer the information it has as part of that transaction.</li>
            <li><i>Aggregate Usage Information and Analytics</i> — We may de-identify your personal information so that you are not identified as an individual and use that information for any business purpose, including for analyzing demographic and usage information or to help identify new partners and companion services </li>
            <li><i>Legal Compliance</i>— We reserve the right to access, read, and disclose any information that we believe in our sole discretion is necessary to comply with law or court order; enforce or apply our  <a className="dark-a" href="/termsconditions" target="_blank">Terms of Service</a> and other agreements; or protect the rights, property, or safety of CovEd, our members, our users, or others</li>
            </ul>
            </p>
            <h4>5.	Data Security and Storage </h4>
            <p>
            CovEd recognizes the importance of data security and has implemented measures designed to protect the security, integrity, and confidentiality of your personal information.
            <br />
            We endeavor to protect the privacy of your account and other personal information we hold in our records and actively work to prevent unauthorized entry or use, hardware or software failure, and other factors that could potentially compromise security of user information.  The safety and security of your information also depend on you. Certain parts of the Services are protected by a password, and it is your responsibility to keep that password confidential.
            </p>
            <h4>6.	Modification and Deletion of Information </h4>
            <p>
            You may access, and, in some cases, edit or delete your information through your account and profile settings. The information you can view, update, and delete may change over time. You may request that we delete your account and your data from CovEd by contacting us at<a className="dark-a" href="mailto:coved.management@gmail.com"> coved.management@gmail.com</a>. Please note that if you request removal of your information you may be unable to continue to utilize the Services.
            </p>
            <h4>7.	Parental Rights Under COPPA </h4>
            CovEd does not require a child or a child’s parents or guardians to disclose more information about the child than is reasonably necessary to participate in any part of the Services, and does not share personally identifiable information of a child with third parties who are not part of the Services except as provided in section 4 above. Parents and guardians, with a child or children under the age of 13, have certain rights that include the right to:
            <ul>
              <li>Review their child’s personal information collected by CovEd;</li>
              <li>Request that CovEd delete collected information about their child;</li>
              <li>Request that CovEd no longer collect or use information about their child;</li> 
              <li>Request that CovEd no longer share information about their child with third parties that are not part of Services.</li> 
            </ul>
            Parents may exercise any of these rights listed above by contacting CovEd at <a className="dark-a" href="mailto:coved.management@gmail.com">coved.management@gmail.com</a>.
            <h4>8.	Changes to the Policy</h4>
            <p>
            It is our policy to post any changes we make to our privacy policy on this page. If we make material changes to how we treat our users' personal information, we will notify you by email to address specified in your account or through a notice on the web-application home page. The date the privacy policy was last revised is identified at beginning of this policy. You are responsible for ensuring we have an up-to-date active and deliverable email address for you.
            </p>
            <h4>9.	Contact Information</h4>
            <p>
            For any inquiries about this privacy policy and our privacy practices, contact us at: <a className="dark-a" href="mailto:coveducation@gmail.com">coveducation@gmail.com</a>.
            </p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default Privacy;
