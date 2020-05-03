import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../utilities.css";
import "./Homepage.css";
import { get } from "../../utilities";

import { Button, Col, Row } from "react-bootstrap";
// Landing page library
import { Heading, Provider, Subhead, Text } from "rebass";
import { Flex, Hero, Section } from "react-landing-page";
// Assets
import header from "../../public/img/header.jpg";
import { theme, about_us_content, problem_content, solution_content } from "../Constants.js";
import AnimatedNumber from 'react-animated-number';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentor_count : 0,
      mentee_count : 0,
      college_count : 0,
    }
  }

  async componentWillMount() {
    let stats = await get("/api/stats");

    this.setState({
      mentor_count: stats.mentor_count,
      mentee_count: stats.mentee_count,
      college_count: stats.college_count,
    })
  };

  getMemberCount = () => {

    const animation_duration = 2000; // 2 seconds.
    let stats = [
      {
        name: "Mentors",
        value: this.state.mentor_count + 2150,
      },
      {
        name: "Mentees",
        value: this.state.mentee_count + 1175,
      },
      {
        name: "Colleges",
        value: Math.max(this.state.college_count,250),
      }
    ];

    return (
      <Row className="justify-content-center">
      {stats.map((stat) => {
        return (
          <Col sm={{span:4}} xs={{span:10}} className="text-center">
          <div key={stat.name} style={{margin:'50px', align:'center'}}>
            <AnimatedNumber  value={stat.value}
              style={{
                transition: '0.8s ease-out',
                fontSize: '4rem',
                transitionProperty:
                  'backgroundColor, color, opacity'
              }}
              duration={animation_duration}
              formatValue={(n) => Math.round(n)} />
            <br />
            <h3> {stat.name} </h3>
          </div>
          </Col>
        )
      })}

      </Row>
    )
  }
  render() {
    let memberCount = this.getMemberCount();
    return (
      <>
        <Provider theme={theme}>
        <Hero
            color='black'
            backgroundImage={header}
            bg='white'
            bgOpacity={0.5}
          >
            <Heading fontSize={[9,11]} textAlign="center">CovEd<span className="light">ucation</span></Heading>
            <Subhead mt={3} fontSize={[3,4]} textAlign="center"><span className="light">Continuing K-12 education in the US during the COVID-19 outbreak</span></Subhead>
            <Flex mt={2} p={5}>
              <Button href='/register'>Register</Button>
            </Flex>
        </Hero>
        <Section fontSize={[4,3]} heading="" subhead="" p={[6,5,6,6]} mt={3} mb={4} justifyContent="center">
          <Row className="justify-content-center" >
          <Col className="text-center" sm={{span:8}} xs={{span:10}}>
            <Heading fontSize={[7,9]} fontWeight="normish">About Us<br /><br /><hr className="hr-primary"/></Heading>
            <Text fontWeight='light'>
            <br /> <br />{about_us_content} <br /><br /></Text>
          </Col>
          </Row>
        </Section>
        <Section heading="" subhead="" p={[6,5,6,6]} mt={3} mb = {4}>
          {memberCount}
        </Section>
        <Section fontSize={[4,3]} bg="blue" heading="" subhead="" p={[6,5,8,6]}>
          <Row bg="blue" className="justify-content-center">
          <Col sm={{span:8}} xs={{span:10}} className="light-text text-center">
            <Heading fontSize={[7,9]} fontWeight="normish">Problem<br /><br /></Heading>
            <Text fontWeight="light">
                  {problem_content} <br /><br /><br />
            </Text>
            <Heading fontSize={[7,9]} fontWeight="normish">Solution<br /><br /></Heading>
            <Text fontWeight="light">
                  {solution_content}
            </Text>
          </Col>
          </Row>
        </Section>
        <Section p={[6,3,6,1]} mt={5} mb={1} bg="white" fontSize={[4,3]}>
            <Heading fontSize={[7,9]} fontWeight="normish">Interested? <br /><br /><hr className="hr-primary"/></Heading>
            <br />
            <br />
            <br />
          <Flex flexWrap="wrap" justifyContent="center">
              <Row className="justify-content-sm-center" mt={5} mb={4}>
              <Col sm={{span:4, offset:0}} xs={{span:10, offset:1}} p={5} className="text-center">
              <Heading fontSize={[6,8]} fontWeight="normish">Access Free Resources<br /></Heading>
              <br />
              <p fontWeight="light" className="feature">Check out our <a className="dark-a" href="/resources">resources page</a>! We have several links listed already.</p>
              <br />
              <br />
              <br />
              </Col>
              <Col sm={{span:4, offset:1}} xs={{span:10, offset:1}} className="text-center" mt={5} mb={4}>
              <Heading fontSize={[6,8]} fontWeight="normish">Be a Mentor<br /></Heading>
              <br />
              <p fontWeight="light" className="feature">We are looking for <b>college students</b> to help us mentor and mentor students who no longer have school. Help us help them stay on-track educationally!</p>
              </Col>
              </Row>
              <br />
              <br />
              <br />
              <Row className="justify-content-sm-center">
              <Col sm={{span:4, offset:0}} xs={{span:10, offset:1}} className="text-center" p={5}>
              <Heading fontSize={[6,8]} fontWeight="normish">Request a Mentor<br /></Heading>
              <br />
              <p fontWeight="light" className="feature">We are offering <b>free mentoring</b> and <b>mentoring services</b> for <b>K-12 students</b>. Our mentors and mentors are volunteer college students from some of the top universities in the world.</p>
              <br />
              <br />
              <br />
              </Col>
              <Col sm={{span:4, offset:1}} xs={{span:10, offset:1}} className="text-center" p={3}>
              <Heading fontSize={[6,8]} fontWeight="normish">Suggest a Resource<br /></Heading>
              <br />
              <p fontWeight="light" className="feature">Definitely let us know!</p>
              </Col>
              </Row>
          </Flex>
        </Section>
        <Section p={[1,6,2,2]} mb={2}>
          <Flex flexWrap="wrap" justifyContent="center">
              <Row className="justify-content-center" mb={4}>
              <Col align="center">
              <Button href='https://forms.gle/P4n36zh3pdt8nEzM8'>Submit a resource</Button>
              <Button href='/register'>Register</Button>
              </Col>
              </Row>
          </Flex>
        </Section>
        <Section fontSize={[3]} bg="darkblue" heading="" subhead="" p={[6,6,6,8]} mt={7}>
          <Row bg="blue" className="justify-content-sm-center">
          <Col sm={{span: 8}} className="light-text text-center">
            <Heading fontSize={[7,9]} fontWeight="normish">Questions? Contact Us! <br /><br /><hr className="hr-light"/></Heading>
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
