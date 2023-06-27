const express=require ('express')
const { login } = require ('../controllers/loginController')
const api= express.Router()

api.post('/login', login)

module.exports = api