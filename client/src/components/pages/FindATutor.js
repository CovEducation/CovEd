import React, { Component } from "react";
import TutorFilter from "../modules/TutorFilter.js";
import TutorSearchResult from "../modules/TutorSearchResult.js";
import Image from "react-bootstrap/Image";
import "../../utilities.css";
import "./FindATutor.css";
import { Card } from "@material-ui/core";
import { get } from "../../utilities.js";

const ProfileDisplayTemp = (props) => {
  return (
    <Card style={{ textAlign: "center", margin: "auto auto" }}>
      <Image src={props.tutor.profile_pic} />
      <h4>{props.tutor.name}</h4>
      <h6>{props.tutor.major}</h6>
      <p>{props.tutor.subjects}</p>
      <a href={props.tutor.email}>Contact</a>
    </Card>
  );
};

class FindATutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: ["Math"],
      selected_tutor: undefined,
      tutors: [],
      time_zone: "",
    };
  }

  updateSubjects = (subjects) => {
    get("/api/tutorsBySubjects", { subjects: subjects, limit: 10 }).then((tutors) => {
      if (this.state.tutors !== tutors) {
        this.setState({tutors: tutors})
      }
    });
    if (this.state.subjects !== subjects) this.setState({ subjects: subjects });
    // We also want to clear the tutor selection
    this.setState({selected_tutor: undefined})
  };

  updateTutor = (tutor) => {
    if (this.state.selected_tutor != tutor) this.setState({ selected_tutor: tutor });
  };

  componentDidMount() {
    get("/api/tutorsBySubjects", { subjects: this.state.subjects, limit: 10 }).then((tutors) => {
      if (this.state.tutors !== tutors) {
        this.setState({tutors: tutors})
      }
    });
  }
  render() {
    return (
      <div className="u-flex">
        <div className="FindATutor-filter">
          <TutorFilter onChange={this.updateSubjects} />
        </div>
        <div className="FindATutor-results">
          <TutorSearchResult tutors={this.state.tutors} onChange={this.updateTutor} />
        </div>
        <div className="FindATutor-tutor-display">
          {/* Change when the profile component is implemented*/}
          {this.state.selected_tutor !== undefined ? (
            <ProfileDisplayTemp tutor={this.state.selected_tutor} />
          ) : (
            <div> </div>
          )}
        </div>
      </div>
    );
  }
}

export default FindATutor;
