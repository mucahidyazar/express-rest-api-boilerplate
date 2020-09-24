require("../config/db");
const express = require("express");
const cors = require("cors");
const commentsRouter = require("./routers/comments");
const tasksRouter = require("./routers/tasks");

//!VARIABLES
const app = express();

//!REQUIREMENTS
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

//!ROUTERS
app.use(commentsRouter);
app.use(tasksRouter);

module.exports = app;
