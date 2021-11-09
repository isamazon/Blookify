import mongoose from 'mongoose';

const tbrSchema = mongoose.Schema({
  title: String,
  author: String,
  pageLength: String,
  selectedFile: String,
  description: String,
  creator: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TbrSchema = mongoose.model('toBeRead', tbrSchema);

export default TbrSchema;
