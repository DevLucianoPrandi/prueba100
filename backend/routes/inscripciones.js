const express=require ('express')
const { getInscripciones } = require ('../controllers/inscripcionesController')
const api= express.Router()

api.get('/inscripciones', getInscripciones)

module.exports = api