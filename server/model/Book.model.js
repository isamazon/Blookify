const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Book = new Schema({
  title: String,
  date: {
    type: Date,
    default: Date.now,
  },
  finished: Boolean,
});

module.exports.Book = mongoose.model("Book", Book);
