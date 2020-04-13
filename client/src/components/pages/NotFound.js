import React, { Component } from "react";
import error_img from "../../public/img/404.png";
import Image from "react-bootstrap/Image";
import "./NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className='NotFound-error'>
        <Image src={error_img} style={{width: '50vw'}}/>
      </div>
    );
  }
}

export default NotFound;
