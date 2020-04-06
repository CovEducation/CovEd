import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../utilities.css";

import { Col, Row, Button, Container } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
// Landing page library
import { Provider } from "rebass";
import {
  Section,
} from "react-landing-page";

// auth 
import firebase, { auth } from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "@reach/router"
// TODO : THERE IS SO MUCH HACK CODE HELP!!!
const withNavigate = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  }
}

const theme = {
  colors: {
    blue: '#00568C',
    yellow: '#F2BE32',
    white: '#ffffff',
    darkblue: '#003c61',
  },
  fonts: {
    sans: 'Muli, sans-serif',
  },
  fontWeights: {
    light: 300,
    normal: 600,
    bold: 700,
  },
  fontSizes: [
    12, 16, 24, 36, 48, 72
  ],
  space: [
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    140,
    256,
  ]
}


class SignIn extends Component {
  // set context
  static contextType = UserContext;

  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = { ok: false, user: undefined, error: undefined, msg: undefined };
    this.state.form = { email: undefined, password: undefined };
    this.signin = this.signin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async signin(event) {
    event.preventDefault();
    try {
      const user = await auth.signInWithEmailAndPassword(this.state.form.email, this.state.form.password);
      this.props.navigate('/profile');
    } catch (error) {
      console.log(error);
      this.setState({ error: error });
    }
  }

  handleChange(event) {
    const form = this.state.form;
    form[event.target.name] = event.target.value
    this.setState({ form: form });
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
          <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1, 2, 2, 2]} mt={7}>
          <Container fluid="sm">
              <Row>
                <Col md={{span: 6, offset: 3}}>
                  <h1>Sign In</h1>
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control name="email" value={this.state.form.email} onChange={this.handleChange} type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control name="password" value={this.state.form.password} onChange={this.handleChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button  className="loginButton" block onClick={this.signin}>
                      Sign In
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Section>
        </Provider>
      </>
    );
  }
}

export default withNavigate(SignIn);
