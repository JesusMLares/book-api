// DEPENDENCIES
const express = require("express");
const mongoose = require("mongoose");

// CONFIGURATION
require("dotenv").config();
const PORT = process.env.PORT;
const app = express();
mongoose.connect(process.env.MONGO_URI);

// MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CONTROLLERS
const booksController = require("./controllers/books_controller.js");
app.use("/books", booksController);

// ROUTES
app.get("/", (req, res) => {
  res.send("hello world");
});

// LISTEN
app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
