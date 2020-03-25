import React, { Component } from "react";

class Signup extends Component {
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
        <title>SignUp</title>
        {/*Favicon in corner*/}
        <link rel="shortcut icon" href="../../../img/favicon.ico" />
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
        <nav id="mainNav" className="navbar navbar-default2 navbar-fixed-top">
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
              <a className="navbar-brand page-scroll" href="index.html">CovEd</a>
            </div>
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                <li className="navbar-light">
                  <a href="#page-top">Sign Up</a>
                </li>
                <li>
                  <a href="resources.html">Resources</a>
                </li>
                <li>
                  <a href="whoweare.html">Who We Are</a>
                </li>
                <li>
                  <a href="faq.html">FAQs</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
          {/* /.container-fluid */}
        </nav>
        <section className="bg-secondary">
          <div className="col-lg-8 col-lg-offset-2 my-auto" align="center">
            <ul className="nav nav-tabs">
              <li className="active"><a data-toggle="tab" href="#students">Parents &amp; K-12 Students</a></li>
              <li><a data-toggle="tab" href="#college">College &amp; University Students</a></li>
              <li><a data-toggle="tab" href="#educators">Educators</a></li>
            </ul>
            <div className="tab-content">
              <div id="students" className="tab-pane fade in active">
                <br />
                <br />
                <h3>Parents and K-12 students</h3>
                <p>For parents and students, we have an <a href="resources.html">entire</a>page dedicated to free online resources. If you are a K-12 student, parent, or educator and would like to sign up for academic support, please register here</p>
                <p><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeQbfc4hukSn67JZIRbXQDBXFM3iWPuHl4k51LIGFsUU64_Gw/viewform?embedded=true" width={640} height={3150} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe></p>
              </div>
              <div id="college" className="tab-pane fade">
                <br />
                <br />
                <h3>College &amp; University Students</h3>
                <p>If you are an undergraduate or postgraduate and would would like to become a mentor, please fill out this form.</p>
                <p>
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfO86GfkJgN0ffYHT2_mJ8J5c7fNOAMb3ldnOKmXwAOIHe5XQ/viewform?embedded=true" width={640} height={3400} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
                </p>
              </div>
              <div id="educators" className="tab-pane fade">
                <br />
                <br />
                <h3>Educators</h3>
                <p>Check out our resources page!</p>
                <a href="resources.html" className="btn btn-primary btn-xl hvr-float-shadow">Resources</a>
                <br />
                <br />
                <p>Know of a few good resources yourself? Please fill out this form </p><p>
                  <br />
                  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeHiyfHzJlMifwfjSsnIREKDoOvqdM4MU_BWJx4DJzHpf-obA/viewform?embedded=true" width={640} height={1400} frameBorder={0} marginHeight={0} marginWidth={0}>Loading…</iframe>
                </p></div>
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

export default Signup;