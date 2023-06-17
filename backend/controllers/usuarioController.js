const Usuario = require("../models/Usuario");

async function addUsuario(req, res) {
  try {
    const {
      user,
      nombre,
      apellido,
      fechadenac,
      dni,
      telefono,
      email,
      password,
      imagen,
      categoria,
    } = req.body;

    const usuario = Usuario({
      user,
      nombre,
      apellido,
      fechadenac,
      dni,
      telefono,
      email,
      password,
      imagen,
      categoria,
    });

    if (req.file) {
      const { filename } = req.file;
      usuario.setImagen(filename);
    }

    const usuarios = await usuario.save();

    res.status(201).send({ usuarios });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function getUsuarios (req, res) {
const usuarios = await Usuario.find().lean().exec()
res.status(200).send({usuarios})
}

module.exports = {
  addUsuario, getUsuarios
};
