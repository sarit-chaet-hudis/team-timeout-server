require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const apiRouter = require("./routes/api.js");

const URI = process.env.MONGO_URI;
const app = express();

app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(URI, () => console.log("connected mongoose"));

app.use("/api", apiRouter);

// TODO complete 404 handling
// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "../client/build/index.html"));
//   });

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server is up and runing on ${port}`));
