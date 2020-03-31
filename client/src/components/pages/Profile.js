import React, { Component } from "react";
import TuteeProfile from "../modules/TuteeProfile.js";

class Profile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='profile'>
        <TuteeProfile></TuteeProfile>
      </div>
    );
  }
}

export default Profile;
