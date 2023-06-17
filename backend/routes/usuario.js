const express=require ('express')
const upload = require('../libs/storage')
const { addUsuario, getUsuarios } = require ('../controllers/usuarioController')
const api= express.Router()

api.post('/usuarios', upload.single('image'), addUsuario)
api.get('/usuarios', getUsuarios)

module.exports = api