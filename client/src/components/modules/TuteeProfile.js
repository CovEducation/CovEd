import React, { Component, useState } from "react";

import "./ProfileEdit.css";
import "../../utilities.css";
import { get } from "../../utilities";
import profile_pic from "../../img/blank-profile-pic.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function FormExample() {
  const [validated, setValidated] = useState(false);
  const [userPhoto] = useState(profile_pic);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // TODO: Add firebase api call here!
    setValidated(true);
  };
}

class TuteeProfile extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      ok: false,
      user: {
        name: "Ben Bitdiddle",
        timezone: "Pacific",
        photo: profile_pic,
      },
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
    get("/api/healthCheck").then((resp) => {
      this.setState({ ok: resp.ok });
    });
    // TODO: set user info
  }

  render() {
    return (
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Row>
        <div className="ProfileEdit-form-center">
          <Image src={userPhoto} roundedCircle />
        </div>
      </Form.Row>
      <Form.Row>
        <div className="ProfileEdit-form-center">
          <Form.File id="formcheck-api-regular">
            <Form.File.Input />
          </Form.File>
        </div>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control required type="text" placeholder="" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control required type="text" placeholder="" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              type="email"
              placeholder="jackflorey@mit.edu"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationPassword">
          <Form.Label>Password</Form.Label>
          <InputGroup>
            <Form.Control
              type="password"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationPassword">
          <Form.Label>Confirm password</Form.Label>
          <InputGroup>
            <Form.Control
              type="password"
              placeholder=""
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Passwords do not match.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Time Zone</Form.Label>
          <Form.Control as="select" value="Pacific Time (US &amp; Canada)">
            <option value="Hawaii">(GMT-10:00) Hawaii</option>
            <option value="Alaska">(GMT-09:00) Alaska</option>
            <option value="Pacific Time (US &amp; Canada)" selected="selected">
              (GMT-08:00) Pacific Time (US &amp; Canada)
            </option>
            <option value="Arizona">(GMT-07:00) Arizona</option>
            <option value="Mountain Time (US &amp; Canada)">
              (GMT-07:00) Mountain Time (US &amp; Canada)
            </option>
            <option value="Central Time (US &amp; Canada)">
              (GMT-06:00) Central Time (US &amp; Canada)
            </option>
            <option value="Eastern Time (US &amp; Canada)">
              (GMT-05:00) Eastern Time (US &amp; Canada)
            </option>
            <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Role</Form.Label>
          <Form.Control as="select">
            <option>Tutor</option>
            <option>Student/Parent</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Group>
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
    );
  }
}

export default TuteeProfile;
