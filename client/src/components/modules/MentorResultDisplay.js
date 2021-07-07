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
import { updateUser } from "../../api.js";

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
      student: this.state.user,
      token: this.state.token,
    };
    let guardianInfo = {
      guardianName: this.state.user.name,
      guardianEmail: this.state.user.email,
      mentorName: this.props.mentor.name,
      token: this.state.token,
    };

    return post("/api/pingMentor", args)
      .then(async (resp) => {
        post("/api/pingGuardian", guardianInfo);
        await this.changeMentorState(this.props.mentor);
      })
      .then((resp) => {
        alert("Sent message! You should receive a confirmation email with the subject CovEd Mentor Request. Expect a reply within the next couple days.  \n\nWhile you are waiting for a mentor, feel free to use our online forum, Piazza, in which you can ask for help 24/7. \n\nInstructions can be found both on our Resources page and here: tinyurl.com/menteeguideline. A video tutorial can be found here: tinyurl.com/piazzavid. Our piazza page is also available for use after you are matched with a mentor!");
        this.setState({
          msg: "",
        });
      })
      .catch(() => {
        alert("Your message was not sent. This may be because you have already requested a mentor in the past 24 hours. Please wait at least 48 hours for the mentors to respond. \n\nWhile you are waiting, feel free to use our online forum, Piazza, in which you can ask for help 24/7.\n\n Instructions can be found both on our Resources page and here: tinyurl.com/menteeguideline. A video tutorial can be found here: tinyurl.com/piazzavid. Our piazza page is also available for use after you are matched with a mentor!");
      });
  };

  handleChange = (event) => {
    this.setState({ msg: event.target.value });
  };

  changeMentorState = async (mentor) => {
    // Marks mentors as unavailable after they have been requested.
    let updatedMentor = mentor;
    updatedMentor.public = false;
    return await updateUser(user, this.context.user.token);
  }

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
              <i>Request Mentor</i>
              <br />
              You are allowed to request a maximum of 1 mentor per student.
              <br />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Add a personal message!"
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
