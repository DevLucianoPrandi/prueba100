const Curso = require("../models/Cursos");

async function addCurso(req, res) {
  try {
    const { idioma, dia, horario, modalidad } = req.body;

    const curso = Curso({
      idioma,
      dia,
      horario,
      modalidad,
    });

    const cursos = await curso.save();

    res.status(201).send({ cursos });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function getCursos(req, res) {
  const cursos = await Curso.find().lean().exec();
  res.status(200).send({ cursos });
}

module.exports = {
  addCurso,
  getCursos,
};
