import mongoose from "mongoose";

const bookShema = mongoose.Schema({
  createdAt: {
    type: Date,
    default: new Date(),
  },
});
