const mongoose= require('mongoose')

const Schema = mongoose.Schema

const inscripcionesSchema = Schema ({
idioma: String,
dia: String,
horario: String,
modalidad: String,
},{

    timestamps: true
});

module.exports = mongoose.model('inscripciones', inscripcionesSchema)