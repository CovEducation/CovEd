import React, { Component } from "react";

import "./Profile.css";
import "../../utilities.css";
import { get } from "../../utilities";
import profile_pic from "../../img/blank-profile-pic.jpg";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

class Profile extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      ok: false,
      user: {
        name: "Ben Bitdiddle",
        timezone: "Pacific",
        photo: profile_pic,
      },
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
    get("/api/healthCheck").then((resp) => {
      this.setState({ ok: resp.ok });
    });
    // TODO: set user info
  }

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Image src={this.state.user.photo} roundedCircle />
              <h6 class="mt-2">Upload a different photo</h6>
              <Form.File id="formcheck-api-regular">
                <Form.File.Input />
              </Form.File>
            </Col>
            <Col>
              <Form>  
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">First Name</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="email" placeholder="Ben" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Last Name</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="email" placeholder="Bitdiddle" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Email</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="email" placeholder="tim@mit.edu" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">School</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" value="" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Website</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="url" value="" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Address</label>
                  
                    <div class="col-lg-6">
                      <input class="form-control" type="text" value="" placeholder="City" />
                    </div>
                    <div class="col-lg-3">
                      <input class="form-control" type="text" value="" placeholder="State" />
                    </div>
                 
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"></label>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Time Zone</label>
                  <div class="col-lg-9">
                    <select id="user_time_zone" class="form-control" size="0">
                      <option value="Hawaii">(GMT-10:00) Hawaii</option>
                      <option value="Alaska">(GMT-09:00) Alaska</option>
                      <option value="Pacific Time (US &amp; Canada)">
                        (GMT-08:00) Pacific Time (US &amp; Canada)
                      </option>
                      <option value="Arizona">(GMT-07:00) Arizona</option>
                      <option value="Mountain Time (US &amp; Canada)">
                        (GMT-07:00) Mountain Time (US &amp; Canada)
                      </option>
                      <option value="Central Time (US &amp; Canada)" selected="selected">
                        (GMT-06:00) Central Time (US &amp; Canada)
                      </option>
                      <option value="Eastern Time (US &amp; Canada)">
                        (GMT-05:00) Eastern Time (US &amp; Canada)
                      </option>
                      <option value="Indiana (East)">(GMT-05:00) Indiana (East)</option>
                    </select>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Username</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="text" placeholder="jackflorey" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Password</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="password"/>
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label">Confirm password</label>
                  <div class="col-lg-9">
                    <input class="form-control" type="password" />
                  </div>
                </div>
                <div class="form-group row">
                  <label class="col-lg-3 col-form-label form-control-label"></label>
                  <div class="col-lg-9">
                    <input type="reset" class="btn btn-secondary" value="Cancel" />
                    <input type="button" class="btn btn-primary" value="Save Changes" />
                  </div>
                </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Profile;
