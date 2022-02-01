const Team = require("../models/Team");

async function addTeam(req, res) {
  // TODO
}

async function getTeam(req, res) {
  const { teamUid } = req.params;
  try {
    const team = await Team.findOne({ teamUid: teamUid });
    if (!team) throw Error("No such team");
    res.status(200).send(team);
  } catch (err) {
    res.status(400).send(err.message);
  }
}

module.exports = { addTeam, getTeam };
