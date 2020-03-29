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

// Styling components
import Typography from "@material-ui/core/Typography";
import { Button, Container } from "@material-ui/core";

// Assets
import girl_task from "../../public/img/clip-list-is-empty.png";
import boy_book from "../../public/img/clip-education.png";

const about_us_content =
  "CovED is a community of undergraduates from some of the top colleges/universities across the U.S. who are interested in supporting K-12 students in light of the COVID-19 pandemic. Our goal is to create a virtual platform for pairing mentors from higher ed institutions with K-12 students affected by school closures. We hope that this platform and our resources page will help provide additional academic assistance for students and families who are facing hardships caused by the ongoing pandemic.";
const problem_content = 
  "Many of us have been grappling with how we can meaningfully support our home communities during COVID-19 school shutdowns. As this pandemic is intensifying, many middle and high school students are faced with financial, familial, and logistical challenges that may impact their learning experience.";
const solution_content = 
  "The goal of this virtual service is to provide a resource for students including academic tutoring, college preparation, and personalized mentorship. We are working to compile free, web-based educational resources for students, families, and educators, as well as partner with schools and other non-profits to improve the learning experience of K-12 students.";

class Homepage extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = { ok: false };
  }

  componentDidMount() {
    // remember -- api calls go here!
    get("/api/healthCheck").then((resp) => {
      this.setState({ ok: resp.ok });
    });
  }

  render() {
    return (
      <>
        <Provider>
          <Hero
            color="black"
            bg="#fff"
            // {backgroundImage="https://miro.medium.com/max/12032/1*BnXWJeQOuwfQxxQRdQLQQg@2x.jpeg"}
          >
            <Flex flexWrap="wrap" alignItems="center">
              <Flex alignItems="flex-start" width={[1 / 4]} height={[1 / 3]} p={1}>
                <img src={girl_task} style={{ transform: "translate(256px,0px)" }} />

                <img src={boy_book} style={{ transform: "translate(-256px,128px)" }} />
              </Flex>
              <Flex
                width={[1, 1 / 2]}
                alignItems="center"
                flexDirection="column"
                style={{ zIndex: 1 }}
              >
                <Heading>CovEducation</Heading>
                <Subhead fontSize={[8, 4]}>
                  Continuing K-12 education during the COVID-19 outbreak
                </Subhead>
                <Flex mt={3} flexWrap="wrap" justifyContent="center">
                  {/* Material Buttons */}

                  <Button variant="outlined" color="primary" size="large" style={{ margin: 8 }}>
                    Parents and K-12 Students
                  </Button>
                  <Button variant="outlined" color="primary" size="large" style={{ margin: 8 }}>
                    College Students
                  </Button>
                </Flex>
              </Flex>
            </Flex>
            <ScrollDownIndicator />
          </Hero>
          <Container>
            <Section width={[1]} heading="About Us" subhead="">
              <Typography variant="body1">{about_us_content}</Typography>
            </Section>
            <Section width={[1]} heading="Problem" subhead="">
              <Typography variant="body1">{problem_content}</Typography>
            </Section>
            <Section width={[1]} heading="Our Solution" subhead="">
              <Typography variant="body1">{solution_content}</Typography>
            </Section>
          </Container>
        </Provider>
      </>
    );
  }
}

export default Homepage;
