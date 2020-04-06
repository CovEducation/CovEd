import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import { Typography } from "@material-ui/core";
import { post, get } from "../../utilities.js";
import {auth} from "../../firebase-config";
import { UserContext } from "../../providers/UserProvider";

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
        get("/api/auth_get", {token: token}).then((resp) => {
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
        student: this.state.user ? this.state.user : {email: "test@email.com"},
      }
      post("/api/pingTutor", args).then((resp) =>{ 
          alert("Sent message!")
          this.setState({
              msg: "",
          })
    });
  };
  handleChange = (event) =>  {
      this.setState({msg: event.target.value});
  }

  render() {
    return (
        <Card style={{ textAlign: "center", margin: "auto auto" }}>
        <Typography>
            <h4>Name:</h4> 
            <h4>{this.props.tutor.name}</h4>
            <h4>Major:</h4>
            <h4>{this.props.tutor.major}</h4>
            <h4>Subjects available for: </h4>
            <h4> {this.props.tutor.subjects.map((subject)=> <h6>{subject}</h6>)}</h4>
            {this.props.tutor.bio ? <h4>About: {this.props.tutor.bio}</h4> : (<div></div>)}
            
        </Typography>
        <div>
        <input
          type="text"
          placeholder="Send a message to the tutor!"
          value={this.state.msg}
          onChange={this.handleChange}
        />
        <button
          type="submit"
          className="NewPostInput-button u-pointer"
          value="Submit"
          onClick={this.handleSubmit}
        >
          Send!
        </button>
        </div>
      </Card>
    );
  }
}

export default TutorResultDisplay;
