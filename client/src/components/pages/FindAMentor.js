import React, { Component } from "react";
import MentorFilter from "../modules/MentorFilter.js";
import "../../utilities.css";
import "./FindAMentor.css";
import { get } from "../../utilities.js";
import { Row, Col} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

import { theme } from "../Constants";
import { Provider, Heading } from "rebass";

import { sendEmailVerification } from "../../api";
import { UserContext } from "../../providers/UserProvider";

import MentorTable from "../modules/MentorTable";

class FindAMentor extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      selected_mentor: undefined,
      mentors: [],
      error: undefined,
    };
  }

  componentDidMount() {
    this.context.refreshUser().then(this.searchForMentors);
  }

  updateTags = (tags) => {
    if (this.state.tags !== tags) {
      this.setState({ tags: tags }, this.searchForMentors);
    }
    // We also want to clear the mentor selection
    this.setState({ selected_mentor: undefined });
  };

  updateMentor = (mentor) => {
    if (this.state.selected_mentor != mentor) this.setState({ selected_mentor: mentor });
  };

  searchForMentors = () => {
    const user = this.context.user;
    if (user && user.verified) {
      console.log("Searching for these tags: ");
      console.log(this.state.tags);
      get("/api/getMentors", { subjects: this.state.tags, limit: 100, token: user.token }).then(
        (mentors) => {
          if (this.state.mentors !== mentors) {
            this.setState({ mentors: mentors });
          }
        }
      );
    }
  };

  render() {
    if (!this.context.user) {
      return <div></div>;
    } else if (this.state.mentors.length === 0 && this.state.tags.length === 0) {
      this.searchForMentors();
    }
    return (
      <Provider theme={theme}>
        <Container>
          {!this.context.user.verified ? (
            <Alert severity="warning">
              <AlertTitle>
                Please verify your email before searching for mentors. (
                <a href="#resend" onClick={() => sendEmailVerification()}>
                  Resend Verification
                </a>
                )
              </AlertTitle>
              <p>If you have already verified your email try refreshing the page.</p>
            </Alert>
          ) : (
            <>
            <Row className="justify-content-center">
            <Col sm={{span:8}} xs={{span:10}} className="text-center">
            <br />
            <Heading fontSize={[5,7]} fontWeight="normish">Find A Mentor <br /><hr className="hr-primary"/><br /></Heading>
            </Col>
            </Row>
            <Row className="justify-content-center">
            <Col sm={{span:8}} xs={{span:10}}>
                <MentorFilter onChange={this.updateTags} />
            </Col>
            </Row>
            <Row className="justify-content-center">
              <Col sm={{span:8}} xs={{span:10}}>
                <MentorTable mentors={this.state.mentors} onSelect={this.updateMentor}/>
              </Col>
            </Row>
            </>
          )}
        </Container>
      </Provider>
    );
  }
}

export default FindAMentor;
