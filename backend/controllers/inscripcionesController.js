const Inscripciones = require("../models/Inscripciones");


async function addInscripciones(req, res) {
  try {
    const { idioma, dia, horario, modalidad } = req.body;

    const Inscripciones = Inscripciones({
      idioma,
      dia,
      horario,
      modalidad,
    });

    const inscripciones = await inscripciones.save();

    res.status(201).send({ inscripciones });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function getInscripciones(req, res) {
  const inscripciones = await Inscripciones.find().lean().exec();
  res.status(200).send({ inscripciones });
}

module.exports = {
  addInscripciones,
  getInscripciones,
};
