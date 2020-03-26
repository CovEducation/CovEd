import React, { Component } from "react";

class WhoWeAre extends Component {
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
        <title>Who We Are</title>
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
        <section className="bg-primary" id="officers">
          {/*Exec*/}
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <h2 className="sub-header">Management</h2>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <td><b>Evelyn Wong</b></td>
                      <td>Harvard, 2021</td>
                      <td>Neuroscience and Spanish Literature</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>Sarah Dohadwala</b></td>
                      <td>MIT, 2021</td>
                      <td>Biological Engineering</td>
                    </tr>
                    <tr>
                      <td><b>Dheekshita Kumar</b></td>
                      <td>MIT, 2020</td>
                      <td>Mechanical Engineering <br />Electrical Eng. &amp; Computer Science</td>
                    </tr>
                    <tr>
                      <td><b>Tam Nguyen</b></td>
                      <td>MIT, 2021</td>
                      <td>Biological Engineering</td>
                    </tr>
                    <tr>
                      <td><b>Zoya Surani</b></td>
                      <td>Harvard, 2022</td>
                      <td>Neuroscience</td>
                    </tr>
                    <tr>
                      <td><b>Daniela Velez</b></td>
                      <td>MIT, 2023</td>
                      <td>Computer Science</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/*GRTs*/}
          <div className="container">
            <div className="row">
              <div className="col-md-4 text-center">
                <h2 className="sub-header">Web Dev &amp; Technology</h2>
              </div>
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <td><b>Dheekshita Kumar</b></td>
                      <td>MIT, 2020</td>
                      <td>Mechanical Engineering <br />Electrical Eng. &amp; Computer Science</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><b>Johan Cervantes</b></td>
                      <td>MIT, 2021</td>
                      <td>Computer Science</td>
                    </tr>
                    <tr>
                      <td><b>Benjamin Levy</b></td>
                      <td>Harvard, 2023</td>
                      <td>Computer Science and Classics</td>
                    </tr>
                    <tr>
                      <td><b>Sanjay Yepuri</b></td>
                      <td>UT Austin, 2021</td>
                      <td>Computer Science and Math</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* <div class="container">
         	<div class="row">
                 <div class="col-md-4 text-center">
         					<h2 class="sub-header">Outreach</h2>
                         </div>
                     	<div class="table-responsive">
                             <table class="table">
                             <thead>
                               <tr>
                                   <td><b>Daniela Velez</b></td>
                                   <td>MIT, 2023</td>
                                   <td>Computer Science</td>
                               </tr>
                               </thead>
                               <tbody>
                                 <tr>
                                     <td><b>Evelyn Wong</b></td>
                                     <td>Harvard, 2021</td>
                                     <td>Neuroscience</td>
                                 </tr>
                             </tbody>
                             </table>
                 		</div>
                 	</div>
          </div>
          <div class="container">
            <div class="row">
                   <div class="col-md-4 text-center">
                    <h2 class="sub-header">Education</h2>
                           </div>
                        <div class="table-responsive">
                               <table class="table">
                               <thead>
                                 <tr>
                                     <td><b>Sarah Dohadwala</b></td>
                                     <td>MIT, 2021</td>
                                     <td>Biological Engineering</td>
                                 </tr>
                                 </thead>
                                 <tbody>
                                   <tr>
                                       <td><b>Evelyn Wong</b></td>
                                       <td>Harvard, 2021</td>
                                       <td>Neuroscience</td>
                                   </tr>
                               </tbody>
                               </table>
                      </div>
                    </div>
            </div> */}
          {/*Education*/}
        </section>
        {/*Contact*/}
        <section className="bg-dark" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">Questions? Contact Us!</h2> <hr className="light" />
                <br /> <br />
                <div className="col-lg-4 col-lg-offset-2 text-left">
                  <p>Check out the <a className="whiteLink" href="faq.html">FAQs page</a> to see if we've already answered your question. If you don't see your question there, shoot us an email! We're excited to hear from you~</p>
                </div>
                <div className="col-lg-3">
                  <a href="contact.html" className="btn btn-default btn-xl hvr-float-shadow">Contact Us</a>
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

export default WhoWeAre;