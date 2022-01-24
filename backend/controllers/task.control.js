const TaskModel = require("../models/task.model");

const getAllTask = (_, res) => {
  TaskModel.find({}, (err, result) => {
    if (!err) {
      res.json(result);
      console.log(result);
    } else {
      console.log(err);
    }
  });
};

const createTask = async (req, res) => {
  const task = await TaskModel.create(req.body);
  res.status(200).json({ task });
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.send("Update task!");
};
const deleteTask = (req, res) => {
  res.send("Delete task!");
};

module.exports = { getAllTask, createTask, getTask, updateTask, deleteTask };
