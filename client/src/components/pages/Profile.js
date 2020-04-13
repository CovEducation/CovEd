import React, { Component } from "react";
import TuteeProfile from "../modules/TuteeProfile.js";
import TutorProfile from "../modules/TutorProfile.js";
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
      profile = user.role === "tutee" ? <TuteeProfile tutee={user}/> : <TutorProfile tutor={user}/>;
    }
    return (
      <div className='Profile-form'>
        {profile}
      </div>
    );
  }
}

export default Profile;
