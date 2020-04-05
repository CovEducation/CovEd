import React, { Component, useState } from "react";

import "./Register.css";
import "../../utilities.css";
import { get, post } from "../../utilities";
import profile_pic from "../../img/blank-profile-pic.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Select from "react-select";

import { subjects } from "../modules/TimeZones";
import timeZones from "../modules/TimeZones";

// auth 
import firebase, { auth } from "../../firebase-config";
import { useNavigate } from "@reach/router";

// TODO : THERE IS SO MUCH HACK CODE HELP!!!
const withNavigate = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  }
}

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
        firstname: "",
        lastname: "",
        parentFirstname: "",
        parentLastname: "",
        phone: "",
        email: "",
        parentEmail: "",
        password: "",
        confirmPassword: "",
        timezone: "GMT-5", // there must be a better way of setting the default values 
        photo: profile_pic,
        role: "student",
        adultname: "",
        adultemail: "",
        subjects: [],
        bio: "",
        agreedtowaiver: "",

        school: "",
        major: "",
      },
    };
  }

  componentDidMount() {
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // TODO: Add firebase api call here!
    this.setState({ validated: true });

    // clean up subject list 
    this.state.form.subjects_clean = this.state.form.subjects.map(sub => sub.value);

    console.log(JSON.stringify(this.state.form, null, 2));
    try {
      const user = await auth.createUserWithEmailAndPassword(this.state.form.email, this.state.form.password);
      const idToken = await auth.currentUser.getIdToken();
      let status;

      if (this.state.form.role == "tutor") {
        status = await this.postTutor(idToken);
      } else if (this.state.form.role == "student") {
        status = await this.postTutee(idToken);
      }

      console.log(status);
      this.props.navigate('/profile');
    } catch (error) {
      console.log(error);
      // TODO: DISPLAY ERROR TO USER
    }
  };


  postTutee = async (idToken) => {
    const status = await post("/api/addTutee",
      {
        token: idToken,
        name: this.state.form.firstname + ' ' + this.state.form.lastname,
        email: this.state.form.email,
        timezone: this.state.form.timezone,
        bio: this.state.form.bio,
        subjects: this.state.form.subjects_clean,
        guardian_name: this.state.form.parentFirstname + ' ' + this.state.form.parentLastname,
        guardian_email: this.state.form.parentEmail,
      });
  }


  postTutor = async (idToken) => {
    console.log(idToken);
    const status = await post("/api/addTutor",
      {
        token: idToken,
        name: this.state.form.firstname + ' ' + this.state.form.lastname,
        email: this.state.form.email,
        timezone: this.state.form.timezone,
        bio: this.state.form.bio,
        subjects: this.state.form.subjects_clean,
        school: this.state.form.school,
        major: this.state.form.major,
      });

    return status;
  }

  handleChange = (event) => {
    const form = this.state.form;
    form[event.target.name] = event.target.value
    this.setState({ form: form });
  }

  handleSelectChange = (selected) => {
    const form = this.state.form;
    form["subjects"] = selected;
    this.setState({ form: form });
  }

  renderTutorFields() {
    return (
      <>
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

      </>
    )
  }

  renderStudentFields() {
    return (
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Parent's First name</Form.Label>
          <Form.Control name="parentFirstname" value={this.state.form.parentFirstname} onChange={this.handleChange} required type="text" placeholder="First Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Parent's Last name</Form.Label>
          <Form.Control name="parentLastname" value={this.state.form.parentLastname} onChange={this.handleChange} required type="text" placeholder="Last Name" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationEmail">
          <Form.Label>Email</Form.Label>
          <InputGroup>
            <Form.Control
              name="parentEmail"
              value={this.state.form.parentEmail}
              onChange={this.handleChange}
              type="email"
              placeholder="youremail@mail.com"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input a valid email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>
    )
  }

  render() {

    let extraFields;
    if (this.state.form.role == "tutor") {
      extraFields = this.renderTutorFields();
    } else if (this.state.form.role == "student") {
      extraFields = this.renderStudentFields();
    } else {
      extraFields = null;
    }

    return (
      <>
        <div className="ProfileEdit-form">
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>First name</Form.Label>
                <Form.Control name="firstname" value={this.state.form.firstname} onChange={this.handleChange} required type="text" placeholder="First Name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationCustom02">
                <Form.Label>Last name</Form.Label>
                <Form.Control name="lastname" value={this.state.form.lastname} onChange={this.handleChange} required type="text" placeholder="Last Name" />
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
                    placeholder="youremail@mail.com"
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
                    placeholder="Password"
                    aria-describedby="inputGroupPrepend"
                    required
                    pattern="^[A-Za-z0-9\s$&+,:;=?@#|'<>.^*()%!-]{6,}$"
                  />
                  <Form.Control.Feedback type="invalid">
                    Password must be at least 6 characters long.
            </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationPassword1">
                <Form.Label>Confirm password</Form.Label>
                <InputGroup>
                  <Form.Control
                    name="confirmPassword"
                    type="password"
                    placeholder="Reenter Password"
                    aria-describedby="inputGroupPrepend"
                    required
                    value={this.state.form.confirmPassword}
                    onChange={this.handleChange}
                    pattern={this.state.form.password}
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
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Role</Form.Label>
                <Form.Control name="role" value={this.state.form.role} onChange={this.handleChange} as="select">
                  <option value="student">Student/Parent</option>
                  <option value="tutor">Tutor</option>
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
              <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
                <Form.Label>Subjects</Form.Label>
                <Select value={this.state.form.subjects} options={subjects} isMulti onChange={this.handleSelectChange} />
              </Form.Group>
            </Form.Row>

            {extraFields}

            <Form.Group>
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
              />
            </Form.Group>

            <Button value={this.state.form.agreedtowaiver} onChange={this.handleChange} type="submit">Submit</Button>
          </Form>
        </div>
      </>
    );
  }
}

export default withNavigate(Register);
