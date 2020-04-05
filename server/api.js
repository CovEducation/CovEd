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

// import authentication library
const auth = require("./auth");

// connecting to email service
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

router.get("/tutors", (req, res) => {
  Tutor.find({})
    .then((tutors) => {
      res.send(tutors.map((tutor) => removeContactInfo(tutor)));
    })
    .catch(() => {
      res.send({});
    });
});

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

router.get("/tutorsBySubjects", (req, res) => {
  // We want tutors which have any of the subjects, matched by how many
  // Speed up by using MongoDB aggregate (unwind, filter by subject, then group)
  // if the database is large enough that it warrants the time.

  // Getting all tutors, sorting by how many subjects they have in common with the
  // ones requested
  const subjects_wanted = req.query.subjects;
  if (subjects_wanted.length == 0) {
    res.sendStatus(500);
  }
  const limit = req.query.limit === undefined ? 10 : req.query.limit;
  Tutor.find({})
    .then((tutors) => {
      for (let i = 0; i < tutors.length; i++) {
        let overlapping_subjects = tutors[i].subjects.filter(
          (subject) => subjects_wanted.includes(subject) && subject != ""
        );
        tutors[i]["i"] = overlapping_subjects.length;
      }
      tutors = tutors.filter((tutor) => tutor.i !== 0);
      tutors = tutors.slice(0, limit);
      let sorted_tutors = tutors.sort((a, b) => (a.i > b.i ? 1 : -1));
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

router.get("/tutorsByLanguage", (req, res) => {
  Tutor.find({
    languages: req.query.language,
  })
    .then((tutors) => {
      res.send(tutors.map((tutor) => removeContactInfo(tutor)));
    })
    .catch(() => {
      res.send({});
    });
});

router.get("/tutorsForCollegePrep", (req, res) => {
  Tutor.find({
    college_prep: true,
  })
    .then((tutors) => {
      res.send(tutors.map((tutor) => removeContactInfo(tutor)));
    })
    .catch(() => {
      res.send({});
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
  });

  newTutor.save().then((tutor) => res.send(tutor));
});

router.post("/updateTutee", firebaseMiddleware, (req, res) => {
  // the object with the update should be included in req.body.update
  let update = req.body.update;
  Tutee.updateOne({ firebase_uid: req.user }, update)
    .then((updated_tutee) => res.send(updated_tutee))
    .catch(() => {
      return res.sendStatus(400);
    });
});

router.post("/updateTutor", firebaseMiddleware, (req, res) => {
  // the object with the update should be included in req.body.update
  let update = req.body.update;
  Tutor.updateOne({ firebase_uid: req.user }, update)
    .then((updated_tutor) => res.send(updated_tutor))
    .catch(() => {
      return res.sendStatus(400);
    });
});

router.get("/auth_get", firebaseMiddleware, (req, res) => {
  console.log(req.user);
  res.send({ status: "success", user: req.user });
});

router.post("/pingTutor", (req, res) => {
  // TODO: Send an email or notification ot the tutor.
  // We assume that we know which subjects the student
  // needs help with and the email.
  const student_email = req.body.student.email;
  const tutor_uid = req.body.tutor_uid;
  const subjects = req.body.subjects;

  Tutor.findOne({ firebase_uid: tutor_uid }).then((tutor) => {
    let tutor_email = tutor.email;
    let msg = "Hi you got a tutor. Hype. Email: " + student_email;
    let mailOptions = {
      from: "CovED <coved@gmail>",
      to: tutor_email + ", ",
      subject: "Match! ",
      text: msg,
      html: "<b>" + msg + "</b>",
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) res.sendStatus(500);
      else
        res.send({
          ok: true,
          resp: info,
        });
    });
  });
});

function removeContactInfo(person) {
  person.email = undefined;
  person.phone = undefined;
  return person;
}

router.get("/healthCheck", (req, res) => {
  res.send({ ok: true });
});
// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
