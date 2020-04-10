import React, { Component } from "react";
import TutorFilter from "../modules/TutorFilter.js";
import TutorSearchResult from "../modules/TutorSearchResult.js";
import TutorResultDisplay from "../modules/TutorResultDisplay.js";
import "../../utilities.css";
import "./FindATutor.css";
import { get } from "../../utilities.js";
import Col from "react-bootstrap/Col";
import { Row, Container } from "react-bootstrap";
import { auth } from "../../firebase-config";

class FindATutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: ["Math"], // Default.
      selected_tutor: undefined,
      tutors: [],
      token: undefined,
    };
  }

  updateTags = (subjects) => {
    if (this.state.subjects !== subjects) {
      get("/api/getTutors", { subjects: subjects, limit: 10, token: this.state.token}).then((tutors) => {
        if (this.state.tutors !== tutors) {
          this.setState({ tutors: tutors })
        }
      });
      this.setState({ subjects: subjects })
    };
    // We also want to clear the tutor selection
    this.setState({ selected_tutor: undefined })
  };

  updateTutor = (tutor) => {
    if (this.state.selected_tutor != tutor) this.setState({ selected_tutor: tutor });
  };

  componentDidMount() {
    auth.onAuthStateChanged(async (user) => {
     try{
      const token = await user.getIdToken();
      this.setState({
        token: token
      });
      get("/api/getTutors", {
        subjects: this.state.subjects,
        limit: 10,
        token: token
      }).then((tutors) => {
        if (this.state.tutors !== tutors) {
          this.setState({
            tutors: tutors
          })
        }
      });
     }
     catch {
       alert("You must be logged in")
     }
    });
    
  }

  render() {
    return (
      <Container>
      <Row>
        <Col className="FindATutor-filter">
          <TutorFilter onChange={this.updateTags} />
        </Col>
        <Col className="FindATutor-results">
          <TutorSearchResult tutors={this.state.tutors} onChange={this.updateTutor} />
        </Col>
        <Col className="FindATutor-results">
          {/* Change when the profile component is implemented*/}
          {this.state.selected_tutor !== undefined ? (
            <TutorResultDisplay tutor={this.state.selected_tutor} user={this.props.user} />
          ) : (
              <div> </div>
            )}
        </Col>
      </Row>
      </Container>
    );
  }
}

export default FindATutor;
