module.exports = (req, res, next) => {
  if (req.isAuthenticated()) {
    res.locals.user = req.user;
    res.locals.imagen = req.user.imagen;
    return next();
  }
  res.redirect("/auth/login");
};
