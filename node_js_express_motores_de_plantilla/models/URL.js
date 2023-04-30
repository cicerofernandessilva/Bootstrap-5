const mongoose = require("mongoose");
const { nanoid } = require("nanoid");
const { Schema } = mongoose;

const urlSchema = new Schema({
  origen: {
    type: String,
    unique: true,
    require: true,
  },
  shortURL: {
    type: String,
    unique: true,
    require: true,
    default: nanoid(5),
  },
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
