import React, { Component } from "react";

import "./ProfileEdit.css";
import "../../utilities.css";
import { get } from "../../utilities";
import profile_pic from "../../img/blank-profile-pic.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Col from "react-bootstrap/Col";
import timeZones from "./Constants";

import Image from "react-bootstrap/Image";

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
        guardian_phone: "098-765-4321",
        photo: profile_pic,
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
    }
    // TODO: Add firebase api call here!
    this.setState({ validated: true });
  };

  handleEdit = (event) => {
    this.setState({edit: true});
  };

  render() {
    console.log(this.state.edit)
    return (
      <div>
      <Form noValidate validated={this.state.validated} onSubmit={this.handleSubmit}>
        {/* <Form.Row>
        <div className="ProfileEdit-form-center">
          <Image src={this.props.tutee.photo} roundedCircle />
        </div>
      </Form.Row> */}
        {this.state.edit
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
            {this.state.edit
              ?
              <>
                <Form.Control required type="text" placeholder="" />
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
                  placeholder="jackflorey@mit.edu"
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
          <Form.Group as={Col} md="4" controlId="validationPhone">
            <Form.Label>Phone Number</Form.Label>
            {this.state.edit
              ?
              <>
                <Form.Control required type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="123-456-7890" />
                <Form.Control.Feedback type="invalid">Please enter a valid phone number.</Form.Control.Feedback>
              </>
              : <Form.Control plaintext readOnly type="text" defaultValue={this.props.tutee.phone} />
            }
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Time Zone</Form.Label>
            {this.state.edit
              ?
              <Form.Control as="select" value="Pacific Time (US &amp; Canada)">
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
        {this.state.edit && <Button type="submit">Submit</Button>}
      </Form>
      {!this.state.edit && <Button type="button" onClick={this.handleEdit}>Edit</Button>}
      </div>
    );
  }
}

export default TuteeProfile;
