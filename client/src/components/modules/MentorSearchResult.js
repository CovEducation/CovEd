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
  
  make_mentor_card = (mentor) => {
    return (
      <div style={{ padding: "1em" }}>
        <ProfileCard user={mentor} key={mentor.name} onClick={() => this.setState({ mentor_selected: mentor })} />
      </div>
    );
  };
  
  componentDidUpdate() {
      this.props.onChange(this.state.mentor_selected);
  };

  render() {
    return (
      <>
        <List style={{maxHeight: 700, overflow: 'auto'}}>{this.props.mentors.map((mentor) => this.make_mentor_card(mentor))}</List>
      </>
    );
  }
}

export default MentorSearchResult;
