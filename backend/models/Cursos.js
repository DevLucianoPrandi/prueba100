const mongoose = require("mongoose");

const cursoSchema = new mongoose.Schema(
  {
    _id: Number,
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
