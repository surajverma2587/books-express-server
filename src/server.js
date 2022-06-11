// import express
const express = require("express");

// create my express app instance
const app = express();

// add middleware
app.use(express.json());

// declare the PORT
const PORT = 4000;

const books = [
  {
    id: "1",
    title: "Book 1",
    author: "Author 1",
  },
  {
    id: "2",
    title: "Book 2",
    author: "Author 2",
  },
  {
    id: "3",
    title: "Book 3",
    author: "Author 3",
  },
];

// register GET method with endpoint and controller
app.get("/books", (req, res) => {
  // return response
  return res.json(books);
});

app.get("/books/:id", (req, res) => {
  // get id from request
  const { id } = req.params;

  // find book by id
  const book = books.find((book) => {
    return book.id === id;
  });

  // return response
  return res.json(book);
});

app.post("/books", (req, res) => {
  // get post body from request
  const payload = req.body;

  // push to array
  books.push(payload);

  // return response
  return res.json({
    message: "successfully created book",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
