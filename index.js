const express = require("express");
const app = express();
require('dotenv').config()

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/", (req, res) => {
  res.send("ok");
});

app.listen(port, () => {
  console.log("server is running on port:", port);
});
