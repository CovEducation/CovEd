const mongoose = require("mongoose");

const menteeSchema = new mongoose.Schema({
  firebase_uid: String,
  name: String,
  phone: String,
  email: String,
  timezone: String,
  bio: String,
  subjects: [String],
  student_name: String,
  student_phone: String,
  student_email: String,
  // these fields are not captured by client
  grade_level: Number,
  mentors: [mongoose.Types.ObjectId],
  tags: [String],
  verified_date: Date,
  reminder_sent: Boolean,
});

// compile model from schema
module.exports = mongoose.model("mentee", menteeSchema);
