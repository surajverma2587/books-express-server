const { getDataFromFile } = require("../utils");

const getBooks = (req, res) => {
  try {
    // get books from file
    const books = getDataFromFile("books");

    return res.json({
      books,
    });
  } catch (error) {
    console.log(`[ERROR]: Internal server error | ${error.message}`);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getBook = (req, res) => {
  try {
    // get id from req params
    const { id } = req.params;

    // get books from file
    const books = getDataFromFile("books");

    // find book by id
    const book = books.find((book) => book.id === id);

    if (book) {
      return res.json(book);
    }

    return res.status(404).json({
      error: "Book not found",
    });
  } catch (error) {
    console.log(`[ERROR]: Internal server error | ${error.message}`);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const createBook = (req, res) => {
  res.send("createBook");
};

module.exports = {
  getBooks,
  getBook,
  createBook,
};
