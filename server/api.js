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

const {SUBJECTS, TAGS} = require("./models/constants");

// connecting to email service
const sendEmail = require("./sendEmail.js")

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

const firebaseMiddleware = require("./auth");

const rateLimit = require("express-rate-limit")

const emailRequestLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 4,
  message: "Please only request one mentor per student and wait at least one day for the mentor to respond to your requests.",
  keyGenerator: (req, res) => { req.user.user_id || req.ip }
});

const accountRequestLimiter = rateLimit({
  windowMs: 60 * 60 * 24 * 1000,
  max: 4,
  message: "Please only make up to 4 accounts a day."
});

const firebase = require("firebase-admin");


/*
  GET Endpoints
*/
/**
 * Returns public mentor / mentee stats to show on the website.
 * Current stats:
 *  - Mentor count
 *  - Mentee count
 *  - College count
 */
router.get("/stats", (req, res) => {

  const extractCollege = (email) => {
    return email.split("@").pop();
  };
  let resp = {
    mentor_count : 0,
    mentee_count : 0,
    college_count : 0,
  }

  Mentor.find({})
  .then((mentors) => {
    resp.mentor_count = mentors.length
    // Assumption: People with different email domains are from different colleges.
    let colleges = new Set()
    mentors.map((mentor) => colleges.add(extractCollege(mentor.email)));
    resp.college_count = colleges.size;

    Mentee.find({})
    .then((mentees) => {
      resp.mentee_count = mentees.length
      console.log(resp)
      res.send(resp);
    })

  });
});


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



/**
 * Authenticated endpoint.
 * API Endpoint Details:
 * This endpoint retrieves up to 100 mentors from our mentor database.
 * The mentors will be sorted by the last time they were requested
 * (newer / recently requested mentors will be shown last). All the mentors
 * retrived are guaranteed to have all subjects if specified in the arguments.
 *
 * subjects: comma-separated list of subjects the mentors must have
 */
router.get("/getMentors", firebaseMiddleware, (req, res) => {
  // check if the user has their email verified
  if (!req.user.email_verified) { res.sendStatus(403); }

  const keys = req.query.subjects ? req.query.subjects.split(",") : undefined;

  let query = {public: true};

  if (keys) {
    const subjects = keys.filter((subject) => SUBJECTS.includes(subject));
    const tags = keys.filter((tags) => TAGS.includes(tags));

    if (subjects.length > 0) query.subjects = {$all: subjects};
    if (tags.length > 0) query.tags = {$all: tags};
  }

  Mentor.find(query)
    .sort({last_request: 1})
    .then((mentors) => {
      mentors = mentors.map((mentor) => {
        delete mentor["i"];
        return removeContactInfo(mentor)
      });

      res.send(mentors);
    })
    .catch(() => res.sendStatus(500));
});

/*
  POST Endpoints
*/

router.post("/addMentee", accountRequestLimiter, firebaseMiddleware, (req, res) => {
  let newMentee = new Mentee({
    firebase_uid: req.user.user_id,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    timezone: req.body.timezone,
    bio: req.body.bio,
    subjects: req.body.subjects,
    student_name: req.body.student_name,
    student_email: req.body.student_email,
    college_prep: req.body.college_prep,
    grade_level: req.body.grade_level,
    has_reliable_internet: req.body.has_reliable_internet,
    mentors: [],
  });
  newMentee.save().then((mentee) => res.send(mentee));
});

router.post("/addMentor", accountRequestLimiter, firebaseMiddleware, (req, res) => {
  let newMentor = new Mentor({
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

  newMentor.save().then((newMentor) => res.send(newMentor));
});

router.post("/updateMentee", firebaseMiddleware, (req, res) => {
  // the object with the update should be included in req.body.update
  let update = req.body.update;
  Mentee.updateOne({
      firebase_uid: req.user.user_id
    }, update)
    .then((updated_mentee) => res.send(updated_mentee))
    .catch((error) => {
      return res.sendStatus(400).send("Unable to update user, check UID.").send(error);
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

router.post("/removeUser", firebaseMiddleware, async (req, res) => {
  try {
    await firebase.auth().deleteUser(req.user.user_id);
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.get("/auth_get", firebaseMiddleware, (req, res) => {
  res.send({
    status: "success",
    user: req.user
  });
});


router.post("/pingMentor", firebaseMiddleware, emailRequestLimiter, (req, res) => {
  const student_email = req.body.student.email;
  const mentor_uid = req.body.mentor_uid;
  const student_message = req.body.personal_message;
  Mentor.findOne({
    firebase_uid: mentor_uid
  }).then((mentor) => {
    let mentor_email = mentor.email;
    sendEmail.emailMentor(mentor_email, mentor.name.split()[0], student_email, student_message)
      .then(() => {
        mentor.last_request = Date.now();
        mentor.save().then(res.send({}));
      });
  });
});

router.post("/pingGuardian",firebaseMiddleware, emailRequestLimiter, (req, res) => {
  if (req.user.role === "mentor") {
    res.sendStatus(401);
  }
  const guardianName = req.body.guardianName;
  const guardianEmail = req.body.guardianEmail;
  const mentorName = req.body.mentorName;
  sendEmail.emailGuardian(guardianName, guardianEmail, mentorName)
    .then(() => { res.send({}) })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
})

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
