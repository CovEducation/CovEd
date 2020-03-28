import React, { Component } from "react";

import "../../utilities.css";
import "./Homepage.css";
import { get } from "../../utilities";

import Button from 'react-bootstrap/Button';

class Profile extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {ok: false};
  }

  componentDidMount() {
    // remember -- api calls go here!
    get("/api/healthCheck").then((resp) => {
      this.setState({ok: resp.ok});
    });
  }

  render() {
    return (
      <>
      <Button>Click!</Button>
      </>
    );
  }
}

export default Profile;