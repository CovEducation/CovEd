import React, { Component } from "react";

class Resources extends Component {
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
        <title>Resources</title>
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

        <section className="bg-secondary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 text-center">
                <h2 className="section-heading"> Resources</h2>
                <p> Below is a curated list of resources to support educators and
                  students, organized by grade level and subject. Know of a free resource that we haven't mentioned? Let us know <a target="_blank" href="https://forms.gle/P4n36zh3pdt8nEzM8">here</a>! Also, you'll notice that we haven't put up resources for middle school students yet. This is because we are still validating all the resource suggestions we have recieved so far and slowly working on putting them up on this website. </p>
                {/*<a href="whoweare.html" class="btn btn-default btn-xl hvr-float-shadow">Who We Are</a>*/}
              </div>
            </div>
          </div>
        </section>
        {/*ELEMENTARY SCHOOL RESOURCES*/}
        <section className="bg-secondary">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Elementary School (K-5)</h2>
              <hr />
            </div>
            <div className="col-lg-8 col-lg-offset-2 my-auto" align="center">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#general">General</a></li>
                <li><a data-toggle="tab" href="#english">English</a></li>
                <li><a data-toggle="tab" href="#mathematics">Mathematics</a></li>
                <li><a data-toggle="tab" href="#science">Science</a></li>
                {/* <li><a data-toggle="tab" href="#other">Other</a></li> */}
              </ul>
              <div className="tab-content" align="left">
                <div id="general" className="tab-pane fade in active">
                  <br />
                  <br />
                  <p>Here we have collected some resources that we hope will be helpful to continuing your/your child's education. There are also several excellent activities for children to do that are non-academic! Check out some of the websites listed below for sample schedules and other fun activities!</p>
                  <ul>
                    <li><a href="https://docs.google.com/document/d/e/2PACX-1vSZhOdEPAWjUQpqDkVAlJrFwxxZ9Sa6zGOq0CNRms6Z7DZNq-tQWS3OhuVCUbh_-P-WmksHAzbsrk9d/pub">Khan Academy</a> has provided some suggested schedules for students during the COVID-19 pandemic
                    </li><li><a href="https://classroommagazines.scholastic.com/support/learnathome.html">Scholastic Learn at Home</a>
                    </li><li><a href="https://calgarylibrary.ca/read-learn-and-explore/digital-library/">Digital Library</a>
                    </li><li><a href="https://growingbookbybook.com/online-literacy-resources/?fbclid=IwAR0GrnG2BIau3R9X8SxutkivGs7Gl8TjE4H_g9bpKjvWcuIizzVu_S-rCcg">Online Read Alouds</a>
                    </li><li><a href="https://docs.google.com/document/u/0/d/1SvIdgTx9djKO6SjyvPDsoGlkgE3iExmi3qh2KRRku_w/mobilebasic">Virtual Field Trips</a>
                    </li><li><a href="https://othergoose.com/free/">Free Homeschooling Curriculum</a>
                    </li><li><a href="https://everythingjustso.org/blog/free-teaching-resources-homebound-students">Resources for Homebound Learning</a>
                    </li><li><a href="https://drive.google.com/drive/u/0/folders/1GWN2ZX088a6saFouXA7EmfcKjWh7opVZ">Special Education Resources</a>
                    </li><li><a href="https://drive.google.com/drive/mobile/folders/11Gn85SkOv1yGaZrzNOWvFJ_cIshdUqgY?fbclid=IwAR3cX3NNwr9Uuu6j7hIBKv6dM1quUcjYkl4Gpqu5V9Cn-rZk8aCG38G0HQg">Work Packets</a>
                    </li><li><a href="https://www.understood.org/en/school-learning/stuck-at-home-activities?_ul=1*12uhv40*domain_userid*YW1wLURSb1NUbVpCSjZMVnpNZ0l6QXNnUHc.">Learning Activities</a>
                    </li></ul>
                </div>
                <div id="english" className="tab-pane fade">
                  <br />
                  <br />
                  <h3>Reading</h3>
                  <ul>
                    <li><a href="https://play.squigglepark.com/dreamscape/index.html?v=1">Dreamscape</a>
                    </li><li><a href="https://readtheory.org/auth/login">ReadTheory: Reading Comprehension</a>
                    </li><li><a href="https://www.readworks.org/">ReadWorks: Reading Comprehension</a>
                    </li><li><a href="Freereadingprogram.com">Free Reading Program</a>
                    </li><li><a href="http://www.tumblebooklibrary.com/auto_login.aspx?u=calgarypl&p=sd19​">TumbleBooks: Puzzles, Read Alongs, Storybooks</a>
                    </li><li><a href="https://currents4kids.com">Current Events For Kids</a>
                    </li><li><a href="https://lightsailed.com/">Literacy Platform: 6000+ books</a>
                    </li></ul>
                  <h3>Word Work &amp; Spelling</h3>
                  <ul>
                    <li><a href="http://www.abcya.com/dolch_sight_word_bingo.htm">Word Bingo</a>
                    </li><li><a href="http://www.abcya.com/synonyms_antonyms.htm">Synonyms &amp; Antonyms</a>
                    </li><li><a href="http://www.abcya.com/spelling_practice.htm">Spelling Bees</a>
                    </li><li><a href="http://www.abcya.com/must_pop_words.htm">Pop Words</a>
                    </li><li><a href="https://knoword.org/">Knoword: Word Game</a>
                    </li><li><a href="https://www.abcya.com/">Abcya: Educational Games</a>
                    </li></ul>
                </div>
                <div id="mathematics" className="tab-pane fade">
                  <br />
                  <br />
                  <p>There are a lot of places to learn math and get practice! And there are several ways to learn too!</p>
                  <br />
                  <b>Learn Math with videos and exercises:</b>
                  <ul>
                    <li><a href="https://www.khanacademy.org/math">Khan Academy</a> has videos and exercises for math students of all ages (Preschool-College level)!
                    </li><li><a href="https://www.3plearning.com/resources/">3plearning</a> has printable e-books
                    </li><li><a href="https://www.zearn.org/">Zearn</a>
                    </li><li><a href="https://xtramath.org/#/home/index">XtraMath</a> has videos and exercises
                    </li></ul>
                  <b> Learn Math with games:</b>
                  <ul>
                    <li> <a href="https://www.3plearning.com/resources/">3plearning</a>
                    </li><li> <a href="https://mathpickle.com/">MathPickle</a>
                    </li><li> <a href="https://shelleygrayteaching.com/salute-a-great-math-fact-card-game/?ck_subscriber_id=252667730">Math Card Game</a> for Addition,Subtraction,Multiplication, &amp; Division
                    </li><li> <a href="https://shelleygrayteaching.com/doubles-race-to-100/?ck_subscriber_id=252667730">Game for counting to 100</a>
                    </li><li> <a href="https://shelleygrayteaching.com/target-number/?ck_subscriber_id=252667730">Math Card Game II</a> for basic math operations
                    </li><li> <a href="https://www.abcya.com/grades/">Abcya</a>
                    </li></ul>
                  <b> Learn Math with puzzles:</b>
                  <ul>
                    <li><a href="https://www.brainbashers.com/30seconds.asp">Daily 30 second puzzle</a>
                    </li><li> <a href="https://solveme.edc.org/">Solve Me Puzzles</a>
                    </li></ul>
                  <b> Addition: </b>
                  <ul>
                    <li><a href="http://www.math4children.com/Grade4/games/classgames/bravo/Addition/"> Math4Children </a>
                    </li><li><a href="http://www.kidsmathtv.com/free/subtraction-4-from-4-digit-numbers-game-for-3rd-grade-millionaire-game/">Subtraction Game</a>
                    </li><li><a href="http://www.topmarks.co.uk/Flash.aspx?a=activity11">TopMarks Activity</a> (Requires Adobe Flash Player)
                    </li></ul>
                  <b> Place Value (i.e. ones place, tens place, hundreds place, etc.): </b>
                  <ul>
                    <li><a href="www.starrmatica.com/standalone/starrMaticaplaveValueMysteryNumbers.swf">Mystery Numbers</a>
                    </li><li><a href="www.quia.com/mc/279741.html">Expanded Form Matching</a>
                    </li><li><a href="www.sheppardsoftware.com/mathgames/placevalue/scooterQuest.html"> ScooterQuest</a> (Requires Adobe Flash Player)
                    </li><li><a href="www.funbrain.com/tens/index.html">Place Value Puzzler</a>
                    </li><li><a href="www.learnalberta.ca/content/me3us/flash/lessonLauncher.html?lesson=lessons/03/m3_03_00_x.swf">Form-O-Rama</a> (Requires Adobe Flash Player)
                    </li></ul>
                  <b> Multiplication: </b>
                  <ul>
                    <li><a href="www.multiplication.com/games/all-games">Free Multiplication Math Games</a>
                    </li><li><a href="www.fun4thebrain.com/mult.html">Fun4theBrain</a>
                    </li><li><a href="www.mathplayground.com/index_multiplication_division.html">Multiplication and Division Games</a>
                    </li><li><a href="http://www.mathplayground.com/ASB_Canoe_Penguins.html">2 digit x 1 digit multiplication</a>
                    </li><li><a href="http://www.math-play.com/one-digit-by-two-digit-multiplication-game.html">more 2 digit x 1 digit multiplication</a>
                    </li></ul>
                </div>
                <div id="science" className="tab-pane fade">
                  <br />
                  <br />
                  <p>Resources updated soon! Check again in a few days!</p>
                  <b> Weather, Temperature, Thermometers </b>
                  <ul>
                    <li><a href="http://www.enchantedlearning.com/science/temperature">Enchanted Learning</a>: Worksheets and Activities
                    </li><li><a href="http://easyscienceforkids.com/all-about-temperature/">Easy science for kids</a>: Fun Facts and Thermometer song
                    </li></ul>
                  <b> Telling Time</b>
                  <ul>
                    <li><a href="https://www.youtube.com/watch?v=HrxZWNu72WI">Video on Telling Time</a>
                    </li><li><a href="https://www.youtube.com/watch?v=IBBQXBhSNUs​">Another video on telling time</a>
                    </li></ul>
                  <b> Keyboard Typing Skills </b>
                  <ul>
                    <li><a href="http://www.bbc.co.uk/guides/z3c6tfr">DanceMat Typing</a>
                    </li><li><a href="https://tvokids.com/school-age/games/keyboard-climber">Keyboard Climber</a>
                    </li><li><a href="https://www.typingclub.com/">Typing Club</a>
                    </li></ul>
                </div>
                {/* <div id="other" class="tab-pane fade">
              <p> </p>
            </div> */}
              </div>
            </div>
          </div>
        </section>
        {/*MIDDLE SCHOOL RESOURCES*/}
        {/*<section class="bg-secondary">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Middle School (Grades 6-8)</h2>
          <hr>
        </div>
      <div class="col-lg-8 col-lg-offset-2 my-auto" align=center>
          <ul class="nav nav-tabs">
            <li class="active"><a data-toggle="tab" href="#students">English</a></li>
            <li><a data-toggle="tab" href="#mathematics">Mathematics</a></li>
            <li><a data-toggle="tab" href="#science">Science</a></li>
            <li><a data-toggle="tab" href="#general">General</a></li>
          </ul>
          <div class="tab-content">
            <div id="mathematics" class="tab-pane fade in active">
              <br>
              <br>
              <p>No resources yet</p>
            </div>
            <div id="science" class="tab-pane fade">
              <br>
              <br>
              <p>
              No resources yet
              </p>
            </div>
            <div id="general" class="tab-pane fade">
              <br>
              <br>
              <h3>Educators</h3>
              <p>Check out our resources page!</p>
                <a href="resources.html" class="btn btn-primary btn-xl hvr-float-shadow">Resources</a>
            </div>
          </div>
      </div>
      </div>
    </section>*/}
        {/*HIGH SCHOOL RESOURCES*/}
        <section className="bg-secondary">
          <div className="container">
            <div className="section-heading text-center">
              <h2>Highschool (Grades 9-12)</h2>
              <hr />
            </div>
            <div className="col-lg-10 col-lg-offset-1 my-auto" align="center">
              <ul className="nav nav-tabs">
                <li className="active"><a data-toggle="tab" href="#hsgeneral">General</a></li>
                <li><a data-toggle="tab" href="#hscollege">College Process</a></li>
                <li><a data-toggle="tab" href="#hsenglish">English</a></li>
                <li><a data-toggle="tab" href="#hshistory">History</a></li>
                <li><a data-toggle="tab" href="#hsmath">Math</a></li>
                <li><a data-toggle="tab" href="#hsscience">Science</a></li>
                <li><a data-toggle="tab" href="#hsCS">Computer Science</a></li>
                <li><a data-toggle="tab" href="#hslanguage">Languages</a></li>
              </ul>
              <div className="tab-content">
                <div id="hsgeneral" className="tab-pane fade in active" align="left">
                  <br />
                  <br />
                  <p>Admittedly, it's kind of hard to motivate yourself to keep learning especially when there are no assignments! That's why we have collected these resources for you all. Many of these links include cool and engaging ways to learn things. And of course, here we've only listed common subjects taken by high schoolers, but your learning is not limited to these things.</p>
                  <p>
                    For example, now is a great time to learn how to cook! Learn how to play a new musical instrument. Start DJing (free software available online). Pick up a new sport (many of which you can play in your back yard). Learn a new language!
                  </p>
                  <p> Here's a list of stuff you can do to fill your days that are also educational in their own way.
                  </p><ul>
                    <li> <b>Read books</b>. Check out websites like <a href="www.goodreads.com" target="_blank">Goodreads</a> where you can keep track of what you read and look at lists of what other people recommend! There is something for everybody.
                    </li><li> <b>Write a novel, Make a blog, Just Write!!</b> There are several resources for this: <a href="https://medium.com/creators" target="_blank">Medium</a>, <a href="https://blogger.com" target="_blank">Google's Blogger</a>
                    </li><li> <b>Make a website for yourself </b> Look into <a href="https://pages.github.com/" target="_blank">gh-pages</a> and <a href="https://jekyllrb.com/" target="_blank">Jekyll</a>, <a href="https://wordpress.com/" target="_blank">WordPress</a>, and <a href="https://www.wix.com/" target="_blank">Wix</a>.
                    </li><li><b> Learn how to cook </b>
                    </li><li><b> Pick up a new language </b>. A great way to do this is to do a few quick grammar and vocab lessons for the language then consume media in the language. For example, if you want to learn French, listen to French music! Watch French movies and tv-shows!
                      <p />
                    </li></ul></div>
                <div id="hscollege" className="tab-pane fade">
                  <p>Resources updated soon! Check again in a few days!</p>
                </div>
                <div id="hsenglish" className="tab-pane fade">
                  <p>Resources updated soon! Check again in a few days!</p>
                </div>
                <div id="hshistory" className="tab-pane fade">
                  <p>Resources updated soon! Check again in a few days!</p>
                </div>
                <div id="hsmath" className="tab-pane fade">
                  <p>Resources updated soon! Check again in a few days!</p>
                </div>
                <div id="hsscience" className="tab-pane fade">
                  <p>Resources updated soon! Check again in a few days!</p>
                </div>
                <div id="hsCS" className="tab-pane fade">
                  <p>Resources updated soon! Check again in a few days!</p>
                </div>
                <div id="hslanguage" className="tab-pane fade">
                  <p>Resources updated soon! Check again in a few days!</p>
                </div>
              </div>
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

export default Resources;