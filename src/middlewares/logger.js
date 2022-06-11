const logger = (req, res, next) => {
  // get the request method
  const method = req.method;
  const path = req.path;

  console.log(`[INFO]: ${method} request for ${path}`);

  next();
};

module.exports = logger;
