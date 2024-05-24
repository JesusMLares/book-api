// Require Mongoose:
const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create Schema:
const bookSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  year: { type: Number },
  quantity: { type: Number, default: 0 },
  imageURL: {
    type: String,
    default: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  },
});

// Model and Export:
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
