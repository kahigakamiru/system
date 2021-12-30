const db = require("../db");
const { validateUsers } = require("../helpers/validateUser");
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const Joi = require("joi");
const _ = require("lodash");
const generateToken = require("../helpers/genToken");

module.exports = {
  registerUser: async (req, res) => {
    try {
      const { error } = validateUsers(req.body);

      if (error)
        return res
          .status(400)
          .send({ success: false, message: error.details[0].message });
      console.log(req.body.email);
      const { recordset } = await db.exec("getUserByEmail", {
        email: req.body.email,
      });
      console.log(recordset);
      if (recordset.length > 0)
        return res
          .status(404)
          .send({ message: "Account exists with the given email" });

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);
      const { firstname, email, lastname } = req.body;
      console.log(email);
      const id = uuidv4();
      await db.exec("userRegister", {
        id,
        firstname,
        lastname,
        email,
        password,
      });
      res.send({ message: "User registered successfully" });
    } catch (error) {
      console.log(error.message);
      res
        .status(500)
        .send({ error: error.message, message: "Internal Server Error" });
    }
  },
  loginUser: async (req, res) => {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
    });
    const { error } = schema.validate(req.body);
    if (error)
      return res
        .status(400)
        .send({ success: false, message: error.details[0].message });

    const { email, password } = req.body;

    const { recordset } = await db.exec("getUserByEmail", { email });
   
    const user= recordset[0]
    if (recordset.length === 0) {
      return res.status(404).send({ message: "Account does not exist" });
    } else {
      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword)
        return res.status(404).send({ message: "Invalid email or password" });

      const token = generateToken(user.email, user._id, user.isAdmin);
      res.send({
        user: _.pick(user, ["_id", "first", "last", "email", "isAdmin"]),
        token,
      });
    }
  },

  getLoggedUser: async (req, res) => {
    try {
      const { email } = req.user;
      const { recordset } = await db.exec("getUserByEmail", { email });
      const user = recordset[0];

      const token = generateToken(user.email, user._id, user.isAdmin);
      res.send({
        user: _.pick(user, ["_id", "first", "last", "email", "isAdmin"]),
        token,
      });
    } catch (error) {
      res
        .status(500)
        .send({ error: error.message, message: "Internal Server Error" });
    }
  },

  resetPassword: async (req, res) => {
    try {
      const schema = Joi.object().keys({
        token: Joi.string().min(8).required(),
        password: Joi.string().min(8).required(),
      });

      const { error } = schema.validate(req.body);

      if (error)
        return res
          .status(400)
          .send({ success: false, message: error.details[0].message });

      const userResult = await db.exec("getUser", {
        userId: req.body.token,
      });

      if (!userResult.recordset[0])
        return res.status(400).send({ message: "invalid token provided" });

      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(req.body.password, salt);

      await db.query(
        "UPDATE dbo.users SET password = '" +
          password +
          "' WHERE _id = '" +
          req.body.token +
          "'"
      );
      res.send({ message: "Password Updated Successfully" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },

  forgotPassword: async (req, res) => {
    try {
      const schema = Joi.object().keys({
        email: Joi.string().email().min(8).required(),
      });

      const { error } = schema.validate(req.body);

      if (error)
        return res
          .status(400)
          .send({ success: false, message: error.details[0].message });

      const { recordset } = await db.exec("getUserByEmail", {
        email: req.body.email,
      });

      const user = recordset[0];
      if (!user)
        return res.status(400).send({ message: "Email does not exist" });

      await db.query(
        "INSERT INTO dbo.reset_password_queue VALUES ('" + user._id + "', 1) "
      );
      res.send({ message: "Check your email for the reset password link" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  },
  getUsers: async (req, res) => {
    try {
      let results = await db.exec("getUsers");
      console.log(results.recordset);
      res.send(results.recordset).status(200);
    } catch (error) {
      res.send(error.message).status(500);
    }
  },
  getUser: async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).send({ message: "Id is required" });
    let { recordset } = await db.exec("getUser", {
      userId: id,
    });
    res.send({ user: recordset[0] });
  },
  updateUser: async (req, res) => {
    try {
      const { firstname, lastname, email, age, id } = req.body;
      await db.exec("userUpdater", {
        firstname,
        lastname,
        email,
        age,
        id,
      });
      res.status(201).send({ message: "User Updated Successfully" });
    } catch (error) {
      res
        .status(500)
        .send({ error: error.message, message: "Internal Sever Error" });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { email } = req.body;
      const { recordset } = await db.exec("getIsDeleted", { email });

      const user = recordset[0];

      if (user.isDeleted === true)
        return res.status(404).send({ message: "user already deleted" });

      if (!user)
        return res.status(404).send({ message: "Account does not exist" });

      await db.exec("deleteUser", {
        id: user._id,
      });
      res.status(201).send({ message: "User deleted Successfully" });
    } catch (error) {
      res
        .status(500)
        .send({ error: error.message, message: "Internal Sever Error" });
    }
  },
};
