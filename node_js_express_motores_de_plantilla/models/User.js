const moogoose = require("mongoose");
const bcrypt = require("bcryptjs");

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

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next(); // se o password já existe ele não é modificado
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
    next();
  } catch (error) {
    console.log(error);
    next();
  }
});

module.exports = moogoose.model("User", userSchema);
