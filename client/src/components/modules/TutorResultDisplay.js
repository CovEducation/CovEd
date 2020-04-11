import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { post, get } from "../../utilities.js";
import { auth } from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";
import "./TutorResultDisplay.css";
import {Col, Row} from 'react-bootstrap';

class TutorResultDisplay extends Component {
  static contextType = UserContext;
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {
      msg: "",
      user: undefined
    };
  }

  componentDidMount() {
    // remember -- api calls go here!
    auth.currentUser.getIdToken().then((token) => {
      get("/api/auth_get", { token: token }).then((resp) => {
        this.setState({
          user: resp.user,
        })
      })
    })

  }

  handleSubmit = (event) => {
    event.preventDefault();
    let args = {
      personal_message: this.state.msg,
      tutor_uid: this.props.tutor.firebase_uid,
      student: this.state.user ? this.state.user : { email: "test@email.com" },
    }
    post("/api/pingTutor", args).then((resp) => {
      alert("Sent message!")
      this.setState({
        msg: "",
      })
    });
  };
  handleChange = (event) => {
    this.setState({ msg: event.target.value });
  }

  render() {
    const bull = <span>•</span>;
    return (
      <>
        <Card classes={{ label:"hoveryellow"}}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tutor Information
            </Typography>
            <Typography variant="h5" component="h2">
              {this.props.tutor.name}
            </Typography>
            <Typography color="textSecondary">
              Major: {this.props.tutor.major}
            </Typography>
            <Typography variant="body2" component="p">
            <br />
              {/* {this.props.tutor.bio ? <h4>About: {this.props.tutor.bio}</h4> : <></> }   */}
            Subjects available for:
            <br />
              {this.props.tutor.subjects.map((subject) => <>{bull} {subject} <br /></>)}
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
              endIcon={<Icon></Icon>}
              onClick={this.handleSubmit}
            > Send</Button>
            <br />
            </Col>
            </Row>
          </CardActions>
        </Card>
      </>
    );
  }
}


export default TutorResultDisplay;
