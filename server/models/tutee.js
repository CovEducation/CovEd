const mongoose = require("mongoose");

const TuteeSchema = new mongoose.Schema({
  firebase_uid: String,
  name: String,
  phone: String,
  email: String,
  location: String,
  grade_level: Number,
  guardian_name: String,
  guardian_phone: String,
  guardian_email: String,
  tutors: [mongoose.Types.ObjectId],
  has_reliable_internet: Boolean,
  guardian_present: Boolean,
});

// compile model from schema
module.exports = mongoose.model("tutee", TuteeSchema);
