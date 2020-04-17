import React, { Component } from "react";
import MenteeProfile from "../modules/MenteeProfile.js";
import MentorProfile from "../modules/MentorProfile.js";
import "./Profile.css";
import { UserContext } from "../../providers/UserProvider";


class Profile extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = { user: undefined }; // eventually replace this once UserContext works
  }

  render() {
    let profile = null;
    let { user } = this.props;
    if (user) {
      profile = user.role === "mentee" ? <MenteeProfile mentee={user}/> : <MentorProfile mentor={user}/>;
    }
    return (
      <div className='Profile-form'>
        {profile}
      </div>
    );
  }
}

export default Profile;
