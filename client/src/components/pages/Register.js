import React, { Component, useState } from "react";

import "./Register.css";
import "../../utilities.css";
import { get } from "../../utilities";
import profile_pic from "../../img/blank-profile-pic.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import timeZones from "../modules/TimeZones"

class Register extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      ok: false,
      validated: false,
      setValidated: false,
      edit: true, // eventually get rid of this since it will be in props
      form: {
        firstname: "Ben",
        lastname: "Something",
        phone: "1234567890",
        email: "bbitdiddle@gmail.com",
        timezone: "",
        school: "UT",
        major: "CS",
        bio: "I am a cool kid.",
        photo: profile_pic,
      },
    };
  }

  componentDidMount() {
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // TODO: Add firebase api call here!
    this.setState({ validated: true });
  };

  handleChange = (event) => {
    const form = this.state.form;
    console.log(event.target.name)
    form[event.target.name] = event.target.value
    this.setState({ form: form });
    console.log(this.state.form)
  }

  handleSelectChange = (selected) => {
    const form = this.state.form;
    form["subjects"] = selected;
    this.setState({ form: form });
  }

  render() {
    return (
      <>
        {JSON.stringify(this.state.form, null, 2)}
        <div className="ProfileEdit-form">
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Row>
              <div className="Register-form-center">
                <Image src={this.state.form.photo} roundedCircle />
              </div>
            </Form.Row>
            <Form.Row>
              <div className="Register-form-center">
                <Form.File id="formcheck-api-regular">
                  <Form.File.Input />
                </Form.File>
              </div>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstname" value={this.state.form.firstname} onChange={this.handleChange} required type="text" placeholder="" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastname" value={this.state.form.lastname} onChange={this.handleChange} required type="text" placeholder="" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="email"
                    value={this.state.form.email}
                    onChange={this.handleChange}
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
                    name="password"
                    value={this.state.form.password}
                    onChange={this.handleChange}
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
                <Form.Control name="timezone" value={this.state.form.timezone} as="select" onChange={this.handleChange}>
                  {timeZones.map((tz => {
                    return (
                      <option value={tz.value}> {tz.timezone} </option>
                    )
                  }))}
                </Form.Control>
              </Form.Group>

              <Form.Group  as={Col} controlId="formGridState">
                <Form.Label>Role</Form.Label>
                <Form.Control name="usertype" value={this.state.form.usertype} onChange={this.handleChange} as="select">
                  <option value="tutor">Tutor</option>
                  <option value="student">Student/Parent</option>
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
        </div>
      </>
    );
  }
}

export default Register;
