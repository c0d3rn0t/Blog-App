const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const config = require("./config/key");

const { User } = require("./model/user");

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/api/users/register", (req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => res.status(200).json(`User ${req.body.name} added!`))
    .catch((err) => res.status(400).json(`Unable to add user. Error: ${err}`));
});

app.listen(5000, () => {
  console.log("port listening on port 5000");
});

// test
