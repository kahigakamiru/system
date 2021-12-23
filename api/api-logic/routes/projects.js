const express = require("express")
const logicProjects = express.Router()

const {getProjects, getProject, createProject, assignProject, getAssignProject, updateProject} = require("../controllers/projects")

logicProjects.get("/:uid", getProjects);
logicProjects.post("/", createProject);
logicProjects.put("/", updateProject);
logicProjects.get("/assign/:id", getAssignProject);
logicProjects.post("/assign", assignProject);
logicProjects.get("/:pid/user/:uid", getProject);



module.exports = {logicProjects};