import React, { Component } from "react";
import { get } from "../../utilities.js";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Image from "react-bootstrap/Image";
import temp_profile_pic from "../../img/blank-profile-pic.jpg";
import ProfileCard from "./ProfileCard.js";
import { Provider } from "rebass";

class TutorSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutor_list: [],
      tutor_selected: undefined,
    };
  }

  getTutors = () => {

    if (this.props.subjects.length === 0) {
      // TEMPORARY CHANGE
      get("/api/tutorsBySubjects", { subjects: ["Math"], limit: 10}).then((tutors) => {
        if (this.state.tutor_list.length == 0) {
          this.setState({ tutor_list: tutors })
        }
      });
      
    } else {
      get("/api/tutorsBySubjects", { subjects: this.props.subjects, limit: 10}).then((tutors) => {
        if (this.state.tutor_list !== tutors) {
          this.setState({ tutor_list: tutors })
        }
      })
    }
  }
  componentDidMount() {
    // API request to get N mentors
    
    this.getTutors();
    
  }
  make_tutor_card = (tutor) => {
    return (
      <div style={{ padding: "1em" }}>
        <ProfileCard user={tutor} key={tutor.name} onClick={() => this.setState({ tutor_selected: tutor })} />
      </div>
    );
  };
  
  componentDidUpdate() {
      this.props.onChange(this.state.tutor_selected);
      this.getTutors();
      
  };

  render() {
    return (
      <>
        <List>{this.state.tutor_list.map((tutor) => this.make_tutor_card(tutor))}</List>
      </>
    );
  }
}

export default TutorSearchResult;
