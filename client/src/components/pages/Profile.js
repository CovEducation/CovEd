import React, { Component } from "react";
import TuteeProfile from "../modules/TuteeProfile.js";
import TutorProfile from "../modules/TutorProfile.js";
import "./Profile.css";
import { UserContext } from "../../providers/UserProvider";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {role: "tutee"}}; // eventually replace this once UserContext works
  }



  render() {
    // this.state.user = this.content;
    let profile = this.state.user.role == "tutee" ? <TuteeProfile edit={false}></TuteeProfile> : <TutorProfile edit={false}></TutorProfile>;
    return (
      <div className='Profile-form'>
        {profile}
      </div>
    );
  }
}

export default Profile;
