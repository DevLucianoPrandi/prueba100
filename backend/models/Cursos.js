const mongoose= require('mongoose')

const Schema = mongoose.Schema

const cursoSchema = Schema ({
idioma: String,
dia: String,
horario: String,
modalidad: String,
},{

    timestamps: true
});

module.exports = mongoose.model('cursos', cursoSchema)