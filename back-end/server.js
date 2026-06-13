const express = require("express");
const app = require("./app");
const port = 3000;

app.get("/", (req, res) => {
  res.send("Server says hello!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
