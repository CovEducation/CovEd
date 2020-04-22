import React, { Component } from "react";
import List from "@material-ui/core/List";
import ProfileCard from "./ProfileCard.js";

class MentorSearchResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mentor_selected: undefined,
    };
  }
  
  make_mentor_card = (mentor, i) => {
    return (
      <div style={{ padding: "1em" }} key={mentor.name + mentor.bio + i}>
        <ProfileCard user={mentor}  onClick={() => this.setState({ mentor_selected: mentor })} />
      </div>
    );
  };
  
  componentDidUpdate() {
      this.props.onChange(this.state.mentor_selected);
  };

  render() {
    return (
      <>
        <List style={{maxHeight: 700, overflow: 'auto'}}>{this.props.mentors.map((mentor, i) => this.make_mentor_card(mentor, i))}</List>
      </>
    );
  }
}

export default MentorSearchResult;
