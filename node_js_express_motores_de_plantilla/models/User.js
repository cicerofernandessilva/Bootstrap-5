const moogoose = require("mongoose");

const { Schema } = moogoose;

const userSchema = new Schema({
  userName: {
    type: String,
    lowercase: true,
    require: true,
  },
  email: {
    type: String,
    lowercase: true,
    require: true,
    unique: true,
    index: { unique: true },
  },
  password: {
    type: String,
    lowercase: true,
    require: true,
  },
  tokenConfirm: {
    type: String,
    default: null,
  },
  cuentaConfirmada: {
    type: Boolean,
    default: false,
  },
});

module.exports = moogoose.model("User", userSchema);
