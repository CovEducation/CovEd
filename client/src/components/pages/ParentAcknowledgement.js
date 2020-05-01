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

class ParentAcknowledgement extends Component {
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
            <h2><span className="light-h2">Parent Acknowledgment</span></h2><p><b>Last Modified:</b> April 30, 2020</p><hr className="hr-primary"/>
            <br />
            <br />
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col sm={{span: 8}} xs={{span:10}} className="text-left">
            <p>
            Dear Parent or Guardian,
            <br />
            <br />
            Thank you for registering an account with CovEd! This account will allow you to use our services to find the right mentor for you and your child. <strong>You will receive an email with a verification link that you can use to finish your registration and find a mentor.</strong>
            <br />
            <br />
            At CovEd, we make it a priority to ensure that your child’s privacy is respected, and that you consent to how we collect and use your child’s data. For details, please view our <a className="dark-a" href="/privacy"> Privacy Policy </a>.
            <br />
            <br />
            You can grant your consent to these practices by clicking the verification link sent to your email and finishing the registration process. Please note that, without parental consent: (1) you and your child will be unable to use the services provided by CovEd, and (2) your account and registration information will be deleted, and you will have to re-register.
            <br />
            <br />
            Once you finish the registration, you also have the right to:
            <br />
            <ul>
              <li>Revoke your consent to this collection of information;</li>
              <li>Review the personally identifiable information collected from your child by CovEd;</li>
              <li>Request that CovEd delete personally identifiable information about their child;</li>
              <li>Request that CovEd no longer collect or use personally identifiable information about your child.</li>
            </ul>
            <br />
            A parent or guardian may exercise any of these rights listed above by contacting CovEd at <a target="_blank" className="dark-a" href="mailto:coved.management@gmail.com">coved.management@gmail.com</a>. 
            <br />
            <br />
            <b>If you consent to this collection, please click on the verification link sent to your email to finish your registration.</b>
            <br />
            <br />
            Thank you so much for registering with CovEd! We look forward to helping you and your child meet your educational goals!
            <br />
            <br />
            Best,
            <br />
            <br />
            The CovEd Team
            </p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default ParentAcknowledgement;
