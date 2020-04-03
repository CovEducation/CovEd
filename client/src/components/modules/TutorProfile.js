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
import Select from "react-select";
import timeZones from "./TimeZones";

// TODO: put these constants in another place.
const subjects = [
  {
    value: 'math',
    label: 'Math'
  },
  {
    value: 'physics',
    label: 'Physics'
  },
  {
    value: 'english',
    label: 'English'
  },
  {
    value: 'biology',
    label: 'Biology'
  }
]

class ProfileEdit extends Component {
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
        subjects: [],
        timezone: "Pacific",
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
        <div className="ProfileEdit-form">
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Row>
              <div className="ProfileEdit-form-center">
                <Image src={this.state.form.photo} roundedCircle onChange={this.handleChange} />
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
                <Form.Control name="firstname" value={this.state.form.firstname} required type="text" placeholder="" onChange={this.handleChange} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastname" value={this.state.form.lastname} required type="text" placeholder="" onChange={this.handleChange} />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="email"
                    value={this.state.form.email}
                    disabled
                    type="email"
                    placeholder="jackflorey@mit.edu"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please input a valid email.
            </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationPhone">
                <Form.Label>Phone Number</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="phone"
                    value={this.state.form.phone}
                    type="phone"
                    placeholder="1234567890"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={this.handleChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please input a valid phone number.
            </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
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
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formBioTextArea">
                <Form.Label>Introduce Yourself!</Form.Label>
                <Form.Control name="bio" value={this.state.form.bio} as="textarea" rows="3" onChange={this.handleChange} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationPhone">
                <Form.Label>School</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="school"
                    value={this.state.form.school}
                    type="text"
                    placeholder="University"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Major</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="major"
                    value={this.state.form.major}
                    type="text"
                    placeholder="Learning"
                    aria-describedby="inputGroupPrepend"
                    required
                    onChange={this.handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
                <Form.Label>Subjects</Form.Label>
                <Select value={this.state.form.subjects} options={subjects} isMulti onChange={this.handleSelectChange} />
              </Form.Group>
            </Form.Row>
            <Button type="submit">Submit</Button>
          </Form>
        </div>
      </>
    );
  }
}

export default ProfileEdit;
