const path = require("path");
const express = require("express");
const app = express();

app.get("", (req, res) => {
  res.send("Thami wasn't discussing meth. Also he smells");
});
app.get("/thamisucks", (req, res) => {
  res.send("Thami sucks. And Yes I have to do this while you eat");
});
app.listen(3000, () => {
  console.log("Listening on port 3000");
});
