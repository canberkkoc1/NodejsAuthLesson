const express = require("express");
const bodyParser = require("body-parser");

// getting user

const user = require("./routes/user");

// add database module
const initiateMongoServer = require("./config/db");

// database connection
initiateMongoServer();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "API WORK!!!",
  });
});

// router middleware user

app.use("/user", user);

app.listen(PORT, (req, res) => {
  console.log(`Server running at PORT = ${PORT}`);
});
