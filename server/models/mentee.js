const mongoose = require("mongoose");

const menteeSchema = new mongoose.Schema({
  firebase_uid: String,
  name: String,
  phone: String,
  email: String,
  timezone: String,
  bio: String,
  subjects: [String],
  guardian_name: String,
  guardian_phone: String,
  guardian_email: String,
  // these fields are not captured by client
  college_prep: Boolean,
  grade_level: Number,
  has_reliable_internet: Boolean,
  guardian_present: Boolean,
  mentors: [mongoose.Types.ObjectId],
  tags: [String],
});

// compile model from schema
module.exports = mongoose.model("mentee", menteeSchema);
