const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: String,
  blocks: [{}],
  highscores: Array,
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
