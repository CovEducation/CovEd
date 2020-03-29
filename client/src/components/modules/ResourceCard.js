import React, { Component } from "react";

import { Card } from "react-bootstrap";

class ResourceCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let link_component = null;

    console.log(this.props)
    if (this.props.link !== undefined) {
        link_component = (<>
            <Card.Link href={this.props.link}>Visit</Card.Link>
        </>)
    }
    return (
      <>
        <Card>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            {link_component}
          </Card.Body>
        </Card>
        
      </>
    );
  }
}

export default ResourceCard;
