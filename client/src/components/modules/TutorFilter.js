import React, { Component } from "react";
import "../../utilities.css";
import "./TutorFilter.css";
import Card from "@material-ui/core/Card";
import { Typography, InputLabel, Select, MenuItem, FormControl } from "@material-ui/core";

const TIME_ZONES = [
  "(GMT-10:00) Hawaii",
  "(GMT-08:00) Pacific Time (US &amp; Canada)",
  "(GMT-07:00) Mountain Time (US &amp; Canada)",
  "(GMT-06:00) Central Time (US &amp; Canada)",
  "(GMT-05:00) Eastern Time (US &amp; Canada)",
  "(GMT-05:00) Indiana (East)",
];

const SUBJECTS = ["Math", "Science", "English", "Computer Science"];

class TutorFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subjects: [],
      time_zone: "Select a Time Zone",
    };
  }

  
  handleSubjectSelection = (event) => {
    console.log("Handling subject selection")
    if (SUBJECTS.includes(event.target.value)) {
      this.setState({subjects: [event.target.value]});
      this.props.onChange([event.target.value]);
    }

  }

  render() {
    return (
      <Card className="TutorFilter-container">
        <Typography variant="subtitle2" className="u-center">
          Filter Options
        </Typography>
        <FormControl>
          <InputLabel id="timezone-select-label">Time Zone</InputLabel>
          <Select
            labelId="timezone-customized-select-label"
            id="timezone-customized-select"
            value={this.state.time_zone}
            onChange={(event) => this.setState({ time_zone: event.target.value })}
          >
            {TIME_ZONES.map((time_zone) => (
              <MenuItem value={time_zone} key={"time-zone" + time_zone}>{time_zone}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="subject-select-label">Subject</InputLabel>
          {/*
          TODO: 
            ENABLE SELECTION OF MULTIPLE SUBJECTS.
          */}
          <Select
            labelId="subject-select-label"
            id="subject-select"
            value={this.state.subjects}
            onChange={this.handleSubjectSelection}
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
