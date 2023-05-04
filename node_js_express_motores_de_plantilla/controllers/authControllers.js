const User = require("../models/User");

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
    if (user) throw new error("Ya existe este usuario");

    user = new User({ userName, email, password });
    // console.log(user);
    await user.save();
    res.json(user);
  } catch (error) {
    // console.log(error);
    res.json({ error: "Ocorreu un error al guardar el usuario" });
  }
};

module.exports = {
  loginForm,
  registerForm,
  registerUser,
};
