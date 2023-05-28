const User = require("../models/User");
const { validationResult } = require("express-validator");
const { nanoid } = require("nanoid");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
require("dotenv").config();

const loginForm = (req, res) => {
  res.render(
    "login"
    // { mensajes: req.flash().mensajes }
  );
  //   try {
  //     res.render("login");
  //   } catch (error) {
  //     console.log(error);
  //   }
};
const registerForm = (req, res) => {
  res.render("register", {
    // mensajes: req.flash().mensajes,
    csrfToken: req.csrfToken,
  });
  //   try {
  //     res.render("register");
  //   } catch (error) {
  //     console.log(error);
  //   }
};

const registerUser = async (req, res) => {
  // console.log(req.body);
  // res.json(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.json(errors);
    req.flash("mensajes", errors.array());
    return res.redirect("/auth/register");
  }
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
    //mailtrap
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.userEmail,
        pass: process.env.passEmail,
      },
    });
    await transport.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: user.email, // list of receivers
      subject: "Verifica tu cuenta de correo", // Subject line
      html: `<a href="${
        process.env.pathHeroku || "http://localhost:5000/"
      }auth/confirm/${user.tokenConfirm}"> Verifica tu cuenta aqui</a>`, // html body
    });
    req.flash("mensajes", [
      { msg: "Revisa tu correo eletronico y valida la cuanta" },
    ]);
    res.redirect("/auth/login");
  } catch (error) {
    // console.log(error);
    // res.json({ error: error.message });
    req.flash("mensajes", [{ msg: error.message }]);
    return res.redirect("/auth/register");
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

    req.flash("mensajes", [
      { msg: "Cuenta verificada, puedes iniciar sesion!" },
    ]);
    res.redirect("/auth/login");
  } catch (error) {
    req.flash("mensajes", [{ msg: error.message }]);
    return res.redirect("/auth/login");
    // res.json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    req.flash("mensajes", errors.array());
    return res.redirect("/auth/login");
  }
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) throw new Error("No existe este email registrado!");

    if (!user.cuentaConfirmada)
      throw new Error("Falta confirmar la cuenta de este usuario!");

    if (!bcrypt.compareSync(password, user.password))
      throw new Error("La contrasena no esta correta!");

    req.login(user, function (err) {
      if (err) throw new Error("Error al crear sesion!");
      res.redirect("/");
    });
    // res.redirect("/");
  } catch (error) {
    req.flash("mensajes", [{ msg: error.message }]);
    return res.redirect("/auth/login");
    // res.json({ error: error.message });
  }
};

const cerrarSesion = (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
  });
  return res.redirect("/auth/login");
};

module.exports = {
  loginForm,
  registerForm,
  registerUser,
  confirmC,
  loginUser,
  cerrarSesion,
};
