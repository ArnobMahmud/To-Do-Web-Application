const express = require("express");
const router = express.Router();
const rateHandler = require("../middleware/rate.handle");
const {
  getAllTask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  putTask,
} = require("../controllers/task.control");

router.route("/getTask").get(rateHandler, getAllTask);
router.route("/createTask").post(rateHandler, createTask);
router.route("/getTask/:id").get(rateHandler, getTask);
router.route("/deleteTask/:id").delete(rateHandler, deleteTask);
router.route("/updateTask/:id").patch(rateHandler, updateTask);
router.route("/putTask/:id").put(rateHandler, putTask);

module.exports = router;
