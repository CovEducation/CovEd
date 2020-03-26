import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand page-scroll" href="/">CovEd</a>
          </div>
          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="signup">Sign Up</a>
              </li>
              <li>
                <a href="resources">Resources</a>
              </li>
              <li>
                <a href="whoweare">Who We Are</a>
              </li>
              <li>
                <a href="faqs">FAQs</a>
              </li>
              <li>
                <a href="contact">Contact</a>
              </li>
            </ul>
          </div>
          {/* /.navbar-collapse */}
        </div>
        {/* /.container-fluid */}
      </nav>
    );
  }
}

export default NavBar;
