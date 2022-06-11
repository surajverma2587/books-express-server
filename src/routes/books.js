const { Router } = require("express");

const { getBooks, getBook, createBook } = require("../controllers/books");

// create a router instance
const router = Router();

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", createBook);

module.exports = router;
