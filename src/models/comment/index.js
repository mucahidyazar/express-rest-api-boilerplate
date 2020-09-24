const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({});

const Comment = mongoose.model("Comment", taskSchema);

module.exports = Comment;
