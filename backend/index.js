const express = require("express");

app.get("/", (req, res) => {
  res.send("Sport Finder Backend");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Sport finder backend started");
});
