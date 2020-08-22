// For keeping track of all colleges mentors come from, used for stats.
const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model("college", collegeSchema);