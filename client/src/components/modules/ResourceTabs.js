import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { Tabs, Tab } from "react-bootstrap";
import ResourceCard from "./ResourceCard.js";
import "./ResourceTabs.css";

class ResourceTabs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.resources.length === 0) {
      return <div>Resources here</div>;
    }
    console.log(this.props);

    let tab_content = this.props.resources.map((resource_kind) => {
      return (
        <Tab eventKey={resource_kind.title} title={resource_kind.title}>
          <div className="ResourceTabs-description">
            <Typography variant="body1">{resource_kind.description}</Typography>
          </div>
          {resource_kind.resources.map((resource) => {
            return (
              <ResourceCard
                title={resource.title}
                description={resource.description}
                link={resource.link}
              />
            );
          })}
        </Tab>
      );
    });

    return (
      <Tabs defaultActiveKey={this.props.resources[0].title} id="uncontrolled-tab-example">
        {tab_content}
      </Tabs>
    );
  }
}

export default ResourceTabs;
