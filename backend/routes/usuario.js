const express=require ('express')
const upload = require('../libs/storage')
const { addUsuario, getUsuarios, updateUsuarios, deleteUsuario, findUsuarios } = require ('../controllers/usuarioController')
const api= express.Router()

api.post('/usuarios', upload.single('imagen'), addUsuario)
api.get('/usuarios', getUsuarios)
api.get('/usuarios/:id', findUsuarios);
api.put('/usuarios/:id', upload.single('imagen'), updateUsuarios);
api.delete ('/usuarios/:id', deleteUsuario)

module.exports = api