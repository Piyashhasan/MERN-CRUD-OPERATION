const Users = require("../models/usersModel");

// --- post controller ---
exports.createUser = async (req, res) => {
  try {
    const { name, email, age } = req.body;
    const newUser = new Users({
      name,
      email,
      age,
    });
    const saveUser = await newUser.save();
    res.status(201).send({
      status: true,
      message: "user Created .....",
    });
  } catch (error) {
    console.log("error from Post method");
    console.log(error.message);
  }
};

// --- get controller
exports.getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find({});
    res.status(200).send(allUsers);
  } catch (error) {
    console.log("error from get method");
    console.log(error.message);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userFindByID = await Users.findById(id).exec();
    res.status(200).send(userFindByID);
  } catch (error) {
    console.log("error from get method");
    console.log(error.message);
  }
};

// --- update controller ---
exports.updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const updateUser = await Users.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updateUser) {
      res.status(404).send({
        status: false,
        message: "User not update",
      });
    } else {
      res.status(200).send({
        status: true,
        message: "successfully update user",
        data: updateUser,
      });
    }
  } catch (error) {
    console.log("error from get method");
    console.log(error.message);
  }
};

// --- delete controller ---
exports.deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteUser = await Users.findByIdAndDelete(id);
    if (!deleteUser) {
      res.status(404).send({
        status: false,
        message: "User not delete",
      });
    } else {
      res.status(200).send({
        status: true,
        message: "successfully delete user",
        data: deleteUser,
      });
    }
  } catch (error) {
    console.log("error from get method");
    console.log(error.message);
  }
};
