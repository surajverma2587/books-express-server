const { v4: uuidv4 } = require("uuid");

const {
  getDataFromFile,
  writeDataToFile,
  getPayloadWithValidFieldsOnly,
} = require("../utils");

const getUsers = (req, res) => {
  try {
    // get users from file
    const users = getDataFromFile("users");

    return res.json({
      users,
    });
  } catch (error) {
    console.log(`[ERROR]: Internal server error | ${error.message}`);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const getUser = (req, res) => {
  try {
    // get id from req params
    const { id } = req.params;

    // get users from file
    const users = getDataFromFile("users");

    // find book by id
    const user = users.find((user) => user.id === id);

    if (user) {
      return res.json(user);
    }

    return res.status(404).json({
      error: "User not found",
    });
  } catch (error) {
    console.log(`[ERROR]: Internal server error | ${error.message}`);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

const createUser = (req, res) => {
  try {
    // get post body from req
    const payload = req.body;

    const cleanPayload = getPayloadWithValidFieldsOnly(
      ["title", "firstName", "lastName", "email", "dob", "city"],
      payload
    );

    // get users from file
    const users = getDataFromFile("users");

    if (Object.keys(cleanPayload).length !== 6) {
      return res.status(400).json({
        message: "Invalid request",
      });
    }

    const user = {
      id: uuidv4(),
      ...cleanPayload,
    };

    // add user to array
    users.push(user);

    // write all users to file
    writeDataToFile("users", users);

    return res.json({
      message: "Successfully created user",
    });
  } catch (error) {
    console.log(`[ERROR]: Internal server error | ${error.message}`);

    return res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
