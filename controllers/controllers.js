const Team = require("../models/Team");

async function addTeam(req, res) {
  const { teamUid, blocks, teamName } = req.body;
  try {
    const team = await Team.create({
      teamName: teamName,
      teamUid: teamUid,
      blocks: blocks,
      highscores: [],
    });
    res.send(team);
  } catch (err) {
    res.send(200).send(err.message);
  }
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
