const mongoose = require("mongoose");
const { appConfig } = require("../config");

const idiomaSchema = new mongoose.Schema(
  {
    _id: Number,
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

idiomaSchema.methods.setImagen = function setImagen() {
  const { host, port } = appConfig;
  this.imagen = `${host}:${port}/public/${filename}`;
};

const Idioma = mongoose.model("idioma", idiomaSchema);

module.exports = Idioma
