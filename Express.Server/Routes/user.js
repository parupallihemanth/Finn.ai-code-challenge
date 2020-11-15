const express = require("express");
const { getIds } = require("../Controllers/ids");
const { getAllUsers, createUser } = require("../Controllers/user");
const router = express.Router();

router.get("/", getIds);
router.get("/users", getAllUsers);
router.post("/newUser", createUser);

module.exports = router;
