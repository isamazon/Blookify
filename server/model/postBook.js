import mongoose from "mongoose";

const postBookSchema = mongoose.Schema({
  title: String,
  author: String,
  pageLength: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostBook = mongoose.model("postBook", postBookSchema);

export default PostBook;
