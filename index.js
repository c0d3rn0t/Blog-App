const express = require("express");
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://codernot13:YNWzf622K09015Ii@react-blog.uvirfv8.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => console.log(err));

const app = express();

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(5000, () => {
  console.log("port listening on port 5000");
});

// test
