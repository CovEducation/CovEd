import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../utilities.css";
import "./Homepage.css";
import { theme } from "../Constants.js";

import { Col, Row, Button, Container } from 'react-bootstrap'
import Form from "react-bootstrap/Form";
import SimpleSnackbar from "../modules/SimpleSnackbar.js";

// Landing page library
import { Provider } from "rebass";
import {
  Section,
} from "react-landing-page";

// auth
import { auth } from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";
import { useNavigate } from "@reach/router"
// TODO : THERE IS SO MUCH HACK CODE HELP!!!
const withNavigate = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  }
}

class SignIn extends Component {
  // set context
  static contextType = UserContext;

  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {  error: undefined };
    this.state.form = { email: undefined, password: undefined };
    this.signin = this.signin.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  async signin(event) {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(this.state.form.email, this.state.form.password);
      this.props.navigate('/');
    } catch (error) {
      this.setState({error: (<SimpleSnackbar message="Wrong email / password."/>)});
    }
  }

  handleChange(event) {
    const form = this.state.form;
    form[event.target.name] = event.target.value
    this.setState({ form: form });
    this.setState({error : undefined});
  }

  render() {
    return (
      <>
        <Provider theme={theme}>
          <Section fontSize={[2]} bg="white" heading="" subhead="" p={[1, 2, 2, 2]} mt={7} mb={7}>
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
                    {this.state.error}

                    <a href="/reset-password-request">Forgot Password?</a>
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
