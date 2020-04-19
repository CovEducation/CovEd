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
const Mentor = require("./models/mentor.js");
const Mentee = require("./models/mentee.js");

// connecting to email service
const sendEmail = require("./sendEmail.js")

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

const firebaseMiddleware = require("./auth");
const rateLimit = require("express-rate-limit")

const pingLimiter = rateLimit({
  windowMs: 60 * 60 * 24 * 1000, // 1 day
  max: 4,
  message: "Please wait at least one day for the mentor to respond to your requests."
});

/*
  GET Endpoints
*/

router.get("/mentor", firebaseMiddleware, (req, res) => {
  Mentor.find({
      firebase_uid: req.user.user_id,
    })
    .then((tutor) => {
      res.send(tutor);
    })
    .catch(() => {
      res.sendStatus(400).send("Could not find user requested.");
    });
});

router.get("/mentee", firebaseMiddleware, (req, res) => {
  Mentee.find({
      firebase_uid: req.user.user_id,
    })
    .then((tutor) => {
      res.send(tutor);
    })
    .catch(() => {
      res.sendStatus(400).send("Could not find user requested.")
    })
})

router.get("/getMentors", firebaseMiddleware, (req, res) => {
  // We want to return all users which have the required tags and are public, sorted
  // by how recently they were contacted by someone else.
  const required_tags = req.query.subjects ? req.query.subjects.split() : [];
  // TODO: Also use req.query.tags
  const limit = req.query.limit || 10;
  Mentor.find({
      public: true
    })
    .then((tutors) => {
      tutors = tutors.filter((mentor) => {
        let overlapping_subjects = mentor.subjects.filter(
          (subject) => required_tags.includes(subject) && subject !== ""
        );
        let overlapping_tags = mentor.tags.filter((tag) =>
          (required_tags.includes(tag) && tag !== "")
        )
        return overlapping_tags.length + overlapping_subjects.length === required_tags.length;
      })
      // People that haven't been requested recently go first.
      let sorted_mentors = tutors.sort((a, b) => {
        return (a.last_request < b.last_request) ? -1 : 1
      });

      sorted_mentors = sorted_mentors.slice(0, limit);

      for (let i = 0; i < sorted_mentors.length; i++) {
        delete sorted_mentors[i]["i"];
        sorted_mentors[i] = removeContactInfo(sorted_mentors[i]);
      }
      res.send(sorted_mentors);
    })
    .catch(() => {
      res.sendStatus(500);
    });
});

/* 
  POST Endpoints
*/

router.post("/addMentee", pingLimiter, firebaseMiddleware, (req, res) => {
  let newMentee = new Mentee({
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
    mentors: [],
  });
  newMentee.save().then((tutee) => res.send(tutee));
});

router.post("/addMentor", pingLimiter, firebaseMiddleware, (req, res) => {
  let newTutor = new Mentor({
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
    mentees: [],
    last_request: new Date().getTime(), // Newer tutors will show up on top.
    public: req.body.public,
    tags: req.body.tags ? req.body.tags : [],
  });

  newTutor.save().then((tutor) => res.send(tutor));
});

router.post("/updateMentee", firebaseMiddleware, (req, res) => {
  // the object with the update should be included in req.body.update
  let update = req.body.update;
  Mentee.updateOne({
      firebase_uid: req.user.user_id
    }, update)
    .then((updated_mentee) => res.send(updated_mentee))
    .catch((error) => {
      return res.sendStatus(400).send("Unable to update user, check UID.")
    });
});

router.post("/updateMentor", firebaseMiddleware, (req, res) => {
  // the object with the update should be included in req.body.update
  let update = req.body.update;
  Mentor.updateOne({
      firebase_uid: req.user.user_id
    }, update)
    .then((updated_mentor) => res.send(updated_mentor))
    .catch(() => {
      return res.sendStatus(400).send("Unable to update user, check UID.");
    });
});

router.get("/auth_get", firebaseMiddleware, (req, res) => {
  res.send({
    status: "success",
    user: req.user
  });
});


router.post("/pingMentor", pingLimiter, firebaseMiddleware, (req, res) => {
  const student_email = req.body.student.email;
  const mentor_uid = req.body.mentor_uid;
  const student_message = req.body.personal_message;
  Mentor.findOne({
    firebase_uid: mentor_uid
  }).then((mentor) => {
    let mentor_email = mentor.email;
    sendEmail(mentor_email, mentor.name.split()[0], student_email, student_message)
      .then(() => res.send({}));
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
  res.status(404).send({
    msg: "API route not found"
  });
});

module.exports = router;