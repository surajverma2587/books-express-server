const { Router } = require("express");

const { getUsers, getUser, createUser } = require("../controllers/users");

// create a router instance
const router = Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);

module.exports = router;
