/*
To refactor:
 - This component should share the format of Profile.js, breaking down the specific fields into
 small functions.
 - It should be guardian not parent
 - We should ask for just name instead of first and last name.

 */
import React, { Component } from "react";
import "./Register.css";
import "../../utilities.css";
import { post } from "../../utilities";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import Select from "react-select";

import { Provider } from "rebass";
import { Section } from "react-landing-page";

import timeZones, { subjects, tags } from "../Constants";
import TermsDialog from "../modules/TermsOfServiceDialog";
// auth
import { auth } from "../../firebase-config";
import { useNavigate } from "@reach/router";
import { theme} from "../Constants.js";

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
        role: "student",
        adultname: "",
        adultemail: "",
        subjects: [],
        bio: "",
        agreedtowaiver: "",
        major: "",
        tags: [],
      },
    };
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
      this.state.form.tags_clean = this.state.form.tags.map(tag => tag.value);

      try {
        await auth.createUserWithEmailAndPassword(this.state.form.email, this.state.form.password);
        const idToken = await auth.currentUser.getIdToken();
        if (this.state.form.role === "mentor") {
          await this.postMentor(idToken);
        } else if (this.state.form.role === "student") {
          await this.postMentee(idToken);
        }
        this.props.navigate('/');
      } catch (error) {
        alert("Please check all the required fields.");
      }
    }
    this.setState({ validated: true });
  };


  postMentee = async (idToken) => {
    return await post("/api/addMentee",
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


  postMentor = async (idToken) => {
    return await post("/api/addMentor",
      {
        token: idToken,
        name: this.state.form.firstname + ' ' + this.state.form.lastname,
        email: this.state.form.email,
        timezone: this.state.form.timezone,
        bio: this.state.form.bio,
        subjects: this.state.form.subjects_clean,
        major: this.state.form.major,
        tags: this.state.form.tags_clean,
        public: true,
      });
  }

  handleChange = (event) => {
    const form = this.state.form;
    form[event.target.name] = event.target.value
    this.setState({ form: form });
  }

  handleSelectChange = (fieldName) => {
    return (selected) => {
      const form = this.state.form;
      form[fieldName] = selected;
      this.setState({ form: form });
    }
  }

  renderMentorFields() {
    return (
      <>
        <Form.Row>
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
        <Form.Group as={Col} md="4" controlId="validationEmailGuardian">
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
    if (this.state.form.role === "mentor") {
      extraFields = this.renderMentorFields();
    } else if (this.state.form.role === "student") {
      extraFields = this.renderStudentFields();
    } else {
      extraFields = null;
    }

    return (
      <>
        <Provider theme={theme}>
        <Section width={[1]} heading="" subhead="" p={6} mt={2} mb={7}>
        <h2><span className="light-h2">Register <br /><hr className="hr-primary"/><br /></span></h2>
        <div className="ProfileEdit-form">
          <Form noValidate validated={this.state.validated}>
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
                  <option value="mentor">Mentor</option>
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
                <Select value={this.state.form.subjects} options={subjects} isMulti onChange={this.handleSelectChange("subjects")} />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} controlId="exampleForm.ControlSelect2">
                <Form.Label>Optional tags: </Form.Label>
                <Select value={this.state.form.tags} options={tags} isMulti onChange={this.handleSelectChange("tags")} />
              </Form.Group>
            </Form.Row>
            {extraFields}
            <TermsDialog onSubmit={this.handleSubmit}/>
          </Form>
        </div>
        </Section>
        </Provider>
      </>
    );
  }
}

export default withNavigate(Register);
