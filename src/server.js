// import express
const express = require("express");

const routes = require("./routes");
const logger = require("./middlewares/logger");

// declare the PORT
const PORT = 4000;

// create my express app instance
const app = express();

// add middleware
app.use(logger);
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
