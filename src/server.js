// import express
const express = require("express");

const routes = require("./routes");

// declare the PORT
const PORT = 4000;

// create my express app instance
const app = express();

const logger = (req, res, next) => {
  // get the request method
  const method = req.method;
  const path = req.path;

  console.log(`[INFO]: ${method} request for ${path}`);

  next();
};

// add middleware
app.use(logger);
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
