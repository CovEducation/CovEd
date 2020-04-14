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

// import models so we can interact with the database
const Tutor = require("./models/tutor");
const Tutee = require("./models/tutee");

// connecting to email service
const sendEmail = require("./sendEmail.js")

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
    .catch(() => {
      res.sendStatus(400).send("Could not find user requested.");
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
      res.sendStatus(400).send("Could not find user requested.")
    })
})

router.get("/getTutors", firebaseMiddleware, (req, res) => {
  // We want to return all users which have the required tags and are public, sorted
  // by how recently they were contacted by someone else.
  const required_tags = req.query.subjects ? req.query.subjects.split() : [];
  const limit = req.query.limit || 10;
  Tutor.find({public: true})
    .then((tutors) => {
      tutors = tutors.filter((tutor)=> {
        let overlapping_subjects = tutor.subjects.filter(
          (subject) => required_tags.includes(subject) && subject !== ""
        );
        let overlapping_tags = tutor.tags.filter((tag) =>
          (required_tags.includes(tag) && tag !== "")
        )
        return overlapping_tags.length + overlapping_subjects.length === required_tags.length;
      })
      // People that haven't been requested recently go first.
      let sorted_tutors = tutors.sort((a, b) => {
          return (a.last_request < b.last_request) ? -1: 1
      });

      sorted_tutors = sorted_tutors.slice(0, limit);

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
    public: req.body.public,
    tags: req.body.tags ? req.body.tags : [],
  });

  newTutor.save().then((tutor) => res.send(tutor));
});

router.post("/updateTutee", firebaseMiddleware, (req, res) => {
  // the object with the update should be included in req.body.update
  let update = req.body.update;
  Tutee.updateOne({ firebase_uid: req.user.user_id }, update)
    .then((updated_tutee) => res.send(updated_tutee))
    .catch((error) => {
      return res.sendStatus(400).send("Unable to update user, check UID.")
    });
});

router.post("/updateTutor", firebaseMiddleware, (req, res) => {
  // the object with the update should be included in req.body.update
  let update = req.body.update;
  Tutor.updateOne({ firebase_uid: req.user.user_id }, update)
    .then((updated_tutor) => res.send(updated_tutor))
    .catch(() => {
      return res.sendStatus(400).send("Unable to update user, check UID.");
    });
});

router.get("/auth_get", firebaseMiddleware, (req, res) => {
  res.send({ status: "success", user: req.user });
});

router.post("/pingTutor", firebaseMiddleware, (req, res) => {
  const student_email = req.body.student.email;
  const tutor_uid = req.body.tutor_uid;
  const student_message = req.body.personal_message;
  Tutor.findOne({ firebase_uid: tutor_uid }).then((tutor) => {
    let tutor_email = tutor.email;
    sendEmail(tutor_email, tutor.name.split()[0], student_email, student_message)
      .then(()=> res.send({}));
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
