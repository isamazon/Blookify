import mongoose from "mongoose";

const bookShema = mongoose.Schema({
  bookTitle: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
