const formidable = require("formidable");
const path = require("path");
const fs = require("fs");
const jimp = require("jimp");
const User = require("../models/User");
module.exports.formPerfil = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    return res.render("perfil", { user: req.user, imagen: user.imagen });
  } catch (error) {
    req.flash("mensajes", [{ msg: "Error al leer el usuario" }]);
    return res.redirect("/auth/login");
  }
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

      const extension = file.mimetype.split("/")[1];
      const dirFile = path.join(
        __dirname,
        `../public/img/perfiles/${req.user.id}.${extension}`
      );
      // console.log(dirFile); texte
      fs.renameSync(file.filepath, dirFile);

      const img = await jimp.read(dirFile);
      img.resize(200, 200).quality(100).writeAsync(dirFile);

      const user = await User.findById(req.user.id);
      user.imagen = `${req.user.id}.${extension}`;
      await user.save();
      req.flash("mensajes", [{ msg: "Ya se subiu la imagen😎!" }]);
      // return res.redirect("/perfil");
    } catch (error) {
      req.flash("mensajes", [{ msg: error.message }]);
      // return res.redirect("/perfil");
    } finally {
      return res.redirect("/perfil"); // sempre vai direcionar ao /perfil
    }
  });
};
