const mongoose = require("mongoose");
const { Schema } = mongoose;
// const { nanoid } = require("nanoid"); inserido diretamente no homecontroller
//import { nanoid } from "nanoid"; // erro, tive que fazer um downgrade da versão do nanoid

const urlSchema = new Schema({
  origin: {
    type: String,
    unique: true,
    require: true,
  },
  shortURL: {
    type: String,
    unique: true,
    require: true,
    // default: nanoid(5), inserido diretamento no homecontrollers
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
});

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;
