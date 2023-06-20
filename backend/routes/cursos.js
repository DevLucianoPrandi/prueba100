const express=require ('express')
const { getCursos, addCurso, findCursos, updateCursos, deleteCursos } = require ('../controllers/cursosController')
const api= express.Router()

api.get('/cursos', getCursos)
api.post('/cursos', addCurso)
api.get('/cursos/:id', findCursos);
api.put('/cursos/:id', updateCursos);
api.delete ('/cursos/:id', deleteCursos)

module.exports = api