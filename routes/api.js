const express = require("express");
const apiRouter = express.Router();

const {
  addTeam,
  getTeam,
  updateScores,
} = require("../controllers/controllers");

apiRouter.post("/add/", addTeam);

apiRouter.get("/get/:teamUid", getTeam);

apiRouter.put("/update/:teamUid", updateScores);

module.exports = apiRouter;
