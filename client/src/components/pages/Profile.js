import React, { Component } from "react";
import TuteeProfile from "../modules/TuteeProfile.js";
import TutorProfile from "../modules/TutorProfile.js";
import "./Profile.css";
import { UserContext } from "../../providers/UserProvider";
import { get } from "../../utilities";
import firebase, { auth } from "../../firebase-config";


class Profile extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = { user: undefined }; // eventually replace this once UserContext works
  }

  componentDidMount() {
  }

  render() {
    let profile = null;
    let { user } = this.props;
    if (user) {
      profile = user.role == "tutee" ? <TuteeProfile tutee={user}></TuteeProfile> : <TutorProfile tutor={user}></TutorProfile>;
    }
    return (
      <div className='Profile-form'>
        {profile}
      </div>
    );
  }
}

export default Profile;
