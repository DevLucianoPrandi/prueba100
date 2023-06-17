const express=require ('express')
const { getCursos, addCurso } = require ('../controllers/cursosController')
const api= express.Router()

api.get('/cursos', getCursos)
api.post('/cursos', addCurso)

module.exports = api