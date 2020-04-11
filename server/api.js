/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/
// For routing
const express = require("express");

// Email module
const nodemailer = require("nodemailer");

// import models so we can interact with the database
const Tutor = require("./models/tutor");
const Tutee = require("./models/tutee");

// connecting to email service
const sendEmail = require("./sendEmail.js")

require("dotenv").config()
const email_user = process.env.EMAIL_USER;
const email_pass = process.env.EMAIL_PASS;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email_user,
    pass: email_pass,
  },
});

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

const firebaseMiddleware = require("./auth");

/*
  GET Endpoints
*/


router.get("/tutor", firebaseMiddleware, (req, res) => {
  Tutor.find({
    firebase_uid: req.user.user_id,
  })
    .then((tutor) => {
      res.send(tutor);
    })
    .catch((err) => {
      console.log(err);
      res.send({});
    });
});

router.get("/tutee", firebaseMiddleware, (req, res) => {
  Tutee.find({
    firebase_uid: req.user.user_id, 
  })
    .then((tutor) => {
      res.send(tutor);
    })
    .catch(()=> {
      console.log(err)
      // FIXME : We need to at send an error status to the client
      res.send({})
    })
})

router.get("/getTutors", firebaseMiddleware, (req, res) => {
  // We want tutors which have any of the subjects, matched by how many
  // Speed up by using MongoDB aggregate (unwind, filter by subject, then group)
  // if the database is large enough that it warrants the time.

  // Getting all tutors, sorting by how many subjects they have in common, then by 
  // how recently the tutors were contacted by other students.
  const subjects_wanted = req.query.subjects;


  if (subjects_wanted.length == 0) {
    res.sendStatus(500);
  }
  const limit = req.query.limit === undefined ? 10 : req.query.limit;
  Tutor.find({public: true})
    .then((tutors) => {
      for (let i = 0; i < tutors.length; i++) {
        let overlapping_subjects = tutors[i].subjects.filter(
          (subject) => subjects_wanted.includes(subject) && subject != ""
        );
        let overlapping_tags = tutors[i].tags.filter((tag) => 
          (subjects_wanted.includes(tag) && tag != "")
        )
        tutors[i]["i"] = overlapping_subjects.length + overlapping_tags.length;
      }
      // We need the tags to match.
      tutors = tutors.filter((tutor) => tutor.i > 0);
      tutors = tutors.slice(0, limit);
      // People that haven't been requested recently go first.
      let sorted_tutors = tutors.sort((a, b) => {
        // We want to sort by how many tags match
        let matches_a = a.i;
        let matches_b = b.i;

        if (matches_a == matches_b) { 
          // then by how recently they were requested by someone else (reverse)
          return (a.last_request < b.last_request) ? -1: 1
        } else {
          return matches_a > matches_b ? 1 : -1;
        }
      }); 
      // final cleanup
      for (let i = 0; i < sorted_tutors.length; i++) {
        delete sorted_tutors[i]["i"];
        sorted_tutors[i] = removeContactInfo(sorted_tutors[i]);
      }
      res.send(sorted_tutors);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

/* 
  POST Endpoints
*/

router.post("/addTutee", firebaseMiddleware, (req, res) => {
  let newTutee = new Tutee({
    firebase_uid: req.user.user_id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    timezone: req.body.timezone,
    bio: req.body.bio,
    subjects: req.body.subjects,
    guardian_name: req.body.guardian_name,
    guardian_phone: req.body.guardian_phone,
    guardian_email: req.body.guardian_email,
    college_prep: req.body.college_prep,
    grade_level: req.body.grade_level,
    has_reliable_internet: req.body.has_reliable_internet,
    guardian_present: req.body.guardian_present,
    tutors: [],
  });

  newTutee.save().then((tutee) => res.send(tutee));
});

router.post("/addTutor", firebaseMiddleware, (req, res) => {
  let newTutor = new Tutor({
    firebase_uid: req.user.user_id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    timezone: req.body.timezone,
    bio: req.body.bio,
    subjects: req.body.subjects,
    school: req.body.school,
    major: req.body.major,
    class_year: req.body.class_year,
    college_prep: req.body.college_prep,
    languages_spoken: req.body.languages_spoken,
    grade_levels_to_tutors: req.body.grade_levels_to_tutors,
    tutees: [],
    last_request: new Date().getTime(), // Newer tutors will show up on top.
    public: true,
    tags: req.body.tags ? req.body.tags : [],
  });

  newTutor.save().then((tutor) => res.send(tutor));
});

router.post("/updateTutee", firebaseMiddleware, (req, res) => {
  console.log("got here");
  // the object with the update should be included in req.body.update
  let update = req.body.update;
  Tutee.updateOne({ firebase_uid: req.user.user_id }, update)
    .then((updated_tutee) => res.send(updated_tutee))
    .catch((error) => {
      console.log(error);
      return res.sendStatus(400);
    });
});

router.post("/updateTutor", firebaseMiddleware, (req, res) => {
  // the object with the update should be included in req.body.update
  let update = req.body.update;
  Tutor.updateOne({ firebase_uid: req.user.user_id }, update)
    .then((updated_tutor) => res.send(updated_tutor))
    .catch(() => {
      return res.sendStatus(400);
    });
});

router.get("/auth_get", firebaseMiddleware, (req, res) => {
  res.send({ status: "success", user: req.user });
});

router.post("/pingTutor", firebaseMiddleware, (req, res) => {
  // TODO: Send an email or notification ot the tutor.
  // We assume that we know which subjects the student
  // needs help with and the email.
  const student_email = req.body.student.email;
  const tutor_uid = req.body.tutor_uid;
  const student_message = req.body.personal_message;
  Tutor.findOne({ firebase_uid: tutor_uid }).then((tutor) => {
    let tutor_email = tutor.email;
    sendEmail(tutor_email, tutor.name.split()[0], student_email, student_message)
  });
});

function removeContactInfo(person) {
  person.email = undefined;
  person.phone = undefined;
  return person;
}

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
