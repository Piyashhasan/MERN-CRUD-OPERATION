const express = require("express");
const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserById,
} = require("../controllers/usersController");
const usersRoute = express.Router();

// #POST
usersRoute.post("/", createUser);

// #GET
usersRoute.get("/", getUsers);
usersRoute.get('/:id', getUserById)

// #UPDATE
usersRoute.patch("/:id", updateUser);

// #DELETE
usersRoute.delete("/:id", deleteUser);

module.exports = usersRoute;
