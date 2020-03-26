import React, { Component } from "react";

class FAQs extends Component {
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
        <title>FAQs</title>
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
        <section>
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading"> Frequently Asked Questions</h2><hr />
                <hr className="light" />
              </div>
              {/*questions*/}
            </div>
            <div className="col-lg-8 col-lg-offset-2">
              <button className="accordion">Who is eligible to register?</button>
              <div className="panel">
                <p>If you are a K-12 student, you are eligible to register as a tutee for personalized mentorship and academic support from an undergraduate or postgraduate mentor. For students under 18 years old, we require that parents be present during tutoring sessions.
                </p>
              </div>
              <button className="accordion">How does tutoring work?</button>
              <div className="panel">
                <p>Due to the COVID-19 outbreak, our tutoring sessions will be conducted online via video chat. We suggest using Skype, Google Hangouts, or Zoom, although this can be decided on a one-to-one basis between the tutor and tutee.</p>
              </div>
              <button className="accordion">How many hours a week do I have to commit?</button>
              <div className="panel">
                <p>We suggest students and tutors meet between 1-2 hours a week, although this can be decided among mentorship pairs. This may depend on the student’s needs as well as the tutor’s availability.</p>
              </div>
              <button className="accordion">How do I get matched with a tutor/ tutee?</button>
              <div className="panel">
                <p>After filling out the registration form, parents/students will receive details on mentorship pairs and how to connect with his/her/their tutor. Mentorship pairs may be tailored to the student’s academic needs, timezone, or other accommodations as requested.</p>
              </div>
              <button className="accordion">When will I hear back on getting matched?</button>
              <div className="panel">
                <p>In these first few days, response times might be longer, but you should expect responses in approximately 72 hours or less.</p>
              </div>
            </div>
            <br />
            <br />
          </div>
        </section>
        {/*Contact*/}
        <section className="bg-primary" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">More Questions?</h2> <hr className="light" />
                <br /> <br />
                <div className="col-lg-4 col-lg-offset-2 text-left">
                  <p> Got more questions? If you don't see your question answered here, shoot us an email! We're excited to hear from you~</p>
                </div>
                <div className="col-lg-3">
                  <a href="contact" className="btn btn-default btn-xl hvr-float-shadow">Contact Us</a>
                </div>
              </div>
            </div>
          </div></section>
        {/* jQuery */}
        {/* Bootstrap Core JavaScript */}
        {/* Plugin JavaScript */}
        {/* Custom Theme JavaScript */}
      </div>
    );
  }
}

export default FAQs;