import React, { Component } from "react";
import { UserContext } from "../../providers/UserProvider";

import "../modules/ProfileEdit.css";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { subjects, tags, timeZones } from "../Constants";
import Select from "react-select";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { post } from "../../utilities";
import "./Profile.css";
/*
* Component to render and edit a mentor or mentee.
* Proptypes:
*  - None
*
* Implementation details:
*   - User data is taken from the UserContext.
*   - This component renders 2 different version of components based on whether
*   the user wants to edit their profile.
*   - For every field, there is a method that generates the field component and validation function.
*   - For the subjects and tags fields, we convert an entry to an
*   object {value: entry, label: entry}. This is to be compatible with the multi-select dropdown.
*   When user data is retrieved or about to be updated, we convert the object into the
*   original array.
*/
class Profile extends Component {
  static contextType = UserContext;
  constructor(props){
    super(props);
    this.state = {
      validated: false,
      edit: false,
      success: false,
      form: {}
    };
  }

  componentDidMount() {
    this.syncUserDataAndForm();
  }
/*
Helper methods for syncing user data and the form.
 */
  syncUserDataAndForm() {
    const {
      name, email, timezone, subjects, bio, tags, role
    } = this.context.user;
    let newForm = this.state.form;
    newForm.name = name;
    newForm.email = email;
    newForm.bio = bio;
    newForm.tags = tags.map(s => { return { value: s, label: s }; });
    newForm.role = role;
    newForm.subjects = subjects.map(s => { return { value: s, label: s }; });
    newForm.timezone = timezone;

    this.setState({
      form: newForm,
    });
    if (this.context.user.role === "mentor") {
      this.loadMentorData();
    } else if (this.context.user.role === "mentee") {
      this.loadMenteeData();
    }
  }

  loadMentorData() {
    let mentor = this.context.user;
    let newForm = this.state.form;
    newForm.public = mentor.public;
    newForm.major = mentor.major;
    this.setState({
      form: newForm,
    });
  }

  loadMenteeData() {
    let mentee = this.context.user;
    let newForm = this.state.form;
    newForm.guardian_phone = mentee.guardian_phone;
    newForm.guardian_email = mentee.guardian_email;
    newForm.guardian_name = mentee.guardian_name;
    this.setState({
      form: newForm,
    });
  }
/*
Form Logic
 */
  handleChange = (event) => {
    const form = this.state.form;
    form[event.target.name] = event.target.value
    this.setState({ form: form });
  }

  handleCheckChange = (event) => {
    const form = this.state.form;
    form[event.target.name] = event.target.checked;
    this.setState({ form: form });
  }

  handleSelectChange = (fieldName) => {
    return (selected) => {
      const form = this.state.form;
      form[fieldName] = selected;
      this.setState({ form: form });
    };
  }

  handleEdit = () => {
    this.setState({ edit: true, success: false });
  }

  handleCancel = () => {
    this.setState({ edit: false });
  }

  displaySuccess = () => {
    this.setState({ success: true, edit: false });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
        try {
          await this.updateUser();
          this.displaySuccess();
        } catch (error) {
          alert("Error updating user.");
        }
      }
    this.setState({ validated: true });
  }

  updateUser = async () => {
    let update = this.state.form;
    // Restoring the original format of the document.
    update.subjects = update.subjects.map(sub => sub.value);
    update.tags = update.tags.map(tag => tag.value);
    const endpoint = this.state.form.role === "mentor" ? "/api/updateMentor" : "/api/updateMentee";
    await post(endpoint, { update: update, token: this.context.user.token });
    await this.context.refreshUser();
    // Restoring the option format
    let newForm = this.state.form;
    newForm.subjects = this.state.form.subjects.map(s => {
      return { value: s, label: s };
    });
    newForm.tags = this.state.form.tags.map(t => {
      return { value: t, label: t };
    });
    this.setState({ form: newForm });
  };

/*
Form Rendering
 */

  getTimeZoneField = () => {
    return (
      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>Time Zone</Form.Label>
        {
          this.state.edit
            ?
            <Form.Control name="timezone" value={this.state.form.timezone} as="select" onChange={this.handleChange}>
              {timeZones.map((tz => {
                return (
                  <option value={tz.timezone}> {tz.timezone} </option>
                );
              }))}
            </Form.Control>
            : <Form.Control plaintext readOnly type="text" defaultValue={this.state.form.timezone} />
        }
      </Form.Group>
    );
  }

  getEmailField = () => {
    return (
    <Form.Group as={Col} md="4" controlId="validationEmail">
      <Form.Label>Email</Form.Label>
      {
        this.state.edit
          ?
          <InputGroup>
            {this.state.form.role === "mentor" ?
              (<>
                  <Form.Control
                  name="email"
                  value={this.state.form.email}
                  onChange={this.handleChange}
                  type="email"
                  placeholder="user@domain.edu"
                  aria-describedby="inputGroupPrepend"
                  pattern=".+@*.edu"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please input a valid .edu email.
                </Form.Control.Feedback>
              </>
              ) :
              (<>
                <Form.Control
                name="email"
                value={this.state.form.email}
                onChange={this.handleChange}
                type="email"
                placeholder="user@domain.com"
                aria-describedby="inputGroupPrepend"
                required
                />
                <Form.Control.Feedback type="invalid">
                Please input a valid  email.
                </Form.Control.Feedback>
              </>)
            }

          </InputGroup>
          : <Form.Control plaintext readOnly type="text" defaultValue={this.state.form.email} />
      }
    </Form.Group>
    );
  };

  getNameField = () => {
    return (
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
          : <Form.Control plaintext readOnly type="text" defaultValue={this.state.form.name} />
        }
    </Form.Group>
    );
  };

  getRoleField = () => {
    return (
      <Form.Group as={Col} md="4" controlId="formControl.role">
        <Form.Label>Role</Form.Label>
        <Form.Control plaintext readOnly type="text" defaultValue={this.state.form.role} />
      </Form.Group>
    );
  };

  getBioField = () => {
    return (<Form.Group as={Col} controlId="formBioTextArea">
      <Form.Label>Introduce Yourself!</Form.Label>
      {
        this.state.edit
          ? <Form.Control name="bio" value={this.state.form.bio} as="textarea" rows="3" onChange={this.handleChange} placeholder="About Me" />
          : <Form.Control as="textarea" readOnly defaultValue={this.state.form.bio} />
      }
    </Form.Group>);
  };

  getSubjectField = () => {
    if (!this.state.edit) {
      return (<>
        <Form.Group as={Col} md="4" controlId="formControl.subjects">
        <Form.Label>Subjects</Form.Label>
        {this.state.form.subjects && <Form.Control plaintext readOnly type="text" defaultValue={this.state.form.subjects.map(s => s.value)}/>}
        </Form.Group>
        </>);
    }
    return (
      <>
        <Form.Group as={Col} md="4" controlId="formControl.subjects">
          <Form.Label>Subjects</Form.Label>
          <Select value={this.state.form.subjects} options={subjects} isMulti onChange={this.handleSelectChange("subjects")} />
        </Form.Group>
    </>);
  };

  getOptionalTagField = () => {
    return (
      <Form.Group as={Col} controlId="exampleForm.ControlOptionalFields">
        <Form.Label>Optional Tags</Form.Label>
        {
          this.state.edit
            ? (<Select value={this.state.form.tags} options={tags} isMulti onChange={this.handleSelectChange("tags")} />)
            : this.state.form.tags && <Form.Control plaintext readOnly type="text" defaultValue={this.state.form.tags.map(t => t.value)} />
        }
      </Form.Group>
    );
  };
  /*
  Generates the following mentor fields:
  - Major
  - Public Checkbox
   */
  getMentorFields = () => {
    return (
      <>
        <Form.Row>
          <Form.Group md="4" as={Col}>
            <Form.Label>Major</Form.Label>
            {
              this.state.edit ?
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
                : <Form.Control plaintext readOnly type="text" defaultValue={this.state.form.major} />
            }
            <Form.Row>
              <Form.Check checked={this.state.form.public}
                          disabled={!this.state.edit}
                          name="public"
                          onChange={this.handleCheckChange}
                          type="checkbox" label="Listed as an Available Mentor." />
            </Form.Row>
          </Form.Group>
        </Form.Row>
      </>
    );
  };

  /*
  Generates the following fields for mentees:
  - Guardian Name
  - Guardian Email
  - Guardian Phone
   */
  getMenteeFields = () => {
    return (
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationGuadianName">
          <Form.Label>Parent's Name</Form.Label>
          {
            this.state.edit
              ?
              <>
                <Form.Control name="guardian_name" value={this.state.form.guardian_name} onChange={this.handleChange} required type="text" placeholder="Parent Name" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </>
              : <Form.Control name="guardian_name" plaintext readOnly defaultValue={this.state.form.guardian_name} />
          }
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationEmail">
          <Form.Label>Parent Email</Form.Label>
          {
            this.state.edit
              ?
              <InputGroup>
                <Form.Control
                  name="guardian_email"
                  value={this.state.form.guardian_email}
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
              : <Form.Control name="guardian_email" plaintext readOnly defaultValue={this.state.form.guardian_email}  />
          }
        </Form.Group>
      </Form.Row>
    );
  };

  render() {
    let nameField = this.getNameField();
    let emailField = this.getEmailField();
    let timezoneField = this.getTimeZoneField();
    let roleField = this.getRoleField();
    let bioField = this.getBioField();
    let subjectField = this.getSubjectField();
    let optionalTagField = this.getOptionalTagField();
    let mainFields = [nameField, emailField, timezoneField, roleField, bioField, subjectField, optionalTagField];
    let roleBasedFields = this.state.form.role === "mentor" ? this.getMentorFields() : this.getMenteeFields();
    return (
      <>
      <div className={"ProfileEdit-form"}>
        <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
          {mainFields.map((field, i) => {
            return (<Form.Row key={i}>{field}</Form.Row>)
          })}
          {roleBasedFields}
          <Form.Row>
            {this.state.edit && <Button type="submit">Submit</Button>}
            {this.state.edit && <Button variant="danger" onClick={this.handleCancel}>Cancel</Button>}
          </Form.Row>
        </Form>
        {!this.state.edit && <Button type="button" onClick={this.handleEdit}>Edit</Button>}
        {this.state.success && <Alert variant="success">Profile updated successfully!</Alert>}
      </div>
      </>);
  }
}

export default Profile;