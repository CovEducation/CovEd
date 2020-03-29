import React, { Component } from "react";
import TutorFilter from "../modules/TutorFilter.js";
import "../../utilities.css";
import "./FindATutor.css";

class FindATutor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="FindATutor-filter">
          <TutorFilter/>
      </div>
    );
  }
}

export default FindATutor;
