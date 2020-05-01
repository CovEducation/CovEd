import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { post, get } from "../../utilities.js";
import { auth } from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";
import "./MentorResultDisplay.css";
import { Col, Row } from "react-bootstrap";

import {CircleButton} from "./UtilityComponents";

class MentorResultDisplay extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      msg: "",
      user: undefined,
      token: undefined,
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
    auth.currentUser.getIdToken().then((token) => {
      this.setState({ token: token });
      get("/api/auth_get", { token: token }).then((resp) => {
        this.setState({
          user: resp.user,
        });
      });
    });
  }

  handleSubmit = async () => {
    let args = {
      personal_message: this.state.msg,
      mentor_uid: this.props.mentor.firebase_uid,
      student: this.state.user ? this.state.user : { email: "test@email.com" },
      token: this.state.token,
    };
    let guardianInfo = {
      guardianName: this.state.user.name,
      guardianEmail: this.state.user.email,
      token: this.state.token,
    };

    return post("/api/pingMentor", args)
      .then((resp) => {
        post("/api/pingGuardian", guardianInfo);
      })
      .then((resp) => {
        alert("Send message! Expect a reply within the next couple days");
        this.setState({
          msg: "",
        });
      })
      .catch(() => {
        alert("Please wait at least one day for the mentors to respond.");
      });
  };

  handleChange = (event) => {
    this.setState({ msg: event.target.value });
  };



  render() {
    const bull = <span>•</span>;
    return (
      <div className="MentorResultDisplayContainer">
        <Card label="hoveryellow">
          <CardContent align="center" >
            <Typography color="textSecondary" gutterBottom>
              Mentor Information
            </Typography>
            <Typography variant="h5" component="h2">
              {this.props.mentor.name}
            </Typography>
            <Typography color="textSecondary">Major: {this.props.mentor.major}</Typography>
            <Typography variant="body2" component="p" align="left">
              <br />
              <b>Subjects available for:</b>
              <br />
              {this.props.mentor.subjects.map((subject, i) => (
                <div key={subject + i}>
                  {bull} {subject}
                  <br />
                </div>
              ))}
              <br />
              <b>Bio: </b>
              <p>
              {this.props.mentor.bio}
              </p>
            </Typography>
            <Row >
              <Col>
              <i>Message</i>
              <br />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Message the mentor!"
                  multiline
                  rowsMax="10"
                  variant="outlined"
                  rows="4"
                  fullWidth="true"
                  value={this.state.msg}
                  onChange={this.handleChange}
                />

              </Col>
            </Row>
            <Row className="justify-content-center">
              <CircleButton align="center" onClick={(event) => this.handleSubmit(event)} />
            </Row>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default MentorResultDisplay;
