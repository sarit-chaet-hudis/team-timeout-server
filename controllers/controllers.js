const Team = require("../models/Team");

async function addTeam(req, res) {
  const { teamUid, blocks, teamName } = req.body;
  try {
    if (teamName === "") throw Error("name is empty");
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

async function updateScores(req, res) {
  // TODO keep only one highscore per playerName
  try {
    const { teamUid } = req.params;
    const { playerName, score } = req.body;
    const team = await Team.findOne({ teamUid: teamUid });
    if (!team) throw Error("No such team");
    console.log(team); //TODO
    team.highscores.push({ playerName, score });
    team.highscores.sort((a, b) => b.score - a.score);
    await team.save();
    res.send(team.highscores);
  } catch (err) {
    res.send(err.message);
  }
}

module.exports = { addTeam, getTeam, updateScores };
