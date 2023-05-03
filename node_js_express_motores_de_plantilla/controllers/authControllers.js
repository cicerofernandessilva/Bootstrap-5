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

module.exports = {
  loginForm,
  registerForm,
};
