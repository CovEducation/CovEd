import React, { Component } from "react";
import "./Contact.css";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
// Landing page library
import { Provider } from "rebass";
import {
  Section,
} from "react-landing-page";
import {theme} from "../Constants.js";

class Partners extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
        <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1,2,2,2]} mt={1} mb={7}>
            <h3><span className="light-h3">Our Partners <br /></span></h3>
            <br />
            <img class="left" src="https://scontent-sjc3-1.xx.fbcdn.net/v/t1.0-9/95747753_100891501620676_4218728267831574528_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=uptPXjNGPgQAX_I8huq&_nc_ht=scontent-sjc3-1.xx&oh=f439db69be43011229eade002daa9ff1&oe=5F368F10" alt="fe-unite" width="300"></img>
            <div className="container">
              <p>Fe-Unite’s mission is to deepen sisterhood by empowering each individual to stand up for women as we continue in the fight for social, political, and economic equality. We are working to unify women by encouraging everyone to care deeper and share our similar experiences. We believe in a world where individuals take on the responsibility to lift up the women next to them.</p>
            </div>
        </Section>
        </Provider>
      </>
    );
  }
}

export default Partners;
