const Alumno = require("../models/Alumno");

async function addAlumno(req, res) {
  try {
    const {
      nombre,
      apellido,
      dni,
      fechadenac,
      email,
      telefono,
      password,
      usuario,
    } = req.body;

    const alumno = Alumno({
      nombre,
      apellido,
      dni,
      fechadenac,
      email,
      telefono,
      password,
      usuario,
    });

    if (req.file) {
      const { filename } = req.file;
      alumno.setImgUrl(filename);
    }

    const alumnos = await alumno.save();

    res.status(201).send({ alumnos });
  } catch (e) {
    res.status(500).send({ message: e.message });
  }
}

async function getAlumnos (req, res) {
const alumnos = await Alumno.find().lean().exec()
res.status(200).send({alumnos})
}

module.exports = {
  addAlumno, getAlumnos
};
