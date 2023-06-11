const express=require('express')
const bodyParser =require('body-parser')
const cors = require('cors')
const alumnosRoutes =require ('./routes/alumno')
const idiomasRoutes =require ('./routes/idioma')
const inscripcionesRoutes = require('./routes/inscripciones')

const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/imgs`))

app.use('/v1', alumnosRoutes)
app.use('/v1', idiomasRoutes)
app.use ('/v1', inscripcionesRoutes)

module.exports = app