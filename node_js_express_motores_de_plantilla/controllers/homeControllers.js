const Url = require("../models/URL");
const { nanoid } = require("nanoid");

const leerUrls = async (req, res) => {
  const urls = [
    { origin: "www.google.com/cicero1", shortURL: "sdfdfsdf1" },
    { origin: "www.google.com/cicero2", shortURL: "sdfdfsdf2" },
    { origin: "www.google.com/cicero3", shortURL: "sdfdfsdf3" },
    { origin: "www.google.com/cicero4", shortURL: "sdfdfsdf4" },
    { origin: "www.google.com/cicero5", shortURL: "sdfdfsdf5" },
    { origin: "www.google.com/cicero6", shortURL: "sdfdfsdf6" },
  ];
  res.render("home", { urls: urls });
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

module.exports = { leerUrls, agregarUrl };
