import mongoose from "mongoose";

const postBookSchema = mongoose.Schema({
  title: String,
  author: String,
  pageLength: String,
});

const PostBook = mongoose.model("postBook", postBookSchema);

export default PostBook;
