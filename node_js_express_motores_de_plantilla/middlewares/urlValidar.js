const urlValidar = (req, res, next) => {
  try {
    const { origin } = req.body;
    const urlFrontend = new URL(origin);
    if (urlFrontend.origin !== "null") {
      return next();
    } else {
      throw new error("Este Url no es valida 😒!");
    }
  } catch (error) {
    // console.log(error);
    // return res.redirect("/");
    res.send("Este Url no es valida 😒!");
  }
};

module.exports = { urlValidar };
