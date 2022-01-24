const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  completed: {
    type: Boolean,
  },
});

const TaskModel = mongoose.model("Task", TaskSchema);
module.exports = TaskModel;
