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

async function getUsuarios(req, res) {
   try {
    const usuarios = await Usuario.find();
    res.status(200).send ({usuarios})
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function findUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findById(req.params.id);
    res.status(201).send({ usuarios });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function updateUsuarios(req, res) {
  try {
    const usuarios = await Usuario.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(201).send({ usuarios });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

async function deleteUsuario(req, res) {
  try {
    const usuarios = await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).send({ usuarios });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}


module.exports = {
  addUsuario,
  getUsuarios,
  findUsuarios,
  updateUsuarios,
  deleteUsuario
};