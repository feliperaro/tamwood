const { getUsers } = require("../models/user");

const getAllUsers = async (_, res) => {
  try {
    const users = await getUsers();
    res.status(200).json({ users: users });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllUsers,
};
