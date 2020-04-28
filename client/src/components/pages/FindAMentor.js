import React, { Component } from "react";
import MentorFilter from "../modules/MentorFilter.js";
import "../../utilities.css";
import "./FindAMentor.css";
import { get } from "../../utilities.js";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Alert from "@material-ui/lab/Alert";
import AlertTitle from "@material-ui/lab/AlertTitle";

import { theme } from "../Constants";
import { Provider } from "rebass";
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
            <Row>
                <MentorFilter onChange={this.updateTags} />
            </Row>
            <Row>              
                <MentorTable mentors={this.state.mentors} onSelect={this.updateMentor}/>
            </Row>
            </>
          )}
        </Container>
      </Provider>
    );
  }
}

export default FindAMentor;
