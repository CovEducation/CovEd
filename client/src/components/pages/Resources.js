import React, { Component } from "react";

import { Tabs, Tab } from "react-bootstrap";


class Resources extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <h2>home</h2>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <h2>profile</h2>
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <h2>contact</h2>
        </Tab>
      </Tabs>
    );
  }
}

export default Resources;
