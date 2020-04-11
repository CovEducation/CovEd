import React, { Component, useState } from "react";

import "./ProfileEdit.css";
import "../../utilities.css";
import { post } from "../../utilities";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import timeZones from "./Constants";

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

class TutorProfile extends Component {
  constructor(props) {
    super(props); // expecting user and edit
    // Initialize Default State
    this.state = {
      ok: false,
      validated: false,
      setValidated: false,
      edit: false,
      user: {
        name: "Ben Something",
        phone: "1234567890",
        email: "bbitdiddle@gmail.com",
        subjects: [],
        location: "Pacific",
        major: "CS",
        bio: "I am a cool kid."
      },
    };
  }

  componentDidMount() {
    if (this.props.tutor !== undefined) {
      this.setState({
        user: this.props.tutor,
      })
    }
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      post("/api/updateTutor", this.state.user)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
    }
    // TODO: Add firebase api call here!
    this.setState({ validated: true });
  };

  handleEdit = () => {
    this.setState({ edit: true})
  }

  handleCancel = () => {
    this.setState({ edit: false});
  }

  handleChange = (event) => {
    const user = this.state.user;
    user[event.target.name] = event.target.value
    this.setState({ user: user });
    console.log(this.state.user)
  }

  handleSelectChange = (selected) => {
    const user = this.state.user;
    user["subjects"] = selected;
    this.setState({ user: user });
  }

  render() {
    console.log(this.props.tutor);
    return (
      <>
        <div className="ProfileEdit-form">
          <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
            <Form.Row>
              <Form.Group as={Col} md="4" controlId="validationCustom01">
                <Form.Label>Name</Form.Label>
                {this.state.edit
                  ?
                  <>
                    <Form.Control required type="text" placeholder={this.props.tutor.name} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.name} />
                }
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                {this.state.edit
                  ?
                  <InputGroup>
                    <Form.Control
                      name="email"
                      type="email"
                      placeholder={this.props.tutor.email}
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
                {this.state.edit
                  ?
                  <InputGroup>
                    <Form.Control
                      name="phone"
                      type="phone"
                      placeholder={this.props.tutor.phone}
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
                {this.state.edit
                  ?
                  <Form.Control name="timezone" as="select" onChange={this.handleChange}>
                    {timeZones.map((tz => {
                      return (
                        <option value={tz.value}> {tz.timezone} </option>
                      )
                    }))}
                  </Form.Control>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.timezone} />
                }
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formBioTextArea">
                <Form.Label>Introduce Yourself!</Form.Label>
                {this.state.edit
                  ? <Form.Control name="bio" placeholder={this.props.tutor.bio} as="textarea" rows="3" onChange={this.handleChange} />
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.bio} />
                }
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group>
                <Form.Label>Major</Form.Label>
                {this.state.edit
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
                {this.state.edit
                  ? <Select value={this.props.tutor.subjects} options={subjects} isMulti onChange={this.handleSelectChange} />
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutor.subjects} />
                }
              </Form.Group>
            </Form.Row>
            <Form.Row>
            {this.state.edit && <Button type="submit">Submit</Button>}
            {this.state.edit && <Button variant="danger" onClick={this.handleCancel}>Cancel</Button>}
            </Form.Row>
          </Form>
          {!this.state.edit && <Button type="button" onClick={this.handleEdit}>Edit</Button>}
        </div>
      </>
    );
  }
}

export default TutorProfile;
