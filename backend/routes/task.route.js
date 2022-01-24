const express = require("express");
const router = express.Router();
const rateHandler = require("../middleware/rate.handle");
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/task.control");

router.route("/getTask").get(rateHandler, getAllTask);
router.route("/createTask").post(rateHandler, createTask);

module.exports = router;
