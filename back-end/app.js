const express = require("express");
const db = require("./api/models/db");
require("dotenv").config();

const app = express();
app.use(express.json());
// Database connection initializetion and model syncronization
async function populateDb() {
  try {
    await db.sequelize.sync({ force: false });
    console.log("Database synced successfully");
  } catch (error) {
    console.error("Database sync failed", error);
  }
}
populateDb();

module.exports = app;
