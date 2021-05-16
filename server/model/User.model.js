const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Userdata = new Schema({
  username: String,
  password: String,
});

module.exports.Userdata = mongoose.model("Userdata", Userdata);
