const express=require ('express')
const upload = require('../libs/storage')
const { addAlumno, getAlumnos } = require ('../controllers/alumnoController')
const api= express.Router()

api.post('/alumnos', upload.single('image'), addAlumno)
api.get('/alumnos', getAlumnos)

module.exports = api