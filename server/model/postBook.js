import mongoose from "mongoose";

const postBookSchema = mongoose.Schema({
  bookTitle: String,
  author: String,
  pageCount: String,
});

const postBook = mongoose.model("postBook", postBookSchema);

export default postBook;
