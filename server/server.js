const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");
const usersRoute = require("./routes/usersRoute");

// --- MIDDLEWARE ---
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// DB connection
const dbConnection = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/UsersDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully DB connected");
  } catch (error) {
    console.log(`DB connection failed`);
    console.log(error.message);
  }
};

// --- API ---
app.use("/users", usersRoute);

// --- SERVER LISTENING ---
app.listen(PORT, async () => {
  try {
    console.log(`Server is running at port ${PORT}`);
    await dbConnection();
  } catch (error) {
    console.log("listening error");
  }
});
