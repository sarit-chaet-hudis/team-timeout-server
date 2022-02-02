const Team = require("../models/Team");

async function addTeam(req, res) {
  const { teamUid } = req.params;
  const { blocks } = req.body;
  try {
    const team = await Team.create({ teamUid: teamUid, blocks: blocks });
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
