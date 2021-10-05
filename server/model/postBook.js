import mongoose from 'mongoose';

const postBookSchema = mongoose.Schema({
  title: String,
  author: String,
  name: String,
  pageLength: String,
  selectedFile: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PostBook = mongoose.model('postBook', postBookSchema);

export default PostBook;
