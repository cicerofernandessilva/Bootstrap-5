const Url = require("../models/URL");
const { nanoid } = require("nanoid");

const leerUrls = async (req, res) => {
  try {
    const urls = await Url.find().lean();
    res.render("home", { urls: urls });
  } catch (error) {
    console.log(error);
    res.send("Algo falló😥!");
  }
};

const agregarUrl = async (req, res) => {
  // console.log(req.body);
  const { origin } = req.body;
  try {
    // const url = new Url({ origin: "estático" });
    const url = new Url({ origin: origin, shortURL: nanoid(7) });
    // console.log(url);
    // res.send(`Agregado🔥! ${url}`);
    await url.save();
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Error, algo falló😥!");
  }
};

const eliminarUrl = async (req, res) => {
  const { id } = req.params;
  try {
    await Url.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    console.log(erro);
    res.send("Algo falló 😥!");
  }
};

const editarUrl = async (req, res) => {
  const { origin } = req.body;
  const { id } = req.params;
  try {
    await Url.findByIdAndUpdate(id, { origin: origin });
    res.redirect("/");
  } catch (error) {
    console.log(error);
    res.send("Algo falló 😥!");
  }
};

const editarUrlForm = async (req, res) => {
  const { id } = req.params;
  try {
    const url = await Url.findById(id).lean();
    console.log(url);
    res.render("home", { url });
  } catch (error) {
    console.log(erro);
    res.send("Algo falló 😥!");
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
    console.log(error);
    res.send("Algo falló 😥!");
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
