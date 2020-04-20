import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { post, get } from "../../utilities.js";
import { auth } from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";
import "./MentorResultDisplay.css";
import { Col, Row } from "react-bootstrap";

/*
This component renders mentor info and allows a mentee / guardian to
send a mentor request.
Proptypes:
  mentor - the mentor user object to display
*/
class MentorResultDisplay extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    this.state = {
      msg: "",
      token: undefined,
    };
  }

  componentDidMount() {
    auth.currentUser.getIdToken().then((token) => {
      this.setState({ token: token });
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const user = this.context.user;
    let args = {
      personal_message: this.state.msg,
      mentor_uid: this.props.mentor.firebase_uid,
      student_email: user.email,
      token: this.state.token,
    };

    let guardianInfo = {
      guardianName: user.guardian_name,
      guardianEmail:user.guardian_email,
      token: this.state.token,
    }
    post("/api/pingMentor", args)
      .then((resp) => {
        post("/api/pingGuardian", guardianInfo);
      })
      .then((resp) => {
        this.setState({
          msg: "",
        });
        alert("Send message! Expect a reply within the next couple days");
      })
      .catch(() => {
        alert("Please wait at least one day for the mentors to respond.");
      });
  };

  handleChange = (event) => {
    this.setState({ msg: event.target.value });
  };

  render() {
    const bullet = <span>•</span>;
    return (
      <>
        <Card classes={{ label: "hoveryellow" }}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Mentor Information
            </Typography>
            <Typography variant="h5" component="h2">
              {this.props.mentor.name}
            </Typography>
            <Typography color="textSecondary">Major: {this.props.mentor.major}</Typography>
            <Typography variant="body2" component="p">
              <br />
              Subjects available for:
              <br />
              {this.props.mentor.subjects.map((subject) => (
                <>
                  {bullet} {subject} <br />
                </>
              ))}
            </Typography>
          </CardContent>
          <CardActions>
            <Row className="justify-content-sm-center">
              <Col className="text-center">
                <TextField
                  id="outlined-multiline-flexible"
                  label="Send a message!!"
                  multiline
                  rowsMax="10"
                  margin="normal"
                  variant="outlined"
                  rows="4"
                  fullWidth="true"
                  value={this.state.msg}
                  onChange={this.handleChange}
                />
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<Icon />}
                  onClick={this.handleSubmit}
                >
                  {" "}
                  Send
                </Button>
                <br />
              </Col>
            </Row>
          </CardActions>
        </Card>
      </>
    );
  }
}

export default MentorResultDisplay;
