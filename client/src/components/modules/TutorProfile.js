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
    super(props); // expecting user and edit
    // Initialize Default State
    this.state = {
      ok: false,
      validated: false,
      setValidated: false,
      user: {
        name: "Ben Something",
        phone: "1234567890",
        email: "bbitdiddle@gmail.com",
        subjects: [],
        location: "Pacific",
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
    const form = this.state.user;
    user[event.target.name] = event.target.value
    this.setState({ form: form });
    console.log(this.state.form)
  }

  handleSelectChange = (selected) => {
    const form = this.state.user;
    form["subjects"] = selected;
    this.setState({ user: user });
  }

  render() {
    return (
      <>
        <div className="ProfileEdit-form">
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Row>
              <div className="ProfileEdit-form-center">
                <Image src={this.props.tutor.photo} roundedCircle onChange={this.handleChange} />
              </div>
            </Form.Row>
            {this.props.edit 
              ?
              <Form.Row>
                <div className="ProfileEdit-form-center">
                  <Form.File id="formcheck-api-regular">
                    <Form.File.Input />
                  </Form.File>
                </div>
              </Form.Row>
              : <Form.Row></Form.Row>
            }
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                {this.props.edit
                  ? 
                  <>
                  <Form.Control required type="text" placeholder="" placeholder={this.state.user.name}/>
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.name} />
                }
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                {this.props.edit
                  ?
                  <InputGroup>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder={this.state.user.email}
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={this.handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please input a valid email.
                    </Form.Control.Feedback>
                  </InputGroup>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.email} />
                }
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationPhone">
                <Form.Label>Phone Number</Form.Label>
                {this.props.edit
                  ?
                  <InputGroup>
                    <Form.Control
                      name="phone"
                      type="phone"
                      placeholder={this.state.user.phone}
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={this.handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please input a valid phone number.
                    </Form.Control.Feedback>
                  </InputGroup>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.phone} />
                }
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Time Zone</Form.Label>
                {this.props.edit
                  ?
                  <Form.Control name="timezone" as="select" onChange={this.handleChange}>
                    {timeZones.map((tz => {
                      return (
                        <option value={tz.value}> {tz.timezone} </option>
                      )
                    }))}
                  </Form.Control>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.location} />
                }
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formBioTextArea">
                <Form.Label>Introduce Yourself!</Form.Label>
                {this.props.edit 
                  ? <Form.Control name="bio" placeholder={this.state.user.bio} as="textarea" rows="3" onChange={this.handleChange} />
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.bio} />
                }
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationPhone">
                <Form.Label>School</Form.Label>
                {this.props.edit 
                  ?
                  <InputGroup>
                    <Form.Control
                      name="school"
                      type="text"
                      placeholder="University"
                      aria-describedby="inputGroupPrepend"
                      required
                      onChange={this.handleChange}
                    />
                  </InputGroup>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.school} />
                }
              </Form.Group>
              <Form.Group>
                <Form.Label>Major</Form.Label>
                {this.props.edit
                  ?
                    <InputGroup>
                      <Form.Control
                        name="major"
                        type="text"
                        placeholder="Learning"
                        aria-describedby="inputGroupPrepend"
                        required
                        onChange={this.handleChange}
                      />
                    </InputGroup>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.major} />
                }
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
                <Form.Label>Subjects</Form.Label>
                {this.props.edit
                  ? <Select value={this.state.form.subjects} options={subjects} isMulti onChange={this.handleSelectChange} />
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.subjects} />
                }
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
