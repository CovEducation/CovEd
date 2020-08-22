import React, { Component } from "react";
import "./Contact.css";
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// Landing page library
import { Provider } from "rebass";
import {
  Section,
} from "react-landing-page";
import {theme} from "../Constants.js";
import fe_unite from '../../public/img/feunite.png';
import ja from '../../public/img/ja-north-ca.png';

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

            <img src={fe_unite} alt="fe-unite" height="300"/>
            <div className="container">
              <p>Fe-Unite’s mission is to deepen sisterhood by empowering each individual to stand up for women as we continue in the fight for social, political, and economic equality. We are working to unify women by encouraging everyone to care deeper and share our similar experiences. We believe in a world where individuals take on the responsibility to lift up the women next to them.</p>
            </div>
            <br />

            <img src={ja} height="150" alt="ja-north-ca"/>
            <br />
            <div className="container">
              <p>Junior Achievement helps prepare today’s students for a bright future. Junior Achievement of Northern California is proud to partner with CovEd to share our service broadly with their students.</p>
            </div>
        </Section>
        </Provider>
      </>
    );
  }
}

export default Partners;
