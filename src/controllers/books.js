const getBooks = (req, res) => {
  res.send("getBooks");
};

const getBook = (req, res) => {
  res.send("getBook");
};

const createBook = (req, res) => {
  res.send("createBook");
};

module.exports = {
  getBooks,
  getBook,
  createBook,
};
