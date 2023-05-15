const { URL } = require("url");
const urlValidar = (req, res, next) => {
  try {
    const { origin } = req.body;
    const urlFrontend = new URL(origin);
    // console.log(urlFrontend.protocol, "Protocolo recebido");
    // console.log(urlFrontend);
    // console.log(urlFrontend.origin);
    // console.log(urlFrontend.origin !== null, "teste");
    // if (
    //   urlFrontend.protocol === "undefined" ||
    //   urlFrontend.protocol === "null" ||
    //   urlFrontend.protocol === " " ||
    //   urlFrontend.protocol === ""
    // ) {
    //   throw new Error("Este Url no tiene https:// 😒😒!");
    // }
    if (urlFrontend.origin !== null) {
      if (
        urlFrontend.protocol === "http:" ||
        urlFrontend.protocol === "https:"
      ) {
        return next();
      }
      // console.log("passou por aqui");
      throw new Error("Este Url no tiene https:// valido 😒!");
    }
    throw new Error("Este Url no es valida 😒!");
  } catch (error) {
    // console.log(error);
    // return res.redirect("/");
    // res.send("Este Url no es valida 😒!");
    console.log(req.body, "error");
    if (error.message === "Invalid URL") {
      req.flash("mensajes", [
        { msg: "URL invalida! Verifique se este Url no tiene 'https://' 😒" },
      ]);
    } else {
      req.flash("mensajes", [{ msg: error.message }]);
    }
    return res.redirect("/");
  }
};

module.exports = { urlValidar };
