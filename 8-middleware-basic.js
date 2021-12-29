const express = require("express");
const app = express();
const logger = require("./logger");

//middleware
app.use(logger);

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.listen("5004", () => {
  console.log("Server is listening on port 5004...");
});