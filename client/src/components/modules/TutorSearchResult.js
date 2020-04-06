import React, { Component } from "react";
import List from "@material-ui/core/List";
import ProfileCard from "./ProfileCard.js";

class TutorSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tutor_selected: undefined,
    };
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
  };

  render() {
    return (
      <>
        <List>{this.props.tutors.map((tutor) => this.make_tutor_card(tutor))}</List>
      </>
    );
  }
}

export default TutorSearchResult;
