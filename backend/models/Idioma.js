const mongoose = require("mongoose");
const { appConfig } = require("../config");

const idiomaSchema = new mongoose.Schema(
  {
    nombre: String,
    descripcion: String,
    boton: String,
    paises: String,
    imagen: String,
  },
  {
    timestamps: true,
  }
);

idiomaSchema.methods.setImagen = function setImagen(filename) {
  const { host, port } = appConfig;
  this.imagen = `${host}:${port}/public/${filename}`;
};

const Idioma = mongoose.model("idioma", idiomaSchema);

module.exports = Idioma
