const mongoose = require("mongoose");
const { appConfig } = require("../config");

const usuarioSchema = new mongoose.Schema(
  {
    user: String,
    nombre: String,
    apellido: String,
    fechadenac: String,
    dni: String,
    telefono: String,
    email: String,
    password: String,
    imagen: String,
    categoria: String,
  },
  {
    timestamps: true,
  }
);

usuarioSchema.methods.setImagen = function setImagen(filename) {
  const { host, port } = appConfig;
  this.imagen = `${host}:${port}/public/${filename}`;
};

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario
