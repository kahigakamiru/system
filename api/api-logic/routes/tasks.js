const express = require("express")
const logicTasks = express.Router()

const {getTasks, getTask, createTask, updateTask, deleteTask, completeTask} = require("../controllers/Tasks")

logicTasks.get("/:pid", getTasks);
logicTasks.get("/:pid/:tid", getTask);
logicTasks.post("/", createTask);
logicTasks.put("/", updateTask);
logicTasks.put("/delete", deleteTask);
logicTasks.put("/complete", completeTask);



module.exports = {logicTasks};