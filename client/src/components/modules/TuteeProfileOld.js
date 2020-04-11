import React, { Component } from "react";

import "./ProfileEdit.css";
import "../../utilities.css";
import { get } from "../../utilities";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import timeZones from "./Constants";

class TuteeProfile extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      ok: false,
      validated: false,
      edit: false,
      user: {
        name: "Ben Bitdiddle",
        phone: "123-456-7890",
        email: "bbitdiddle@gmail.com",
        location: "Pacific",
        grade_level: "6",
        guardian_name: "Mom",
        guardian_phone: "098-765-4321"
      },
    };
  }

  componentDidMount() {
    console.log("ok")
    // remember -- api calls go here!
    get("/api/healthCheck").then((resp) => {
      this.setState({ ok: resp.ok });
    });
    // TODO: set user info
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
    this.setState({edit: true});
  };

  handleCancel = () => {
    this.setState({edit: false});
  }

  render() {
    console.log(this.state.edit)
    return (
      <div>
      <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name</Form.Label>
            {this.state.edit
              ?
              <>
                <Form.Control required type="text" placeholder="John Doe" defaultValue={this.props.tutee.name}/>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </>
              : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutee.name} />
            }
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationEmail">
            <Form.Label>Email</Form.Label>
            {this.state.edit
              ?
              <InputGroup>
                <Form.Control
                  type="email"
                  placeholder="johndoe@gmail.com"
                  defaultValue={this.props.tutee.email}
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please input a valid email.
              </Form.Control.Feedback>
              </InputGroup>
              : <Form.Control plaintext readOnly type="email" defaultValue={this.props.tutee.email} />
            }
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Time Zone</Form.Label>
            {this.state.edit
              ?
              <Form.Control as="select" defaultValue={this.props.tutee.timezone}>
                {timeZones.map((tz => {
                  return (
                    <option value={tz.value}> {tz.timezone} </option>
                  )
                }))}
              </Form.Control>
              : <Form.Control plaintext readOnly defaultValue={this.props.tutee.timezone} />
            }
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formBioTextArea">
                  <Form.Label>Introduce Yourself!</Form.Label>
                  <Form.Control name="bio"  as="textarea" rows="3" onChange={this.handleChange} />
                </Form.Group>
          </Form.Row>
        <Form.Row>
        {this.state.edit && <Button type="submit">Submit</Button>}
        {this.state.edit && <Button variant="danger" onClick={this.handleCancel}>Cancel</Button>}
        </Form.Row>
      </Form>
      {!this.state.edit && <Button type="button" onClick={this.handleEdit}>Edit</Button>}
      </div>
    );
  }
}

export default TuteeProfile;
