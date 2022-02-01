const express = require("express");
const apiRouter = express.Router();

const { addTeam } = require("../controllers/controllers");

apiRouter.post("/add", addTeam);

module.exports = apiRouter;
