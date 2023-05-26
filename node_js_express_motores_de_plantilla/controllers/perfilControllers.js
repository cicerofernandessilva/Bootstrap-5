const formidable = require("formidable");

module.exports.formPerfil = (req, res) => {
  res.render("perfil");
};

module.exports.editarFotoPerfil = (req, res) => {
  // return res.json({ ok: true }); teste
  const form = new formidable.IncomingForm();
  form.maxFileSize = 50 * 1024 * 1024; // maximo tamanho permitido en el HTML
  form.parse(req, async (err, field, files) => {
    try {
      if (err) {
        throw new Error("Falló la subida de imagenes");
      }
      // console.log(files);
      // console.log(field);
      const file = files.myFile;
      if (file.originalFilename === "") {
        throw new Error("Tu no agrego uma imagen");
      }
      if (
        !(
          file.mimetype === "image/jpeg" ||
          file.mimetype === "image/png" ||
          file.mimetype === "image/webp"
        )
      ) {
        throw new Error("Por favor agrega uma imagen en el formato JPG o PNG");
      }
      if (file.size > 50 * 1024 * 1024) {
        throw new Error("Por favor agrega uma imagen menor que 5mb");
      }

      req.flash("mensajes", [{ msg: "Ya se subiu la imagen😎!" }]);
      return res.redirect("/perfil");
    } catch (error) {
      req.flash("mensajes", [{ msg: error.message }]);
      return res.redirect("/perfil");
    }
  });
};
