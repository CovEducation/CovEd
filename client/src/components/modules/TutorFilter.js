import React, { Component } from "react";
import "../../utilities.css";
import "./TutorFilter.css";
import Card from "@material-ui/core/Card";
import { Typography, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";

const TIME_ZONES = [
  "(GMT-10:00) Hawaii",
  "(GMT-08:00) Pacific Time (US & Canada)",
  "(GMT-07:00) Mountain Time (US &Canada)",
  "(GMT-06:00) Central Time (US & Canada)",
  "(GMT-05:00) Eastern Time (US & Canada)",
  "(GMT-05:00) Indiana (East)",
];

const SUBJECTS = ["Math", "Biology", "English/Writing/Literature", "Computer Science"];

class TutorFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }


  handleChange = (event) => {
    this.setState({value: event.target.value})
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <Card className="TutorFilter-container">
        <Typography variant="subtitle2" className="u-center">
          Filter Options
        </Typography>
        <FormControl>
          <InputLabel id="subject-select-label">Subject</InputLabel>
          {/*
          TODO: 
            ENABLE SELECTION OF MULTIPLE SUBJECTS.
          */}
          <Select
            labelId="subject-select-label"
            id="subject-select"
            value={this.state.value}
            onChange={this.handleChange}
          >
            {SUBJECTS.map((subject) => (
              <MenuItem value={subject} key={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Card>
    );
  }
}

export default TutorFilter;
