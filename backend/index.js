const express = require("express");
const app = express();

const dataBase = require("./db");

dataBase();

app.get("/", (req, res) => {
  res.send("Sportify Backend");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Sportify backend started");
});
