import mongoose from 'mongoose';

const readBookSchema = mongoose.Schema({
  title: String,
  author: String,
  pageLength: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const ReadBook = mongoose.model('readBook', readBookSchema);

export default ReadBook;
