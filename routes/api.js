const express = require("express");
const apiRouter = express.Router();

const { addTeam, getTeam } = require("../controllers/controllers");

apiRouter.post("/add/:teamUid", addTeam);

apiRouter.get("/get/:teamUid", getTeam);

module.exports = apiRouter;
