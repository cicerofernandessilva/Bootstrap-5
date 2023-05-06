const { nanoid } = require("nanoid");
const User = require("../models/User");
// const bcrypt = require("bcryptjs");

const loginForm = (req, res) => {
  res.render("login");
  //   try {
  //     res.render("login");
  //   } catch (error) {
  //     console.log(error);
  //   }
};
const registerForm = (req, res) => {
  res.render("register");
  //   try {
  //     res.render("register");
  //   } catch (error) {
  //     console.log(error);
  //   }
};

const registerUser = async (req, res) => {
  // console.log(req.body);
  // res.json(req.body);
  const { userName, email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    // res.json(user); // retorno null
    // console.log(user);
    if (user) throw new Error("Ya existe este usuario");

    user = new User({ userName, email, password, tokenConfirm: nanoid() });
    // console.log(user);
    await user.save();
    //teste de uso do bcryptjs
    // const salt = await bcrypt.genSalt(10);
    // console.log(await bcrypt.hash(user.password, salt)); //mistura a senha com o salt
    // res.json(user);
    res.redirect("/auth/login");
  } catch (error) {
    // console.log(error);
    res.json({ error: error.message });
  }
};

const confirmC = async (req, res) => {
  const { token } = req.params;
  console.log(token);
  try {
    const user = await User.findOne({ tokenConfirm: token });

    if (!user) throw new Error("No existe este usuario!");

    user.cuentaConfirmada = true;
    user.tokenConfirm = null;
    await user.save();

    res.redirect("/auth/login");
  } catch (error) {
    res.json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("No existe este email registrado!");

    if (!user.cuentaConfirmada)
      throw new Error("Falta confirmar la cuenta de este usuario!");

    if (await user.comparePassword(password))
      throw new Error("La contrasena no esta correta!");

    res.redirect("/");
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  loginForm,
  registerForm,
  registerUser,
  confirmC,
  loginUser,
};
