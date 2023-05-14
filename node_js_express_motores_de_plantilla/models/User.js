const moogoose = require("mongoose");
const bcrypt = require("bcryptjs");

const { Schema } = moogoose;

const userSchema = new Schema({
  userName: {
    type: String,
    lowercase: true,
    require: true,
    index: { unique: true },
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
    const salt = await bcrypt.genSalt(2);
    const hash = await bcrypt.hash(user.password, salt);
    user.password = hash;
  } catch (error) {
    console.log(error);
    throw new Error("Error al codificar la contraseña");
  }
});

userSchema.methods.comparePassword = async function (candidatePassword) {
  // console.log(candidatePassword);
  // console.log(this.password);
  return await bcrypt.compare(this.password, candidatePassword);
};

module.exports = moogoose.model("User", userSchema);
