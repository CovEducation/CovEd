import React, { Component } from "react";
import "./Footer.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Landing page library
import { Provider } from "rebass";
import {
  Box,
} from "react-landing-page";

import { theme, FOOT} from "../Constants.js";

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
        <Box fontSize={[2]} bg="blue" heading="" subhead="" p={[1,2,1,2]}>
        <Row className="justify-content-center">
        <Col sm={{span:6}} xs={{span:10}}>
        <Row className="justify-content-center">
          {FOOT.map((foot) => {
            return (
              <Col className="text-center" xs="auto">
              <a className="light" href={foot.link}> {foot.name} </a>
              </Col>
            )
          })}
          </Row>
          </Col>
          </Row>
        </Box>
        </Provider>
      </>
    );
  }
}

export default Footer;
