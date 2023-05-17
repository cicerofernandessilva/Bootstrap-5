const Url = require("../models/URL");
const { nanoid } = require("nanoid");

const leerUrls = async (req, res) => {
  try {
    const urls = await Url.find({ user: req.user.id }).lean();
    res.render("home", { urls: urls });
  } catch (error) {
    // console.log(error);
    // res.send("Algo falló😥!");
    req.flash("mensajes", [{ msg: error.message }]);
    return res.redirect("/");
  }
};

const agregarUrl = async (req, res) => {
  // console.log(req.body);
  const { origin } = req.body;
  try {
    // const url = new Url({ origin: "estático" });
    const url = new Url({
      origin: origin,
      shortURL: nanoid(7),
      user: req.user.id,
    });
    // console.log(url);
    // res.send(`Agregado🔥! ${url}`);
    await url.save();
    req.flash("mensajes", [{ msg: "Url agregada con exito! 😍😁🔥" }]);
    res.redirect("/");
  } catch (error) {
    // console.log(error);
    // res.send("Error, algo falló😥!");
    req.flash("mensajes", [{ msg: error.message }]);
    return res.redirect("/");
  }
};

const eliminarUrl = async (req, res) => {
  const { id } = req.params;
  try {
    // await Url.findByIdAndDelete(id);
    const url = await Url.findById(id);
    if (!url.user.equals(req.user.id)) {
      throw new Error("No es tu url payaso 🤡");
    }
    // await url.remove();
    await url.deleteOne();
    req.flash("mensajes", [{ msg: "Url Eliminada! 🗑 🗑" }]);
    res.redirect("/");
  } catch (error) {
    // console.log(erro);
    // res.send("Algo falló 😥!");
    req.flash("mensajes", [{ msg: error.message }]);
    return res.redirect("/");
  }
};

const editarUrl = async (req, res) => {
  const { origin } = req.body;
  const { id } = req.params;
  try {
    // await Url.findByIdAndUpdate(id, { origin: origin });
    const url = await Url.findById(id);
    if (!url.user.equals(req.user.id)) {
      throw new Error("No es tu url payaso 🤡");
    }
    await url.updateOne({ origin });
    req.flash("mensajes", [{ msg: "Url Editada! 👏👏" }]);
    res.redirect("/");
  } catch (error) {
    // console.log(error);
    // res.send("Algo falló 😥!");
    req.flash("mensajes", [{ msg: error.message }]);
    return res.redirect("/");
  }
};

const editarUrlForm = async (req, res) => {
  const { id } = req.params;
  try {
    const url = await Url.findById(id).lean();
    if (!url.user.equals(req.user.id)) {
      throw new Error("No es tu url payaso 🤡");
    }
    // console.log(url);
    res.render("home", { url });
  } catch (error) {
    // console.log(erro);
    // res.send("Algo falló 😥!");
    req.flash("mensajes", [{ msg: error.message }]);
    return res.redirect("/");
  }
};

const redirectShort = async (req, res) => {
  const { shortURL } = req.params;
  // console.log(shortURL);
  try {
    const url = await Url.findOne({ shortURL: shortURL });
    // console.log(url);
    // res.redirect(url.origin);
    if (!url?.origin) {
      res.sendStatus(404);
    } else {
      res.redirect(url.origin);
    }
  } catch (error) {
    // console.log(error);
    // res.send("Algo falló 😥!");
    req.flash("mensajes", [{ msg: "No existe esta URL 😑😑😑" }]);
    return res.redirect("/");
  }
};

module.exports = {
  leerUrls,
  agregarUrl,
  eliminarUrl,
  editarUrl,
  editarUrlForm,
  redirectShort,
};
