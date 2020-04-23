import React, { Component, createContext } from "react";
import { auth } from "../firebase-config";
import { get } from "../utilities.js";
// https://reactjs.org/docs/context.html
export const UserContext = createContext({
  user: undefined,
  refreshUser: () => {},
});

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.refreshUser = this.refreshUser.bind(this);
    this.state = {
      user: undefined,
      refreshUser: this.refreshUser,
    };
  }

  async refreshUser() {
    try {
      const token = this.state.user.token;
      let user = await get("/api/mentee", { token: token });
      let role = "mentee";

      // if the user is not a student
      if (user.length == 0) {
        user = await get("/api/mentor", { token: token });
        role = "mentor";
      }

      user = user[0];
      user.role = role;
      user.token = token;
      this.setState({ user: user });
      return user;
    } catch (err) {
      this.setState({user: undefined});
    }
  }

  componentDidMount() {
    auth.onAuthStateChanged(async (fbUser) => {
      if (fbUser) {
        try {
          const token = await fbUser.getIdToken();
          const verified = fbUser.emailVerified;
          let user = await get("/api/mentee", { token: token });
          let role = "mentee";

          // if the user is not a student
          if (user.length == 0) {
            user = await get("/api/mentor", { token: token });
            role = "mentor";
          }

          user = user[0];
          if (!!user) {
            // this may happen if the user has not been created in mongodb
            user.verified = verified;
            user.role = role;
            user.token = token;
          } else {
            user = { token: token };
          }

          this.setState({ user: user });
        } catch (error) {
          // TODO:handle error
          console.log(error);
        }
      } else {
        this.setState({ user: undefined });
      }
    });
  }

  render() {
    return <UserContext.Provider value={this.state}>{this.props.children}</UserContext.Provider>;
  }
}

export default UserProvider;
