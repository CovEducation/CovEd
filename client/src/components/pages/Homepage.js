import React, { Component } from "react";

import "../../utilities.css";
import "./Homepage.css";
import { get } from "../../utilities";


class Homepage extends Component {
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
      <h1>Coved Backend Operational:{this.state.ok ? <h3> yes </h3> : <h3> no </h3>}</h1> 
      </>
    );
  }
}

export default Homepage;
