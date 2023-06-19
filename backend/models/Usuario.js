const mongoose = require("mongoose");
const { appConfig } = require("../config");

const Schema = mongoose.Schema;

const usuarioSchema = Schema(
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

module.exports = mongoose.model("usuario", usuarioSchema);
