const express=require ('express')
const upload = require('../libs/storage')
const { addIdioma, getIdiomas, updateIdiomas, deleteIdiomas, findIdiomas } = require ('../controllers/idiomaController')
const api= express.Router()

api.post('/idiomas', upload.single('imagen'), addIdioma)
api.get('/idiomas', getIdiomas)
api.get('/idiomas/:id', findIdiomas);
api.put('/idiomas/:id', upload.single('imagen'), updateIdiomas);
api.delete ('/idiomas/:id', deleteIdiomas)

module.exports = api