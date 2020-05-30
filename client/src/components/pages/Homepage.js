import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../utilities.css";
import "./Homepage.css";
import { get } from "../../utilities";
import Image from 'react-bootstrap/Image'

import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";

import accountcircle from "../../public/img/account_circle.svg";
import personsearch from "../../public/img/person_search.svg";
import group from "../../public/img/group.svg";
import editprofile from "../../public/img/grading.svg";
import email from "../../public/img/email.svg";

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
        value: this.state.mentee_count + 1407,
      },
      {
        name: "Colleges",
        value: this.state.college_count,
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
            <Heading fontSize={[7,9]} fontWeight="normish">About Us<br /><hr className="hr-primary"/></Heading>
            <Text fontWeight='light'>
            <br /> <br />{about_us_content} <br /><br /></Text>
          </Col>
          </Row>
        </Section>
        <Section bg = "blue" heading="" subhead="" p={[4,5,4,6]} mt={3} mb={3} color="white">
        <Heading fontSize={[7,9]} fontWeight="normish">Our Community<br /><hr className="hr-light"/></Heading>
          {memberCount}
        </Section>
        <Section p={[6,3,6,3]} mt={5} mb={1} bg="white" fontSize={[4,3]}>
            <Heading fontSize={[7,9]} fontWeight="normish">How It Works <br /><hr className="hr-primary"/></Heading>
            <br />
            <Heading fontSize={[5,7]} fontWeight="bold">For Parents and Students<br /><br /></Heading>
            <br />
          <Flex flexWrap="wrap" justifyContent="center">
              <Row className="justify-content-center" mt={5} mb={4}>
              <Col sm={{span:3}} xs={{span:10}} className="text-center featurebox">
              <Image src={accountcircle}/>
              <br />
              <br />
              <Heading fontSize={[6,8]} fontWeight="normish">Register<br /></Heading>
              <br />
              <p fontWeight="light" className="feature"> Register for an account <a className="dark-a" href="/resources">here</a>! Make sure you put in the correct email because you will recieve an email-verification link! </p>
              <br />
              <br />
              <br />
              </Col>
              <Col sm={{span:3}} xs={{span:10}} className="text-center featurebox">
              <Image src={personsearch}/>
              <br />
              <br />
              <Heading fontSize={[6,8]} fontWeight="normish">Find A Mentor<br /></Heading>
              <br />
              <p fontWeight="light" className="feature"> <b>Ensure you have logged in</b>. Visit the <a className="dark-a" href="/findamentor"> Find A Mentor page </a> where you will be able to search for mentors and request a mentor. Please only contact <b> one mentor per student </b>.</p>
              </Col>
              <Col sm={{span:3}} xs={{span:10}} className="text-center featurebox">
              <Image src={group}/>
              <br />
              <br />
              <Heading fontSize={[6,8]} fontWeight="normish">Meet Mentor<br /></Heading>
              <br />
              <p fontWeight="light" className="feature">Upon requesting a mentor you will recieve an email confirmation Within 48 hours of requesting a mentor, you will recieve an email from the mentor asking to meet. Schedule a time to meet! If you do not hear from the mentor within 48 hours, please request another mentor.</p>
              </Col>
              </Row>
          </Flex>
          <br />
          <Heading fontSize={[5,7]} fontWeight="bold">For College Students<br /><br /></Heading>
          <br />
          <Flex flexWrap="wrap" justifyContent="center">
              <Row className="justify-content-center" mt={5} mb={4}>
              <Col sm={{span:3}} xs={{span:10}} className="text-center featurebox">
              <Image src={accountcircle}/>
              <br />
              <br />
              <Heading fontSize={[6,8]} fontWeight="normish">Register<br /></Heading>
              <br />
              <p fontWeight="light" className="feature"> Register for an account <a className="dark-a" href="/resources">here</a>! Make sure you put in the correct email because you will recieve an email-verification link! </p>
              <br />
              <br />
              <br />
              </Col>
              <Col sm={{span:3}} xs={{span:10}} className="text-center featurebox">
              <Image src={editprofile}/>
              <br />
              <br />
              <Heading fontSize={[6,8]} fontWeight="normish">Edit Profile<br /></Heading>
              <br />
              <p fontWeight="light" className="feature"> <b>Ensure you have logged in</b>. Visit your <a className="dark-a" href="/profile"> Profile page </a> where you will be able to edit your information including a bio. Make sure you have checked off "Listed as Available Mentor".</p>
              </Col>
              <Col sm={{span:3}} xs={{span:10}} className="text-center featurebox">
              <Image src={email}/>
              <br />
              <br />
              <Heading fontSize={[6,8]} fontWeight="normish">Contact Mentee<br /></Heading>
              <br />
              <p fontWeight="light" className="feature"> When a parent requests you as a mentor, you will recieve an email with further instructions and contact information. Be sure to contact them as soon as possible if you are able to be a mentor!</p>
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
