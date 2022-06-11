const { Router } = require("express");

const books = require("./books");
const users = require("./users");

// create a router instance
const router = Router();

// register routes
router.use("/books", books);
router.use("/users", users);

module.exports = router;
