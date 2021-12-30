const db = require("../db");
const { v4: uuidv4 } = require("uuid");
const { taskValidator } = require("../helpers/taskValidator");
const parser = require("../helpers/parser");
const _ = require("lodash");

module.exports = {
  getAllTasks: async (req, res) => {
    try {
      let result = await db.exec("getTasks");
      // console.log(result);
      let resultData = result.recordsets;

      res.status(200).json(resultData);
    } catch (error) {
      if (error.message) return res.status(500).json(error);
      res.status(404).json(error);
    }
  },
  getTasks: async (req, res) => {
    const { pid } = req.params;

    try {
      let result = await db.exec("getTasks", { project_id: pid });
      // console.log(result);
      const tasks = result.recordset;
      res.status(200).json({ tasks });
    } catch (error) {
      if (error.message) return res.status(500).json(error);
      res.status(404).json(error);
    }
  },
  getTask: async (req, res) => {
    const { pid, tid } = req.params;
    try {
      let result = await db.exec("getTask", {
        project_id: pid,
        task_id: tid,
      });
      const task = result.recordset;
      res.status(200).json({ task });
    } catch (error) {
      if (error.message) return res.status(500).json(error);
      res.status(404).json(error);
    }
  },
  createTask: async (req, res) => {
    try {
      const { error } = taskValidator(req.body);
      if (error)
        return res
          .status(400)
          .send({ success: false, message: error.details[0].message });

      const userResult = await db.exec("getUser", {
        userId: req.body.user_id,
      });
      const projectResult = await db.exec("getProjects", {
        project_id: req.body.project_id,
        // user_id: req.body.user_id,
      });
      // if (!userResult.recordset[0])
      //   return res.status(400).send({ message: "invalid user_id. " });

      if (!projectResult.recordset[0])
        return res.status(400).send({ message: "invalid project. " });

      const { name, project_id, start_date, end_date, description } = req.body;
      // const id = uuidv4();

      await db.exec("createTask", {
        name,
        project_id,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        description,
      });
      res.send({ message: "Task created successfully" });
    } catch (error) {
      // console.log(error.message);
      res.status(500).send(error.stack);
    }
  },

  updateTask: async (req, res) => {
    const { error } = taskValidator(
      _.pick(req.body, [
        "name",
        "project_id",
        "start_date",
        "end_date",
        "description",
      ])
    );
    if (!req.body._id)
      return res
        .status(400)
        .send({ success: false, message: "task_id is required" });
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    try {
      const { _id, name, project_id, start_date, end_date, description } =
        req.body;
      console.log(req.body);
      await db.exec("updateTask", {
        id: _id,
        name,
        project_id,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        description,
      });
      res.send({ message: "Task updated successfully" });
    } catch (error) {
      // console.log(error.message);
      res.status(500).send({ message: error.message });
    }
  },
  deleteTask: async (req, res) => {
    try {
      const { task_id } = req.body;
      // const { project_id } = req.body;
      const { recordset } = await db.exec("getTask", { task_id });

      const task = recordset[0];

      if (!task) {
        return res.status(404).send({ message: "task does not exist" });
      }
      if (task.isDeleted) {
        return res.status(404).send({ message: "task already deleted" });
      }

      const data = await db.exec("deleteTask", {
        task_id,
      });
      console.log(data);
      res.status(201).send({ message: "task deleted Successfully" });
    } catch (error) {
      res
        .status(500)
        .send({ error: error.message, message: "Internal Sever Error" });
    }
  },

  completeTask: async (req, res) => {
    try {
      const { task_id } = req.body;
      const { project_id } = req.body;
      const { recordset } = await db.exec("getTask", { task_id, project_id });

      const task = recordset[0];

      if (!task) {
        return res.status(404).send({ message: "task does not exist" });
      }
      if (task.isCompleted) {
        return res.status(404).send({ message: "task already Completed" });
      }

      await db.exec("CompleteTask", {
        task_id,
      });
      res.status(201).send({ message: "task completed Successfully" });
    } catch (error) {
      res
        .status(500)
        .send({ error: error.message, message: "Internal Sever Error" });
    }
  },
};
