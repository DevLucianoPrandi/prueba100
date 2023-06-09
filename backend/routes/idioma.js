const express=require ('express')
const upload = require('../libs/storage')
const { addIdioma, getIdiomas } = require ('../controllers/idiomaController')
const api= express.Router()

api.post('/idiomas', upload.single('image'), addIdioma)
api.get('/idiomas', getIdiomas)

module.exports = api