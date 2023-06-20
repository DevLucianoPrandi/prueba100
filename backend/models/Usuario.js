const mongoose = require("mongoose");
const { appConfig } = require("../config");

const usuarioSchema = new mongoose.Schema(
  {
    _id: Number,
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

usuarioSchema.methods.setImagen = function setImagen() {
  const { host, port } = appConfig;
  this.imagen = `${host}:${port}/public/${filename}`;
};

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario
