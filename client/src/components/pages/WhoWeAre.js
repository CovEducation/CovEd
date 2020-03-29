import React, { Component } from "react";

import "../../utilities.css";
import "./Homepage.css";
import { get } from "../../utilities";

// Landing page library
import { Provider, Heading, Subhead } from "rebass";
import {
  Hero,
  ScrollDownIndicator,
  Flex,
  Section,
} from "react-landing-page";

import { Container, Row, Col, Table } from "react-bootstrap";
import { Typography } from "@material-ui/core";

const management = [
  {
    name: "Evelyn Wong",
    school: "Harvard, 2021",
    major: "Neuroscience and Spanish Literature"
  },
  {
    name: "Sarah Dohadwala",
    school: "MIT, 2021",
    major: "Biological Engineering"
  },
  {
    name: "Dheekshita Kumar",
    school: "MIT, 2020",
    major: "Mechanical Engineering, Electrical Eng. & Computer Science"
  },
  {
    name: "Tam Nguyen",
    school: "MIT, 2021",
    major: "Biological Engineering"
  },
  {
    name: "Zoya Surani",
    school: "Harvard, 2022",
    major: "Neuroscience"
  },
  {
    name: "Daniela Velez",
    school: "MIT, 2023",
    major: "Computer Science"
  },
];
const resources = [
  {
    name: "Evelyn Wong",
    school: "Harvard, 2021",
    major: "Neuroscience and Spanish Literature"
  },
  {
    name: "Benjamin Levy",
    school: "Harvard, 2023",
    major: "Computer Science and Classics"
  },
];
const technology = [
  {
    name: "Dheekshita Kumar",
    school: "MIT, 2020",
    major: "Mechanical Engineering, Electrical Eng. & Computer Science"
  },
  {
    name: "Johan Cervantes",
    school: "MIT, 2021",
    major: "Computer Science"
  },
  {
    name: "Sanjay Yepuri",
    school: "UT Austin, 2021",
    major: "Computer Science and Mathematics"
  },
];



const renderTable = list => {
  return (
    <Table>
      <tbody>
        {
          list.map(person => {
            return (<tr>
              <td><b>{person.name}</b></td>
              <td>{person.school}</td>
              <td>{person.major}</td>
            </tr>)
          })
        }
      </tbody>
    </Table>
  )
}

class WhoWeAre extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = { ok: false };
  }

  componentDidMount() { }

  render() {
    return (
      <>
        <Provider>
          <Hero>
            <Container>
              <Row>
                <Col>
                  <Typography>
                    Management
                    </Typography>
                </Col>
                <Col xs={10}>
                  {renderTable(management)}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Typography>
                    Resource Management Team
                  </Typography>
                </Col>
                <Col xs={10}>
                  {renderTable(resources)}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Typography>
                    Technology Team
                  </Typography>
                </Col>
                <Col xs={10}>
                  {renderTable(technology)}
                </Col>
              </Row>
            </Container>
          </Hero>
        </Provider>
      </>
    );
  }
}

export default WhoWeAre;
