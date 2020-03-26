import React, { Component } from "react";
import "./styling.css";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/*Header section*/}
        <header>
          <div className="header-content">
            <div className="header-content-inner">
              <h1>CovEd<span style={{fontWeight: 200}}>ucation</span></h1>
              <p>Continuing K-12 education during the COVID-19 outbreak</p>
              {/*about button*/}
              <a href="signup" className="btn btn-primary btn-xl hvr-float-shadow">Parents and K-12 students</a>
              <a href="signup" className="btn btn-primary btn-xl hvr-float-shadow">College Students</a>
            </div>
          </div>
        </header>
        {/*about section*/}
        <section className="bg-secondary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading"> About Us</h2>
                <p>CovED is a community of undergraduates from some of the top colleges/universities across the U.S. who are interested in supporting K-12 students in light of the COVID-19 pandemic. Our goal is to create a virtual platform for pairing mentors from higher ed institutions with K-12 students affected by school closures. We hope that this platform and our resources page will help provide additional academic assistance for students and families who are facing hardships caused by the ongoing pandemic.</p>
                {/*<a href="whoweare" class="btn btn-default btn-xl hvr-float-shadow">Who We Are</a>*/}
              </div>
            </div>
          </div>
        </section>
        <section className="bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-justify">
                <h2 className="section-heading"> Problem</h2>
                <p>Many of us have been grappling with how we can meaningfully support our home communities during COVID-19 school shutdowns. As this pandemic is intensifying, many middle and high school students are faced with financial, familial, and logistical challenges that may impact their learning experience. </p>
                <h2 className="section-heading"> Our Solution</h2>
                <p>The goal of this virtual service is to provide a resource for students including academic tutoring, college preparation, and personalized mentorship. We are working to compile free, web-based educational resources for students, families, and educators, as well as partner with schools and other non-profits to improve the learning experience of K-12 students.</p>
              </div>
              <div className="col-lg-4 col-lg-offset-1 col-sm-5" align="center">
                <br />
                <img src="img/schoolicon.png" className="side-image" width="70%" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/*houses*/}
        <section className="bg-secondary" id="solution">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Interested?</h2>
              <hr />
            </div>
            <div className="col-lg-8 col-lg-offset-2 my-auto">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item" align="center">
                      <h3>Access free learning resources</h3>
                      <p className="text-muted">Check out our <a href="resources">resources</a> page! We have several links listed already.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item" align="center">
                      <h3>Be a Mentor</h3>
                      <p className="text-muted">We are looking for <b>college students</b> to help us mentor and tutor students who no longer have school. Help us help them stay on-track educationally!</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="feature-item" align="center">
                      <h3>Request a mentor</h3>
                      <p className="text-muted">We are offering <b>free mentoring</b> and <b>tutoring services</b> for <b>K-12 students</b>. Our mentors and tutors are volunteer college students from some of the top universities in the world.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="feature-item" align="center">
                      <h3>Know of a learning resource we haven't mentioned?</h3>
                      <p className="text-muted"> Definitely let us know!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div align="center">
              <a target="_blank" href="https://forms.gle/P4n36zh3pdt8nEzM8" className="btn btn-primary btn-xl hvr-float-shadow">Submit a resource</a>
              <a href="signup#students" className="btn btn-primary btn-xl hvr-float-shadow">Request Mentor</a>
              <a href="signup#college" className="btn btn-primary btn-xl hvr-float-shadow">Be a mentor</a>
            </div>
          </div>
        </section>
        {/*Contact*/}
        <section className="bg-dark" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading">Questions? Contact Us!</h2> <hr className="light" />
                <br /> <br />
                <div className="col-lg-4 col-lg-offset-2 text-left">
                  <p>Check out the <a className="whiteLink" href="faq">FAQs page</a> to see if we've already answered your question. If you don't see your question there, shoot us an email! We're excited to hear from you~</p>
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

export default Homepage;
