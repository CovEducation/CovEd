import React, { Component } from "react";
import "../../utilities.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import "./Homepage.css";
import {Provider} from "rebass";
import {
  Section,
} from "react-landing-page";

import { theme, FAQS } from "../Constants.js";

class FAQ extends Component {
  render() {
    return (
      <>
      <Provider theme={theme}>
      <Section p={[2,6,2,2]} mt={6} mb={6}>
      <Col className="col-sm-8 col-sm-offset-2">
      <h2 className="text-center"><span className="light-h2">Frequently Asked Questions</span><hr className="hr-primary"/></h2><br />
      <h5 className="text-center">Still have questions? Visit our Contact Us page to get in touch.</h5>
      <br />
      <h3 className="text-center"><span className="light-h2">General</span></h3>
            {FAQS.filter((f) => f.category == "general").map((faq) => {
              return (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={faq.question}
                    id={faq.key}
                  >
                  {faq.question}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    {faq.answer}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )
            })}
        <br /><br /><h3 className="text-center"><span className="light-h2">For Parents & Guardians</span></h3>
            {FAQS.filter((f) => f.category == "mentee").map((faq) => {
              return (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={faq.question}
                    id={faq.key}
                  >
                  {faq.question}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    {faq.answer}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )
            })}
        <br /><br /><h3 className="text-center"><span className="light-h2">For Mentors</span></h3>
            {FAQS.filter((f) => f.category == "mentor").map((faq) => {
              return (
                <ExpansionPanel>
                  <ExpansionPanelSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={faq.question}
                    id={faq.key}
                  >
                  {faq.question}
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                    {faq.answer}
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              )
            })}
      </Col>
      </Section>
      </Provider>
      </>
    );
  }
}

export default FAQ;
