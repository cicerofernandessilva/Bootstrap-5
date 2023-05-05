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
    res.json(user);
  } catch (error) {
    // console.log(error);
    res.json({ error: error.message });
  }
};

module.exports = {
  loginForm,
  registerForm,
  registerUser,
};
