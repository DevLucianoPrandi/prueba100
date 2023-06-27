const Idioma = require("../models/Usuario");

async function logIn (req, res) {
  try {
    const usuarios = await usuarios.user();
    res.status(201).send({ usuarios });
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
}

module.exports = {
  logIn,
};
