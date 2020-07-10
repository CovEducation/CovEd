import React from 'react';
import { Section } from "react-landing-page";
import { Provider } from "rebass";
import { theme } from '../Constants';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class DonationCompleted extends React.Component {
  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={1} mb={7}>
          <Row className="justify-content-sm-center">
          <Col sm={{span: 8}} className="text-center">
            <h3><span className="light-h3">Thank you for donating!<br /></span></h3>
            <br />
            <br />
            <p>Thank you for donating to CovEducation! If you have any questions about how we use our money -- please take a look at the FAQs page for more information. Got more specific questions? Feel free to email us at <a className="dark-a" href='mailto:coveducation@gmail.com'>coveducation@gmail.com</a></p>
          </Col>
          </Row>
        </Section>
        </Provider>
      </>
    );
  }
}

export default DonationCompleted;
