/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const Tutor = require("./models/tutor");
const Tutee = require("./models/tutee");

// import authentication library
const auth = require("./auth");

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
        .catch(()=> {
          res.send({});
        });
});

router.get('/tutorByFirebaseUID', (req, res) => {
  Tutor.find({
    firebase_uid: req.query.firebase_uid
  })
  .then((tutor) => {
    res.send(tutor)
  })
  .catch(() => {
    res.send({});
  });
});

router.get("/tutorBySubject", (req, res) => {
  Tutor.find({
    subjects: req.query.subject
  })
  .then((tutors) => {
    res.send(tutors.map((tutor) => removeContactInfo(tutor)));
  })
  .catch(()=> {
    res.send({});
  });
});

router.get("/tutorByLanguage", (req, res) => {
  Tutor.find({
    languages: req.query.language
  })
  .then((tutors) => {
    res.send(tutors.map((tutor) => removeContactInfo(tutor)));
  })
  .catch(()=> {
    res.send({});
  });
});

router.get("/tutorForCollegePrep", (req, res) => {
  Tutor.find({
    college_prep: true,
  })
  .then((tutors)=> {
    res.send(tutors.map((tutor) => removeContactInfo(tutor)));
  })
  .catch(()=> {
    res.send({});
  })
});

/* 
  POST Endpoints
*/

router.post("/addTutee", (req, res) => {
  let newTutee = new Tutee({
    firebase_uid: req.body.firebase_uid,
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    age: req.body.age,
    subjects_needed: req.body.subjects_needed,
    college_prep: req.body.college_prep,
    location: req.body.location,
    grade_level: req.body.number,
    guardian_name: req.body.guardian_name,
    guardian_present: req.body.guardian_present,
    has_reliable_internet: req.body.has_reliable_internet,
    tutors: [],
  })

  newTutee.save().then((tutee) => res.send(tutee))
});

router.post("/addTutor", (req, res) => {
  let newTutor = new Tutor({
    firebase_uid: req.body.firebase_uid,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    subjects: req.body.subjects,
    location: req.body.location,
    major: req.body.major,
    class_year: req.body.class_year,
    college_prep: req.body.college_prep,
    languages_spoken: req.body.languages_spoken,
    grade_levels_to_tutors: req.body.grade_levels_to_tutors,
    tutees: []
  });

  newTutor.save().then((tutor) => res.send(tutor));
});

router.get("/auth_get", firebaseMiddleware, (req, res) => {
  console.log(req.user);
  res.send({status: 'success', user: req.user});
})

router.post("/pingTutor", (req, res) => {
  // TODO: Send an email or notification ot the tutor.
});

function removeContactInfo(person){
  person.email = undefined;
  person.phone = undefined;
  return person;
};

router.get("/healthCheck", (req, res) => {
  res.send({ok: true});
})
// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
