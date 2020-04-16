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

class FindAMentor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: ["Math"], // Default.
      selected_mentor: undefined,
      mentors: [],
      token: undefined,
    };
  }

  updateTags = (subjects) => {
    const { user } = this.props;
    if (this.state.subjects !== subjects) {
      get("/api/getMentors", { subjects: subjects, limit: 10, token: user.token }).then((mentors) => {
        if (this.state.mentors !== mentors) {
          this.setState({ mentors: mentors })
        }
      });
      this.setState({ subjects: subjects })
    }
    // We also want to clear the mentor selection
    this.setState({ selected_mentor: undefined })
  };

  updateMentor = (mentor) => {
    if (this.state.selected_mentor != mentor) this.setState({ selected_mentor: mentor });
  };

  componentDidMount() {
    const { user } = this.props;
    get("/api/getMentors", { subjects: this.state.subjects, limit: 10, token: user.token }).then((mentors) => {
      if (this.state.mentors !== mentors) {
        this.setState({ mentors: mentors })
      }
    });
    
  }


  render() {
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
