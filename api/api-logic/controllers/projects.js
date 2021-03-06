const db = require("../db");
const { projectValidator } = require("../helpers/projectValidator");
const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");
const parseResults = require("../helpers/parser");
const _ = require("lodash");

module.exports = {
  getAllProjects: async (req, res) => {
    try {
      let result = await db.exec("getAllProjects");
      console.log(result);
      let resultData = result.recordsets;

      res.status(200).json(resultData);
    } catch (error) {
      if (error.message) return res.status(500).json(error);
      res.status(404).json(error);
    }
  },
  getProjects: async (req, res) => {
    try {
      const { uid } = req.query;
      // console.log(uid);
      if (!uid) return res.status(400).send({ message: "User id is required" });
      let result = await db.exec("getProjects", { user_id: uid });
      const projects = result.recordset;
      console.log(projects);
      res.status(200).json(projects);
    } catch (error) {
      console.log(error);
      if (error.message) return res.status(500).json(error);
      res.status(404).json(error);
    }
  },
  getProject: async (req, res) => {
    const { uid, pid } = req.params;
    if (!uid || !pid)
      return res.status(400).send({ message: "Id is required" });
    try {
      let result = await db.exec("getProjects", {
        user_id: uid,
        project_id: pid,
      });
      const project = parseResults(result, true);
      res.status(200).json({ project });
    } catch (error) {
      if (error.message) return res.status(500).json(error);
      res.status(404).json(error);
    }
  },
  createProject: async (req, res) => {
    console.log(req.body);
    const { error } = projectValidator(req.body);

    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    try {
      const { name, start_date, end_date, description } = req.body;
      const id = uuidv4();
      const result = await db
        .exec("createUpdateProjects", {
          id,
          name,
          start_date: new Date(start_date),
          end_date: new Date(end_date),
          description,
        })
        .then((result) => {
          if (result.rowsAffected) {
            res.send("success");
          }
        });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  },

  updateProject: async (req, res) => {
    const { error } = projectValidator(
      _.pick(req.body, [
        "name",
        // "lead_user_id",
        // "client_name",
        "start_date",
        "end_date",
        "description",
      ])
    );
    if (!req.body._id)
      return res
        .status(400)
        .send({ success: false, message: "_id is required" });
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    try {
      const userResult = await db.exec("getUser", {
        userId: req.body.lead_user_id,
      });
      if (!userResult.recordset[0])
        return res.status(400).send({ message: "invalid lead_user_id. " });

      const {
        name,
        _id,
        // lead_user_id,
        // client_name,
        start_date,
        end_date,
        description,
      } = req.body;

      await db.exec("createUpdateProjects", {
        id: _id,
        name,
        // lead_user_id,
        // client_name,
        start_date: new Date(start_date),
        end_date: new Date(end_date),
        description,
      });

      res.send({ message: "Project updated successfully" });
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Internal Server Error", error: error.message });
    }
  },

  getAssignProject: async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "Id is required" });
    let { recordset } = await db.exec("getAssignedTeam", {
      project_id: id,
    });
    res.send({ team: recordset });
  },
  assignProject: async (req, res) => {
    const schema = Joi.object().keys({
      project_id: Joi.string().required(),
      user_id: Joi.array().required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    try {
      const { project_id, user_id } = req.body;
      for (let u_id of user_id) {
        const id = uuidv4();
        await db.exec("spAssignProjects", { id, project_id, user_id: u_id });
      }

      res.send({ message: "Users added to project successfully" });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .send({ message: `Internal Server Error - ${error.message}` });
    }
  },
};
