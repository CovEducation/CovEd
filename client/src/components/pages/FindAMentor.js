import React, { Component } from "react";
import MentorFilter from "../modules/MentorFilter.js";
import MentorSearchResult from "../modules/MentorSearchResult.js";
import MentorResultDisplay from "../modules/MentorResultDisplay.js";
import "../../utilities.css";
import "./FindAMentor.css";
import { get } from "../../utilities.js";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { UserContext } from "../../providers/UserProvider";

class FindAMentor extends Component {

  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      selected_mentor: undefined,
      mentors: [],
    };
  }

  componentDidMount() {
    this.context.refreshUser()
    .then(this.searchForMentors);
  }

  updateTags = (tags) => {
    if (this.state.tags !== tags) {
      this.setState({ tags: tags }, this.searchForMentors);
    }
    // We also want to clear the mentor selection
    this.setState({ selected_mentor: undefined })
  };

  updateMentor = (mentor) => {
    if (this.state.selected_mentor != mentor) this.setState({ selected_mentor: mentor });
  };

  searchForMentors = () => {
    const user = this.context.user;
    if (user) {
      get("/api/getMentors", { subjects: this.state.tags, limit: 100, token: user.token }).then((mentors) => {
        if (this.state.mentors !== mentors) {
          this.setState({ mentors: mentors })
        }
      });
    } 
  }

  render() {
    if (!this.context.user){ 
      return <div></div>
    } else if (this.state.mentors.length === 0 && this.state.tags.length === 0) {
      this.searchForMentors();
    }
    return (
      <Container>
      <Row>
        <Col className="FindAMentor-filter">
          <MentorFilter onChange={this.updateTags} />
        </Col>
        <Col className="FindAMentor-results">
          <MentorSearchResult mentors={this.state.mentors} onChange={this.updateMentor} />
        </Col>
        <Col className="FindAMentor-results">
          {this.state.selected_mentor !== undefined ? (
            <MentorResultDisplay mentor={this.state.selected_mentor} user={this.props.user} />
          ) : (
              <div> </div>
            )}
        </Col>
      </Row>
      </Container>
    );
  }
}

export default FindAMentor;
