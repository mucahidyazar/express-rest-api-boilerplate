require("../config/db");
const express = require("express");
const cors = require("cors");
const usersRouter = require("./routers/users");
const tasksRouter = require("./routers/tasks");

//!VARIABLES
const app = express();

//!REQUIREMENTS
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//!ROUTERS
app.use(usersRouter);
app.use(tasksRouter);

module.exports = app;
