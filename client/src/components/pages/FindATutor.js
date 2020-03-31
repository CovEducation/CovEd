import React, { Component } from "react";
import TutorFilter from "../modules/TutorFilter.js";
import TutorSearchResult from "../modules/TutorSearchResult.js";
import Image from "react-bootstrap/Image";
import "../../utilities.css";
import "./FindATutor.css";
import { Card } from "@material-ui/core";

const ProfileDisplayTemp = (props) => {
  return <Card style={{textAlign:"center", margin: "auto auto"}}>
    <Image src={props.tutor.profile_pic}/>
    <h4>{props.tutor.first_name + " " + props.tutor.last_name}</h4>
    <h6>{props.tutor.major}</h6>
    <p>More data</p>
    <a href="mailto:someone@gmail.com">Contact</a>
  </Card>
}

class FindATutor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: undefined,
      selected_tutor: undefined,
    };
  }

  updateSubject = (subject) => {
    if (this.state.subject !== subject) this.setState({ subject: subject });
  }
  updateTutor = (tutor) => {
    if (this.state.selected_tutor !== tutor) this.setState({selected_tutor: tutor})
  };

  render() {
    return (
      <div className="u-flex">
        <div className="FindATutor-filter">
          <TutorFilter onChange={this.updateSubject} />
        </div>
        <div className="FindATutor-results">
          <TutorSearchResult subject={this.state.subject} onChange={this.updateTutor}/>
        </div>
        <div className="FindATutor-tutor-display">
          {/* Change when the profile component is implemented*/}  
          {this.state.selected_tutor !== undefined ? 
          
          <ProfileDisplayTemp tutor={this.state.selected_tutor}/> : <div> </div>
          }
        </div>
      </div>
    );
  }
}

export default FindATutor;
