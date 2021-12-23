const express = require("express");
const router = express.Router();

const { loginUser, registerUser,getUsers, getUser, updateUser, forgotPassword, resetPassword,getLoggedUser, deleteUser, createTask } = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.post("/me",auth, getLoggedUser);
router.post("/login", loginUser);
router.post("/reset-password", resetPassword);
router.post("/forgot-password", forgotPassword);
router.post("/register", registerUser);
router.get("/", getUsers);
router.get("/:id", getUser);
router.put("/", updateUser);
router.put("/delete", deleteUser);

module.exports = router;
