import React, { Component } from "react";

import Contact from "./Contact.js";
import WhoWeAre from "./WhoWeAre.js";
import Partners from "./Partners.js"

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <WhoWeAre />
        <Contact />
        <Partners />
      </div>
    );
  }
}

export default About;
