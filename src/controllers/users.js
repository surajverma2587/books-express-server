const getUsers = (req, res) => {
  res.send("getUsers");
};

const getUser = (req, res) => {
  res.send("getUser");
};

const createUser = (req, res) => {
  res.send("createUser");
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
