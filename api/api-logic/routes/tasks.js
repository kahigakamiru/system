const express = require("express");
const logicTasks = express.Router();

const {
  getAllTasks,
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  completeTask,
} = require("../controllers/Tasks");

logicTasks.get("/all", getAllTasks);
logicTasks.get("/:pid", getTasks);
logicTasks.get("/:pid/:tid", getTask);
logicTasks.post("/create", createTask);
logicTasks.put("/", updateTask);
logicTasks.put("/delete", deleteTask);
logicTasks.put("/complete", completeTask);

module.exports = { logicTasks };
