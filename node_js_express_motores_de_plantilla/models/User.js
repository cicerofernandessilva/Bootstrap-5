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
    inlength: 3,
    maxlength: 1024,
  },
  tokenConfirm: {
    type: String,
    default: null,
  },
  cuentaConfirmada: {
    type: Boolean,
    default: false,
  },
  imagen: {
    type: String,
    default: null,
  }
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next(); // se o password já existe ele não é modificado
  try {
    const salt = await bcrypt.genSaltSync(10);
    const hash = await bcrypt.hashSync(user.password, salt);
    console.log(hash, "hash");
    user.password = hash.toString();
  } catch (error) {
    console.log(error);
    throw new Error("Error al codificar la contraseña");
  }
});

module.exports = moogoose.model("User", userSchema);
