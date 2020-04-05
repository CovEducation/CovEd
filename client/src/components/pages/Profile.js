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
    auth.onAuthStateChanged(async (user) => {
      try {
        const token = await user.getIdToken();
        console.log(token);

        try {
          let user = await get("/api/tutee", { token: token });
          let role = "tutee";

          // if the user is not a student 
          if (user.length == 0) {
            user = await get("/api/tutor", { token: token });
            role = "tutor";
          }

          user = user[0];
          user.role = role;
          this.setState({ user: user });

        } catch (err) {
          console.log(err);
        }

      } catch (error) {
        // TODO:handle error
        console.log(error);
      }
    });
  }



  render() {
    let profile = null;
    if (this.state.user)
      profile = this.state.user.role == "tutee" ? <TuteeProfile tutee={this.state.user} edit={false}></TuteeProfile> : <TutorProfile tutor={this.state.user} edit={false}></TutorProfile>;
    return (
      <div className='Profile-form'>
        {profile}
      </div>
    );
  }
}

export default Profile;
