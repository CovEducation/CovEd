import React, { Component } from "react";
import TuteeProfile from "../modules/TuteeProfile.js";
import TutorProfile from "../modules/TutorProfile.js";
import "./Profile.css";
import { UserContext } from "../../providers/UserProvider";
import { get } from "../../utilities";
import firebase, {auth} from "../../firebase-config";


class Profile extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {user: {role: "tutor"}}; // eventually replace this once UserContext works
  }

  async componentDidMount() {
    try {
      const token = await auth.currentUser.getIdToken();
      console.log(token);
      const user = await get("/api/tutor", {token: token});
      console.log(user);
      user.role = "tutor";
      this.setState({user: user[0]});
    } catch (error) {
      // TODO:handle error
      console.log(error);
    }
  }



  render() {
    let profile = this.state.user.role == "tutee" ? <TuteeProfile edit={false}></TuteeProfile> : <TutorProfile tutor={this.state.user} edit={false}></TutorProfile>;
    return (
      <div className='Profile-form'>
        { profile }
      </div>
    );
  }
}

export default Profile;
