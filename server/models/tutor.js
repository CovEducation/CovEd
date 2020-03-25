const mongoose = require("mongoose");

const TutorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  subjects: [String],
  location: String,
  major: String,
  class_year: Number,
  college_prep: Boolean,
  languages_spoken: [String],
  grade_levels_to_tutor: [Number],
  tutees: [mongoose.Types.ObjectId]
});

// compile model from schema
module.exports = mongoose.model("tutor", TutorSchema);
