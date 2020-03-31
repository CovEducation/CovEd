import React, { Component } from "react";
import TuteeProfile from "../modules/TuteeProfile.js";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='Profile-form'>
        <TuteeProfile></TuteeProfile>
      </div>
    );
  }
}

export default Profile;
