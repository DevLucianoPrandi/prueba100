const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema(
  {
    idioma: String,
    dia: String,
    horario: String,
    modalidad: String,
  },
  {
    timestamps: true,
  }
);

const Curso = mongoose.model("curso", cursoSchema);

module.exports = Curso
