import React, { Component, useState } from "react";

import "../../utilities.css";
import { post } from "../../utilities";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import Alert from "react-bootstrap/Alert";

import { subjects, tags } from "./Constants";
import timeZones from "./Constants"
import { UserContext } from "../../providers/UserProvider";

class TuteeProfile extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      ok: false,
      validated: false,
      setValidated: false,
      edit: false,
      success: false,
      form: {
        name: props.tutee.name.trim() || "",
        parentName: props.tutee.guardian_name.trim() || "",
        email: props.tutee.email || "",
        parentEmail: props.tutee.guardian_email || "",
        timezone: props.tutee.timezone || "GMT-5", // there must be a better way of setting the default values 
        role: "student",
        subjects: props.tutee.subjects.map(s => {return {value: s, label: s}}) || [],
        bio: props.tutee.bio || "",
        tags: [],
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
    } else {
      // clean up subject list 
      this.state.form.subjects_clean = this.state.form.subjects.map(sub => sub.value);
  
      try {
        this.updateTutee();
        this.displaySuccess();
      } catch (error) {
        // TODO: DISPLAY ERROR TO USER
      }
    }
    this.setState({ validated: true });
  };

  updateTutee = async () => {
    const update = 
    {
      name: this.state.form.name,
      email: this.state.form.email,
      timezone: this.state.form.timezone,
      bio: this.state.form.bio,
      subjects: this.state.form.subjects_clean,
      guardian_name: this.state.form.parentName,
      guardian_email: this.state.form.parentEmail,
    };
    const status = await post("/api/updateTutee", {update: update, token: this.props.tutee.token});
    this.context.refreshUser();
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

  handleEdit = () => {
    this.setState({ edit: true, success: false});
  }

  handleCancel = () => {
    this.setState({ edit: false});
  }

  displaySuccess = () => {
    this.setState({success: true, edit: false})
  }

  renderStudentFields() {
    return (
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Parent's Name</Form.Label>
          {
            this.state.edit
            ? 
            <>
              <Form.Control name="parentName" value={this.state.form.parentName} onChange={this.handleChange} required type="text" placeholder="Parent Name" />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </>
            : <Form.Control name="parentName" plaintext readOnly defaultValue={this.props.tutee.guardian_name} />
          }
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationEmail">
          <Form.Label>Email</Form.Label>
          {
            this.state.edit
            ?
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
            : <Form.Control name="parentEmail" plaintext readOnly defaultValue={this.props.tutee.guardian_email} />
          }

        </Form.Group>
      </Form.Row>
    )
  }

  render() {

    let extraFields = this.renderStudentFields();

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
                    <Form.Control 
                      name="name" 
                      value={this.state.form.name} 
                      required
                      type="text" 
                      placeholder="Your Name" 
                      onChange={this.handleChange} />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutee.name} />
                }
              </Form.Group>
              <Form.Group as={Col} md="4" controlId="validationEmail">
                <Form.Label>Email</Form.Label>
                {
                  this.state.edit
                  ?
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
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutee.email} />
                }
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Time Zone</Form.Label>
                {
                  this.state.edit
                  ?
                  <Form.Control name="timezone" value={this.state.form.timezone} as="select" onChange={this.handleChange}>
                  {timeZones.map((tz => {
                    return (
                      <option value={tz.value}> {tz.timezone} </option>
                    )
                  }))}
                </Form.Control>
                  : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutee.timezone} />
                }
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group>
                <Form.Label>Role</Form.Label>
                <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutee.role} />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formBioTextArea">
                <Form.Label>Introduce Yourself!</Form.Label>
                {
                  this.state.edit 
                  ? <Form.Control name="bio" value={this.state.form.bio} as="textarea" rows="3" onChange={this.handleChange} placeholder="About Me" />
                  : <Form.Control as="textarea" readOnly defaultValue={this.props.tutee.bio} />
                }
              </Form.Group>
            </Form.Row>

            {this.state.edit
              ?
              <>
                <Form.Row>
                  <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
                    <Form.Label>Subjects</Form.Label>
                    <Select value={this.state.form.subjects} options={subjects} isMulti onChange={this.handleSelectChange} />
                  </Form.Group>
                </Form.Row>
              </>
              : 
              <>
                <Form.Label>Subjects</Form.Label>
                <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutee.subjects} />
              </>
            }

            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
                <Form.Label>Optional tags: </Form.Label>
                {
                  this.state.edit
                    ? <Select value={this.state.form.tags} options={tags} isMulti onChange={this.handleSelectChange} />
                    : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutee.tags} />
                }
              </Form.Group>
            </Form.Row>
            {extraFields}

            <Form.Row>
              {this.state.edit && <Button type="submit">Submit</Button>}
              {this.state.edit && <Button variant="danger" onClick={this.handleCancel}>Cancel</Button>}
            </Form.Row>
          </Form>
          {!this.state.edit && <Button type="button" onClick={this.handleEdit}>Edit</Button>}
          {this.state.success && <Alert variant="success">Profile updated successfully!</Alert>}
        </div>
      </>
    );
  }
}

export default TuteeProfile;
