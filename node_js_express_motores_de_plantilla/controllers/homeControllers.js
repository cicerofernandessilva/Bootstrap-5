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

module.exports = { leerUrls };
