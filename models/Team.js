const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  teamName: String,
  teamUid: String,
  blocks: Array,
  highscores: [
    {
      playerName: String,
      score: Number,
    },
  ],
});

const Team = mongoose.model("Team", TeamSchema);

module.exports = Team;
