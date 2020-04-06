import React, { Component } from "react";
import "../../utilities.css";
import "./TutorFilter.css";
import Card from "@material-ui/core/Card";
import { Typography, InputLabel, MenuItem, FormControl } from "@material-ui/core";
import Select from "react-select";
import { subjects } from "./Constants";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";


const TIME_ZONES = [
  "(GMT-10:00) Hawaii",
  "(GMT-08:00) Pacific Time (US & Canada)",
  "(GMT-07:00) Mountain Time (US &Canada)",
  "(GMT-06:00) Central Time (US & Canada)",
  "(GMT-05:00) Eastern Time (US & Canada)",
  "(GMT-05:00) Indiana (East)",
];


class TutorFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: []
    };
  }


  handleChange = (selected) => {
    this.setState({ value: selected })
    if (selected.length == 0) {
      selected = subjects;
    }
    this.props.onChange(selected.map(sub => sub.value));
  }

  render() {
    return (
      <Container fluid>
        <Form.Group controlId="exampleForm.ControlSelect2">
          <Form.Label>Filter By Subjects</Form.Label>
          <Select width='200px' value={this.state.value} options={subjects} isMulti onChange={this.handleChange} />
        </Form.Group>
      </Container>
    );
  }
}

export default TutorFilter;
