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
const Mentor = require("./models/mentor");
const Mentee = require("./models/mentee");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();


/*
  GET Endpoints
*/
router.get("/mentees", (req, res) => {
  // TODO: Returning all the mentees is a big privacy issue. Revisit if needed.
  // // Returns all mentors for now.
  // Mentee.find({})
  //       .then((mentees) => {
  //         res.send(mentees);
  //       })
  //       .catch(()=> res.send({}));
  res.send({});
});

router.get("/menteeByEmail", (req, res) => {
  Mentee.find({email: req.query.email})
        .then((mentees) => {
          res.send(mentees);
        })
        .catch(()=> res.send({}));
});

router.get("/menteebyPhone", (req, res) => {
  Mentee.find({phone: req.query.phone})
  .then((mentees) => {
    res.send(mentees);
  })
  .catch(()=> res.send({}));
});

router.get("/mentors", (req, res) => {
  Mentor.find({})
        .then((mentors) => {
          res.send(mentors.map((mentor) => removeContactInfo(mentor)));
        })
        .catch(()=> {
          res.send({});
        });
});

router.get("/mentorBySubject", (req, res) => {
  Mentor.find({
    subjects: req.query.subject
  })
  .then((mentors) => {
    res.send(mentors.map((mentor) => removeContactInfo(mentor)));
  })
  .catch(()=> {
    res.send({});
  });
});

router.get("/mentorByLanguage", (req, res) => {
  Mentor.find({
    languages: req.query.language
  })
  .then((mentors) => {
    res.send(mentors.map((mentor) => removeContactInfo(mentor)));
  })
  .catch(()=> {
    res.send({});
  });
});

router.get("/mentorForCollegePrep", (req, res) => {
  Mentor.find({
    college_prep: true,
  })
  .then((mentors)=> {
    res.send(mentors.map((mentor) => removeContactInfo(mentor)));
  })
  .catch(()=> {
    res.send({});
  })
});

/* 
  POST Endpoints
*/

router.post("/addMentee", (req, res) => {
  let newMentee = new Mentee({
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
    mentors: [],
  })

  newMentee.save().then((mentee) => res.send(mentee))
});

router.post("/addMentor", (req, res) => {
  let newMentor = new Mentor({
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    subjects: req.body.subjects,
    location: req.body.location,
    major: req.body.major,
    class_year: req.body.class_year,
    college_prep: req.body.college_prep,
    languages_spoken: req.body.languages_spoken,
    grade_levels_to_mentor: req.body.grade_levels_to_mentor,
    mentees: []
  });

  newMentor.save().then((mentor) => res.send(mentor));
});

router.post("/pingMentor", (req, res) => {
  // TODO: Send an email or notification ot the mentor.

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
