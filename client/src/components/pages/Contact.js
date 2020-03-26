import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content />
      <meta name="author" content />
      <title>Contact Us</title>
      {/*Favicon in corner*/}
      <link rel="shortcut icon" href="img/favicon.ico" />
      {/* Bootstrap Core CSS */}
      <link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />
      {/* Custom Fonts */}
      <link href="https://fonts.googleapis.com/css?family=Muli:200,300,400,700" rel="stylesheet" />
      <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css" type="text/css" />
      {/* Plugin CSS */}
      <link rel="stylesheet" href="css/animate.min.css" type="text/css" />
      {/* Custom CSS */}
      <link rel="stylesheet" href="css/creative.css" type="text/css" />
      {/* Icons */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossOrigin="anonymous" />
      {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
      {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
      {/*[if lt IE 9]>
      
      
  <![endif]*/}
      <section className="bg-secondary">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h4 className="section-heading">Contact Us</h4>
              <hr />
              There will be an actual form or google form here in the future. But for now...
              Email us at <a href="mailto:coveducation@gmail.com">coveducation@gmail.com</a>! We look forward to hearing from you.
            </div>
          </div>
        </div>
      </section>
      {/* jQuery */}
      {/* Bootstrap Core JavaScript */}
      {/* Plugin JavaScript */}
      {/* Custom Theme JavaScript */}
    </div>
    );
  }
}

export default Contact;