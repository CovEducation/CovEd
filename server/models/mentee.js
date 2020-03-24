const mongoose = require("mongoose");

const MenteeSchema = new mongoose.Schema({
  name: String,
  phone: String,
  email: String,
  age: String,
  subjects_needed: [String],
  college_prep: Boolean,
  location: String,
  grade_level: Number,
  guardian_name: String,
  guardian_phone: String,
  guardian_email: String,
  mentors: [mongoose.Types.ObjectId],
  has_reliable_internet: Boolean,
  guardian_present: Boolean,
});

// compile model from schema
module.exports = mongoose.model("mentee", MenteeSchema);
