const TaskModel = require("../models/task.model");

/* Get Request */
const getAllTask = async (req, res) => {
  try {
    const tasks = await TaskModel.find({});
    res
      .status(200)
      .json({ status: "success", data: { tasks, nbHits: tasks.length } });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* Post Request */
const createTask = async (req, res) => {
  try {
    const task = await TaskModel.create(req.body);
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* Get by ID Request */
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOne({ _id: taskID });
    if (!task) {
      res.status(500).json({ msg: `No task with id : ${taskID}` });
    } else {
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* Delete Request */
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOneAndDelete({ _id: taskID });
    if (!task) {
      res.status(500).json({ msg: `No task with id : ${taskID}` });
    } else {
      res.status(200).json({ task: null, status: "success" });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

/* Update Request */
const updateTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOneAndUpdate({ _id: taskID }, req.body);
    if (!task) {
      res.status(500).json({ msg: `No task with id : ${taskID}` });
    } else {
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

/* Put Request */
const putTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await TaskModel.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
      overwrite: true,
    });
    if (!task) {
      res.status(500).json({ msg: `No task with id : ${taskID}` });
    } else {
      res.status(200).json({ task });
    }
  } catch (error) {
    res.status(500).json({ msg: error });
    console.log(error);
  }
};

module.exports = {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  putTask,
};
